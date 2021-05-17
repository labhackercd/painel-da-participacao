/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
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

import {
  wikilegisParticipantsToolTip, wikilegisOpinionsToolTip, wikilegisVotesToolTip,
  wikilegisRankingToolTip, wikilegisLegislativeProposesToolTip,
} from '../../services/texts/tooltips';
import formatNumberWithDots from '../../utils/format/numbers/formatNumbersWithDots/formatNumberWithDots';

import {
  MONTHS_LIST, MONTHS_ABBREVIATED_LIST, DEFAULT_YEAR, DEFAULT_SELECTED_PERIOD_TYPE,
  DEFAULT_MONTH_PERIOD, DAILY_KEY_WORD, MONTHLY_KEY_WORD, WIKILEGIS_INITIAL_YEAR,
  CURRENT_YEAR,
} from '../../services/constants/constants';

import { audiencesChartsUsersSettings, audiencesWithMoreParticipation } from './settings/chartsSettings';
import { rankingWikilegisColumns, rankingWikilegisHeaders } from './settings/rankingSettings';
import { filterRankingWikilegis } from './auxFunctions/filterRanking';
import { getApiLastUpdateDateAndHour } from './auxFunctions/getApiLastUpdateDateAndHour';

import customTheme from '../../styles/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  headerBox: {
    backgroundColor: theme.palette.primary.main,
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    overflow: 'auto',
    flexGrow: 1,
    padding: '2.5rem 0 0 0',
  },
  contentBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  spacingContainer: {
    marginTop: theme.spacing(3),
  },
  positionStats: {
    display: 'flex',
  },
  divider: {
    borderColor: theme.palette.wikilegis.jade,
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const defaultYear = DEFAULT_YEAR;
const defaultSelectedPeriodType = DEFAULT_SELECTED_PERIOD_TYPE; // Get all months of the year
const defaultMonthPeriod = DEFAULT_MONTH_PERIOD; // All months
const dailyKeyWord = DAILY_KEY_WORD;
const monthlyKeyWord = MONTHLY_KEY_WORD;
const monthNamesList = MONTHS_ABBREVIATED_LIST;

function Wikilegis(props) {
  const TOOLNAME = 'Wikilegis';
  const { defaultApisData, apiLastCacheMade, apiLastCacheMadeHour } = props;
  const headerColors = {
    borderColor: '#00C354',
    button: {
      main: '#14D768',
      hover: '#00612A',
    },
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
  const [periodSubTitle, setPeriodSubTitle] = useState(`${WIKILEGIS_INITIAL_YEAR} a ${CURRENT_YEAR}`);
  const [participantionChartDataLastUpdate, setParticipantionChartDataLastUpdate] = useState(apiLastCacheMade);
  const roomsRankingDataLastUpdate = apiLastCacheMade;
  // const [totalUsersChartDataLastUpdate, setTotalUsersChartDataLastUpdate] = useState(apiLastCacheMade);
  const [newUsersChartDataLastUpdate, setNewUsersChartDataLastUpdate] = useState(apiLastCacheMade);
  // Period Selected states
  const [selectedPeriod, setSelectedPeriod] = useState(defaultSelectedPeriodType);
  const [selectedYear, setSelectedYear] = useState(defaultYear);
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

  const totalAcumuladoUsuariosCadastrados = 'Total Acumulado de Usuários Cadastrados';

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
    const diffRound = Math.abs(Math.round(diff)); // Return the difference in hour

    if (diffRound > 2) {
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
        opinions_total: formatNumberWithDots(apisDataObject.wikilegisLegislativeProposalsAPIData.sum_total_results),
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
            opinionsData, voteData, WIKILEGIS_INITIAL_YEAR,
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
        setPeriodSubTitle(`${MONTHS_LIST[month - 1]}/${year}`);
        break;
      case monthlyKeyWord:
        setPeriodSubTitle(`${year}`);
        break;
      default: // yearly -> Total period
        setPeriodSubTitle(
          `${WIKILEGIS_INITIAL_YEAR} a ${CURRENT_YEAR}`,
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
      setShowCachedDataAlert();
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
        title={TOOLNAME}
        handlePeriodChange={handlePeriodChange}
        year={defaultYear}
        monthPeriod={defaultMonthPeriod}
        headerColors={headerColors}
        initialYear={WIKILEGIS_INITIAL_YEAR}
      />
      <Grid container spacing={1} className={classes.spacingContainer}>

        { showCachedDataAlert && (
          <AlertCachedData apiLastCacheMade={apiLastCacheMade} />
        )}

        <Grid item xs={12}>
          <SectionHeader classes={classes} toolTipText={null} title="Totais no período" />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${wikilegisTotalsData.participants_total}`}
            title="Participantes"
            toolTipText={wikilegisParticipantsToolTip}
            toolTipAriaLabel="Informação sobre o termo participantes"
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${wikilegisTotalsData.legis_propo_total}`}
            title="Propostas Legislativas"
            toolTipText={wikilegisLegislativeProposesToolTip}
            toolTipAriaLabel="Informação sobre o termo propostas legislativas"
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${wikilegisTotalsData.opinions_total}`}
            title="Opiniões"
            toolTipAriaLabel="Informação sobre o termo opiniões"
            toolTipText={wikilegisOpinionsToolTip}
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={wikilegisTotalsData.votes_total}
            title="Votos nas opiniões"
            toolTipAriaLabel="Informação sobre o termo votos na Wikilegis"
            toolTipText={wikilegisVotesToolTip}
            toolTipColor={customTheme.palette.wikilegis.jade}
          />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SectionHeader classes={classes} toolTipText={null} title="Distribuição da participação no período" />
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
          <SectionHeader classes={classes} title="Ranking das propostas legislativas" toolTipText={wikilegisRankingToolTip} toolTipColor={customTheme.palette.wikilegis.jade} />
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
          <SectionHeader classes={classes} toolTipText={null} title="Usuários" />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SubSectionHeader title="Novos cadastros de usuários" />
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
          <SubSectionHeader title={totalAcumuladoUsuariosCadastrados} />
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
