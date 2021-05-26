/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  getWikilegisParticipationChartDataByDay,
  getWikilegisParticipationChartDataByMonth,
  getWikilegisParticipationChartDataByYear,
} from './auxFunctions/computeParticipation';

import { handleUpdatePeriodSearchQuery } from '../../services/functions/handlers/index';

import {
  AlertCachedData, ChartDataFrame, Header, RankingTable, TotalFrame, SectionHeader, SubSectionHeader,
  NoDataForSelectedPeriod, ChartAndReport,
} from '../../components';
import formatNumberWithDots from '../../utils/format/numbers/formatNumbersWithDots/formatNumberWithDots';

import * as APPLICATION_OPTIONS from '../../settings/applicationOptions/index';
import * as APPLICATION_CONSTANTS from '../../utils/constants/index';

import { audiencesChartsUsersSettings, audiencesWithMoreParticipation } from './settings/chartsSettings';
import { rankingWikilegisColumns, rankingWikilegisHeaders } from './settings/rankingSettings';
import { filterRankingWikilegis } from './auxFunctions/filterRanking';
import { getApiLastUpdateDateAndHour } from './auxFunctions/getApiLastUpdateDateAndHour';
import { useStyles } from './style';
import customTheme from '../../styles/theme';

import * as TEXTCONSTANTS from '../../settings/texts/WikilegisPage';

const defaultSelectedPeriodType = APPLICATION_OPTIONS.DEFAULT_SELECTED_PERIOD_TYPE; // Get all months of the year
const defaultMonthPeriod = APPLICATION_OPTIONS.DEFAULT_MONTH_PERIOD; // All months
const defaultYearPeriod = APPLICATION_OPTIONS.DEFAULT_YEAR_PERIOD; // All years
const dailyKeyWord = APPLICATION_CONSTANTS.DAILY_KEY_WORD;
const monthlyKeyWord = APPLICATION_CONSTANTS.MONTHLY_KEY_WORD;
const monthNamesList = APPLICATION_CONSTANTS.MONTHS_ABBREVIATED_LIST;
const wikilegisInitialYear = APPLICATION_OPTIONS.WIKILEGIS_INITIAL_YEAR;
const currentYear = APPLICATION_CONSTANTS.CURRENT_YEAR;

function Wikilegis(props) {
  const TOOLNAME = APPLICATION_OPTIONS.WIKILEGIS_TOOL_NAME;
  const { defaultApisData, apiLastCacheMade, apiLastCacheMadeHour } = props;
  const headerColors = {
    borderColor: TEXTCONSTANTS.pageColor,
  };

  const classes = useStyles();
  // Charts and report Data
  const [wikilegisTotalsData, setWikilegisTotalsData] = useState('');
  const [newUsersChartData, setNewUsersChartData] = useState([]);
  const [totalUsersChartData, setTotalUsersChartData] = useState([]);
  const [roomsRankingData, setRoomsRankingData] = useState(defaultApisData.wikilegisRankingData);
  const [participantionChartData, setParticipantionChartData] = useState([]);
  // Error Status
  const [showCachedDataAlert, setShowCachedDataAlert] = useState(false);
  // Load Status
  const [totalsAreLoaded, setTotalsAreLoaded] = useState(false);
  const [newUsersChartDataLoaded, setNewUsersChartDataLoaded] = useState(false);
  const [totalUsersChartDataLoaded, setTotalUsersChartDataLoaded] = useState(false);
  // Information states
  const [periodSubTitle, setPeriodSubTitle] = useState(`${wikilegisInitialYear} a ${currentYear}`);
  const [participantionChartDataLastUpdate, setParticipantionChartDataLastUpdate] = useState(apiLastCacheMade);
  const roomsRankingDataLastUpdate = apiLastCacheMade;
  // const [totalUsersChartDataLastUpdate, setTotalUsersChartDataLastUpdate] = useState(apiLastCacheMade);
  const [newUsersChartDataLastUpdate, setNewUsersChartDataLastUpdate] = useState(apiLastCacheMade);
  // Period Selected states
  const [selectedPeriod, setSelectedPeriod] = useState(defaultSelectedPeriodType);
  const [selectedYear, setSelectedYear] = useState(defaultYearPeriod);
  const [selectedMonth, setSelectedMonth] = useState(defaultMonthPeriod);
  const [apisDataObject, setApisDataObject] = useState({
    wikilegisRankingAPIData: defaultApisData.wikilegisRankingData,
    wikilegisParticipantAPIData: defaultApisData.wikilegisParticipantUsersAPIData,
    wikilegisLegislativeProposalsAPIData: defaultApisData.wikilegisLegislativeProposalsAPIData,
    wikilegisOpinionsAPIData: defaultApisData.wikilegisOpinionsAPIData,
    wikilegisQuestionsAPIData: defaultApisData.wikilegisQuestionsAPIData,
    wikilegisVotesAPIData: defaultApisData.wikilegisVotesAPIData,
    wikilegisNewUsersAPIData: defaultApisData.wikilegisNewUsersAPIData,
  });

  const totalAcumuladoUsuariosCadastrados = TEXTCONSTANTS.usersSectionTexts.subSectionAccumulatedRegisteredUsers.title;

  function computeTotalOfUsersByPeriod(values, period) {
    const computedArray = [];
    let collumPeriodTitle = [];

    try {
      if (values !== null) {
        switch (period) {
          case dailyKeyWord:
            computedArray.push([values[0].start_date.match(/\d+/g)[2], values[0].new_users]);
            for (let i = 1; i < values.length; i += 1) {
              computedArray.push(
                [values[i].start_date.match(/\d+/g)[2],
                  values[i].new_users + computedArray[i - 1][1]],
              );
            }
            collumPeriodTitle = [['Dia', totalAcumuladoUsuariosCadastrados]];
            break;
          case monthlyKeyWord:
            computedArray.push(
              [monthNamesList[(new Date(values[0].end_date)).getMonth()], values[0].new_users],
            );
            for (let i = 1; i < values.length; i += 1) {
              computedArray.push(
                [monthNamesList[(new Date(values[i].end_date)).getMonth()],
                  values[i].new_users + computedArray[i - 1][1]],
              );
            }
            collumPeriodTitle = [['Mês', totalAcumuladoUsuariosCadastrados]];
            break;
          default:
            computedArray.push(
              [new Date(values[0].end_date).getFullYear().toString(), values[0].new_users],
            );
            for (let i = 1; i < values.length; i += 1) {
              computedArray.push(
                [new Date(values[i].end_date).getFullYear().toString(),
                  values[i].new_users + computedArray[i - 1][1]],
              );
            }
            collumPeriodTitle = [['Ano', totalAcumuladoUsuariosCadastrados]];
            break;
        }

        // setTotalUsersChartDataLastUpdate(values[0].modified);
      } else {
        collumPeriodTitle = [];
      }
    } catch (e) {
      console.error(e);
    }
    setTotalUsersChartData(collumPeriodTitle.concat(computedArray));
    setTotalUsersChartDataLoaded(true);
  }

  function checkIfCachedDataIsUpdated() {
    const currentDateAndHour = new Date();
    const cachedHour = new Date(apiLastCacheMadeHour);
    let diff = (currentDateAndHour.getTime() - cachedHour.getTime()) / 1000;
    diff /= 60;
    const diffRound = Math.abs(Math.round(diff)); // Return the difference in minutes

    if (diffRound > APPLICATION_OPTIONS.SHOW_API_CACHE_ERROR_MESSAGE_LIMIT_TIME) {
      setShowCachedDataAlert(true);
    }
  }

  async function fetchDataFromApi(apiUrl, query) {
    try {
      const axiosResponse = await axios.get(`${apiUrl}${query}`);
      return axiosResponse.data;
    } catch (e) {
      throw new Error(`Erro ao obter dados da api ${apiUrl}`);
    }
  }

  async function fetchAndUpdateApisData(query) {
    try {
      const participants = await fetchDataFromApi(process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL, query);
      const legislativeProposals = await fetchDataFromApi(process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL, query);
      const opinions = await fetchDataFromApi(process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL, query);
      const votes = await fetchDataFromApi(process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL, query);
      const newUsers = await fetchDataFromApi(process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL, query);

      setApisDataObject({
        wikilegisParticipantAPIData: participants,
        wikilegisLegislativeProposalsAPIData: legislativeProposals,
        wikilegisOpinionsAPIData: opinions,
        wikilegisVotesAPIData: votes,
        wikilegisNewUsersAPIData: newUsers,
      });
    } catch (e) {
      // If an error occurred, throw error and set default cachedData to whole page;
      throw new Error('Erro ao obter dados das APIS');
    }
  }

  async function updateTotalsData() {
    try {
      const dataJson = {
        participants_total: formatNumberWithDots(apisDataObject.wikilegisParticipantAPIData.sum_total_results),
        legis_propo_total: formatNumberWithDots(apisDataObject.wikilegisLegislativeProposalsAPIData.sum_total_results),
        opinions_total: formatNumberWithDots(apisDataObject.wikilegisOpinionsAPIData.sum_total_results),
        votes_total: formatNumberWithDots(apisDataObject.wikilegisVotesAPIData.sum_total_results),
      };

      await setWikilegisTotalsData(dataJson);
      await setTotalsAreLoaded(true);
    } catch (e) {
      const dataJson = {
        participants_total: '-',
        legis_propo_total: '-',
        opinions_total: '-',
        votes_total: '-',
      };

      await setWikilegisTotalsData(dataJson);
      await setTotalsAreLoaded(true);
    }
  }

  async function updateParticipationChartData(period, month, year) {
    const collumPeriodTitle = ['Data', 'Opiniões', 'Votos'];
    try {
      const opinionsData = apisDataObject.wikilegisOpinionsAPIData.results;
      const voteData = apisDataObject.wikilegisVotesAPIData.results;
      let arrayData = [];
      switch (period) {
        case dailyKeyWord:
          arrayData = await getWikilegisParticipationChartDataByDay(
            month, year, opinionsData, voteData,
          );
          break;
        case monthlyKeyWord:
          arrayData = await getWikilegisParticipationChartDataByMonth(
            month, year, opinionsData, voteData,
          );
          break;
        default: // yearly -> Total period
          arrayData = await getWikilegisParticipationChartDataByYear(
            opinionsData, voteData, wikilegisInitialYear,
          );
          break;
      }

      if (arrayData.length > 0) {
        setParticipantionChartData([collumPeriodTitle].concat(arrayData));
        setParticipantionChartDataLastUpdate(
          getApiLastUpdateDateAndHour(opinionsData, voteData),
        );
      } else {
        setParticipantionChartData(arrayData);
      }
    } catch (e) {
      setParticipantionChartData([]);
      setParticipantionChartDataLastUpdate(apiLastCacheMade);
    }
  }

  async function updateNewUsersChartData(period) {
    const values = apisDataObject.wikilegisNewUsersAPIData.results;
    let arrayData = [];
    let collumPeriodTitle = [];

    switch (period) {
      case dailyKeyWord:
        arrayData = values.map(
          (value) => [value.start_date.match(/\d+/g)[2], value.new_users],
        );
        collumPeriodTitle = ['Dia', 'Novos Usuários'];
        break;
      case monthlyKeyWord:
        arrayData = values.map(
          (value) => [monthNamesList[(new Date(value.end_date)).getMonth()], value.new_users],
        );
        collumPeriodTitle = ['Mês', 'Novos Usuários'];
        break;
      default:
        arrayData = values.map(
          (value) => [new Date(value.end_date).getFullYear().toString(), value.new_users],
        );
        collumPeriodTitle = ['Ano', 'Novos Usuários'];
        break;
    }

    if (arrayData.length > 0) {
      setNewUsersChartDataLastUpdate(values[0].modified);
      setNewUsersChartData([collumPeriodTitle].concat(arrayData));
    } else {
      setNewUsersChartData(arrayData);
    }

    setNewUsersChartDataLoaded(true);

    if (Array.isArray(values) && values.length) {
      computeTotalOfUsersByPeriod(values, period);
    } else {
      computeTotalOfUsersByPeriod(null, period);
    }
  }

  async function updateChartsAndTableSubTitle(period, month, year) {
    switch (period) {
      case dailyKeyWord:
        setPeriodSubTitle(`${APPLICATION_CONSTANTS.MONTHS_LIST[month - 1]}/${year}`);
        break;
      case monthlyKeyWord:
        setPeriodSubTitle(`${year}`);
        break;
      default: // yearly -> Total period
        setPeriodSubTitle(
          `${wikilegisInitialYear} a ${currentYear}`,
        );
        break;
    }
  }

  async function filterAndSetDocumentsRankingData(period, month, year) {
    let resultArray = [];
    const allRooms = defaultApisData.wikilegisRankingData;

    switch (period) {
      case dailyKeyWord:
        resultArray = await allRooms.filter((value) => {
          const [valueYear, valueMonth] = value.closing_date.split('-'); // Or, var month = e.date.split('-')[1];
          return (
            (parseInt(month, 10) === parseInt(valueMonth, 10))
            && (parseInt(year, 10) === parseInt(valueYear, 10))
          );
        });
        break;
      case monthlyKeyWord:
        resultArray = await allRooms.filter((value) => {
          const [valueYear] = value.closing_date.split('-'); // Or, var month = e.date.split('-')[1];
          return (parseInt(year, 10) === parseInt(valueYear, 10));
        });
        break;
      default: // yearly -> Total period
        resultArray = allRooms;
        break;
    }

    await setRoomsRankingData(resultArray);
  }

  async function updateAllPageInformations(period, month, year) {
    try {
      await updateTotalsData();
      await filterAndSetDocumentsRankingData(period, month, year);
      await updateParticipationChartData(period, month, year);
      await updateNewUsersChartData(period);
    } catch (e) {
      console.error('Erro ao carregar dados da página Update Page');
    }
  }

  async function resetPageComponentsLoadedStatusToFalse() {
    setTotalsAreLoaded(false);
    setNewUsersChartDataLoaded(false);
    setTotalUsersChartDataLoaded(false);
  }

  async function setAllApiDataToDefaultCache() {
    setApisDataObject({
      wikilegisRankingAPIData: defaultApisData.wikilegisRankingData,
      wikilegisParticipantAPIData: defaultApisData.wikilegisParticipantUsersAPIData,
      wikilegisLegislativeProposalsAPIData: defaultApisData.wikilegisLegislativeProposalsAPIData,
      wikilegisOpinionsAPIData: defaultApisData.wikilegisOpinionsAPIData,
      wikilegisQuestionsAPIData: defaultApisData.wikilegisQuestionsAPIData,
      wikilegisVotesAPIData: defaultApisData.wikilegisVotesAPIData,
      wikilegisNewUsersAPIData: defaultApisData.wikilegisNewUsersAPIData,
    });
  }

  async function newLoadData(query, period, month, year) {
    try {
      await resetPageComponentsLoadedStatusToFalse();
      await updateChartsAndTableSubTitle(period, month, year);
      await fetchAndUpdateApisData(query);
    } catch (e) {
      console.error('Erro ao obter dados e atualizar página');
      setAllApiDataToDefaultCache();
      setShowCachedDataAlert(true);
    }
  }

  async function updateSelectedPeriodInterval(period, month, year) {
    setSelectedPeriod(period);
    setSelectedMonth(month);
    setSelectedYear(year);
  }

  async function handlePeriodChange(month, year) {
    try {
      const { query, period } = await handleUpdatePeriodSearchQuery(month, year);
      await updateSelectedPeriodInterval(period, month, year);
      await newLoadData(query, period, month, year);
    } catch (e) {
      console.error('Erro ao tentar modificar período selecionado');
    }
  }

  useEffect(() => {
    updateAllPageInformations(selectedPeriod, selectedMonth, selectedYear);
  }, [apisDataObject]);

  useEffect(() => {
    checkIfCachedDataIsUpdated();
  }, []);

  function ChartAndNoDataRenderHandler(props) {
    const {
      height, chartData, chartDataLoaded, title, chartClasses,
      chartSettings, apiLastUpdate, toolName, color,
      apiUrl,
    } = props;

    return (
      (chartData !== undefined && chartData.length > 0) ? (
        <div className={classes.contentBox}>
          <ChartAndReport
            height={height}
            data={chartData}
            isLoaded={chartDataLoaded}
            title={title}
            classes={chartClasses}
            chartType={chartSettings.chartType}
            chartOptions={chartSettings.options}
            exportData={chartData}
            download
            apiLastUpdate={apiLastUpdate}
            tool={toolName}
            apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
          />
        </div>
      ) : (
        <NoDataForSelectedPeriod
          title={title}
          tool={toolName}
          apiLastUpdate={apiLastUpdate}
          toolColor={color}
          apiUrl={apiUrl}
        />
      )
    );
  }

  return (
    <div className={classes.root}>
      <Header
        title={TEXTCONSTANTS.pageToolTitle}
        handlePeriodChange={handlePeriodChange}
        year={defaultYearPeriod}
        monthPeriod={defaultMonthPeriod}
        headerColors={headerColors}
        initialYear={wikilegisInitialYear}
      />
      <Grid container spacing={1} className={classes.spacingContainer}>

        { showCachedDataAlert && (
          <AlertCachedData apiLastCacheMade={apiLastCacheMade} />
        )}

        <Grid item xs={12}>
          <SectionHeader
            classes={classes}
            title={TEXTCONSTANTS.wikilegisTotalsSectionTexts.title}
            toolTipText={TEXTCONSTANTS.wikilegisTotalsSectionTexts.toolTip}
            toolTipAriaLabel={TEXTCONSTANTS.wikilegisTotalsSectionTexts.toolTipAriaLabel}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${wikilegisTotalsData.participants_total}`}
            title={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionParticipantsTotals.title}
            toolTipText={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionParticipantsTotals.toolTip}
            toolTipAriaLabel={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionParticipantsTotals.toolTipAriaLabel}
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${wikilegisTotalsData.legis_propo_total}`}
            title={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionLegislativeProposalsTotals.title}
            toolTipText={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionLegislativeProposalsTotals.toolTip}
            toolTipAriaLabel={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionLegislativeProposalsTotals.toolTipAriaLabel}
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${wikilegisTotalsData.opinions_total}`}
            title={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionOpinionsTotals.title}
            toolTipText={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionOpinionsTotals.toolTip}
            toolTipAriaLabel={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionOpinionsTotals.toolTipAriaLabel}
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={wikilegisTotalsData.votes_total}
            title={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionVotesTotals.title}
            toolTipText={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionVotesTotals.toolTip}
            toolTipAriaLabel={TEXTCONSTANTS.wikilegisTotalsSectionTexts.subSectionVotesTotals.toolTipAriaLabel}
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SectionHeader
            classes={classes}
            title={TEXTCONSTANTS.distributionOfParticipationSectionTexts.title}
            toolTipText={TEXTCONSTANTS.distributionOfParticipationSectionTexts.toolTip}
            toolTipAriaLabel={TEXTCONSTANTS.distributionOfParticipationSectionTexts.toolTipAriaLabel}
          />
          <ChartAndNoDataRenderHandler
            height="60vh"
            chartData={participantionChartData}
            chartDataLoaded
            title={periodSubTitle}
            chartClasses={classes}
            chartSettings={audiencesWithMoreParticipation}
            apiLastUpdate={participantionChartDataLastUpdate}
            toolName={TOOLNAME}
            color={headerColors.borderColor}
            apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
          />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SectionHeader
            classes={classes}
            title={TEXTCONSTANTS.rankingSectionTexts.title}
            toolTipText={TEXTCONSTANTS.rankingSectionTexts.toolTip}
            toolTipAriaLabel={TEXTCONSTANTS.rankingSectionTexts.toolTipAriaLabel}
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
          {(roomsRankingData !== undefined && roomsRankingData.length > 0) ? (
            <ChartDataFrame
              height="30vh"
              title={periodSubTitle}
              listView
              align="center"
              apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
              apiLastUpdate={roomsRankingDataLastUpdate}
              tool={TOOLNAME}
              section="Report"
              exportData={roomsRankingData}
              download
              downloadHeaders={rankingWikilegisHeaders}
            >
              <Box width="100%" height="90%">
                <RankingTable
                  data={roomsRankingData}
                  columns={rankingWikilegisColumns}
                  filterRanking={filterRankingWikilegis}
                />
              </Box>
            </ChartDataFrame>
          ) : (
            <NoDataForSelectedPeriod
              title={periodSubTitle}
              tool={TOOLNAME}
              apiLastUpdate={roomsRankingDataLastUpdate}
              toolColor={headerColors.borderColor}
              apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
            />
          )}
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SectionHeader
            classes={classes}
            title={TEXTCONSTANTS.usersSectionTexts.title}
            toolTipText={TEXTCONSTANTS.usersSectionTexts.toolTip}
            toolTipAriaLabel={TEXTCONSTANTS.usersSectionTexts.toolTipAriaLabel}
          />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SubSectionHeader
            title={TEXTCONSTANTS.usersSectionTexts.subSectionNewUsers.title}
            toolTipText={TEXTCONSTANTS.usersSectionTexts.subSectionNewUsers.toolTip}
            toolTipAriaLabel={TEXTCONSTANTS.usersSectionTexts.subSectionNewUsers.toolTipAriaLabel}
          />
          <ChartAndNoDataRenderHandler
            height="60vh"
            chartData={newUsersChartData}
            chartDataLoaded={newUsersChartDataLoaded}
            title={periodSubTitle}
            chartClasses={classes}
            chartSettings={audiencesChartsUsersSettings}
            apiLastUpdate={newUsersChartDataLastUpdate}
            toolName={TOOLNAME}
            color={headerColors.borderColor}
            apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
          />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SubSectionHeader
            title={TEXTCONSTANTS.usersSectionTexts.subSectionAccumulatedRegisteredUsers.title}
            toolTipText={TEXTCONSTANTS.usersSectionTexts.subSectionAccumulatedRegisteredUsers.toolTip}
            toolTipAriaLabel={TEXTCONSTANTS.usersSectionTexts.subSectionAccumulatedRegisteredUsers.toolTipAriaLabel}
          />
          <ChartAndNoDataRenderHandler
            height="60vh"
            chartData={totalUsersChartData}
            chartDataLoaded={totalUsersChartDataLoaded}
            title={periodSubTitle}
            chartClasses={classes}
            chartSettings={audiencesChartsUsersSettings}
            apiLastUpdate={newUsersChartDataLastUpdate}
            toolName={TOOLNAME}
            color={headerColors.borderColor}
            apiUrl={process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}
          />
        </Grid>
      </Grid>
    </div>
  );
}

Wikilegis.propTypes = {
  defaultApisData: PropTypes.object,
  apiLastCacheMade: PropTypes.string,
};

Wikilegis.defaultProps = {
  defaultApisData: {},
  apiLastCacheMade: 'Carregando ...',
};

export default Wikilegis;
