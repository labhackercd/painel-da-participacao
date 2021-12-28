/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { format, subDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { apiInstance } from '../../services/api/apiInstance';
import {
  AlertCachedData,
  ChartDataFrame,
  Header,
  RankingTable,
  TotalFrame,
  SectionHeader,
  SubSectionHeader,
  NoDataForSelectedPeriod,
  ChartAndReport,
  AlertDataConsolidateInterval,
  ChartTotalRoomsWithFilter,
} from '../../components';
import {
  handleUpdatePeriodSearchQuery,
  handleUpdatePeriodSearchQueryParticipants,
} from '../../services/functions/handlers/index';
import formatNumberWithDots from '../../utils/format/numbers/formatNumbersWithDots/formatNumberWithDots';

import * as APPLICATION_OPTIONS from '../../settings/applicationOptions/index';
import * as APPLICATION_CONSTANTS from '../../utils/constants/index';

import {
  getParticipationChartDataByDay,
  getParticipationChartDataByMonth,
  getParticipationChartDataByYear,
} from './auxFunctions/computeParticipation';
import {
  getRoomTotalsChartDataByDay,
  getRoomTotalsChartDataByMonth,
  getRoomTotalsChartDataByYear,
} from './auxFunctions/computeTotalRooms';
import filterRankingAudiencias from './auxFunctions/filterRanking';
import {
  audiencesChartsUsersSettings,
  audiencesWithMoreParticipation,
  audiencesRoomsTotalsChart,
} from './settings/chartsSettings';
import {
  rankingAudienciasHeaders,
  rankingAudienciaColumns,
} from './settings/rankingSettings';
import { useStyles } from './style';
import customTheme from '../../styles/theme';

import * as TEXTCONSTANTS from '../../settings/texts/AudienciasPage';

const defaultSelectedPeriodType = APPLICATION_OPTIONS.DEFAULT_SELECTED_PERIOD_TYPE; // Get all months of the year
const defaultMonthPeriod = APPLICATION_OPTIONS.DEFAULT_MONTH_PERIOD; // All months
const defaultYearPeriod = APPLICATION_OPTIONS.DEFAULT_YEAR_PERIOD; // All years
const dailyKeyWord = APPLICATION_CONSTANTS.DAILY_KEY_WORD;
const monthlyKeyWord = APPLICATION_CONSTANTS.MONTHLY_KEY_WORD;
const monthNamesList = APPLICATION_CONSTANTS.MONTHS_ABBREVIATED_LIST;
const audienceInitialYear = APPLICATION_OPTIONS.AUDIENCIAS_INITIAL_YEAR;
const currentYear = APPLICATION_CONSTANTS.CURRENT_YEAR;

function Audiencias(props) {
  const TOOLNAME = APPLICATION_OPTIONS.AUDIENCIAS_TOOL_NAME;
  const { defaultApisData, apiLastCacheMade, apiLastCacheMadeHour } = props;
  const headerColors = {
    borderColor: TEXTCONSTANTS.pageColor,
  };

  const classes = useStyles();
  // Charts and report Data
  const [audienciasTotalsData, setAudienciasTotalsData] = useState('');
  const [newUsersChartData, setNewUsersChartData] = useState([]);
  const [totalUsersChartData, setTotalUsersChartData] = useState([]);
  const [roomsRankingData, setRoomsRankingData] = useState(
    defaultApisData.audienciasRankingData,
  );
  const [participantionChartData, setParticipantionChartData] = useState([]);
  const [totalRoomsDefaultChartData, setTotalRoomsDefaultChartData] = useState(
    [],
  );
  const [totalRoomsChartData, setTotalRoomsChartData] = useState([]);
  // Error Status
  const [showCachedDataAlert, setShowCachedDataAlert] = useState(false);
  // Load Status
  const [totalsAreLoaded, setTotalsAreLoaded] = useState(false);
  const [newUsersChartDataLoaded, setNewUsersChartDataLoaded] = useState(false);
  const [totalUsersChartDataLoaded, setTotalUsersChartDataLoaded] = useState(false);
  const [totalRoomsChartDataLoaded, setTotalRoomsChartDataLoaded] = useState(false);

  // Period Selected states
  const [selectedPeriod, setSelectedPeriod] = useState(
    defaultSelectedPeriodType,
  );
  const [selectedYear, setSelectedYear] = useState(defaultYearPeriod);
  const [selectedMonth, setSelectedMonth] = useState(defaultMonthPeriod);
  // Api's default data
  const [apisDataObject, setApisDataObject] = useState({
    audiencesParticipantAPIData:
      defaultApisData.audienceParticipantUsersAPIData,
    audiencesRoomsAPIData: defaultApisData.audiencesRoomsAPIData,
    audiencesMessagesAPIData: defaultApisData.audienceMessagesAPIData,
    audiencesQuestionsAPIData: defaultApisData.audienceQuestionsAPIData,
    audiencesNewUsersAPIData: defaultApisData.audienceNewUsersAPIData,
    audiencesVotesAPIData: defaultApisData.audienceVotesAPIData,
  });

  // Information states
  const [periodSubTitle, setPeriodSubTitle] = useState(
    `${audienceInitialYear} a ${currentYear}`,
  );
  const apiLastConsolidateOfDataDate = showCachedDataAlert
    ? format(subDays(new Date(apiLastCacheMadeHour), 1), ' dd/LL/yyyy', {
      locale: ptBR,
    }) // Show the data of last cache
    : format(subDays(new Date(), 1), ' dd/LL/yyyy', { locale: ptBR });

  const totalAcumuladoUsuariosCadastradosString = TEXTCONSTANTS.usersSectionTexts.subSectionAccumulatedRegisteredUsers.title;

  function checkIfCachedDataIsUpdated() {
    const currentDateAndHour = new Date();
    const cachedHour = new Date(apiLastCacheMadeHour);
    let diff = (currentDateAndHour.getTime() - cachedHour.getTime()) / 1000;
    diff /= 60;
    const diffRound = Math.abs(Math.round(diff)); // Return the difference in minutes

    if (
      diffRound > APPLICATION_OPTIONS.SHOW_API_CACHE_ERROR_MESSAGE_LIMIT_TIME
    ) {
      setShowCachedDataAlert(true);
    }
  }

  async function fetchDataFromApi(apiUrl, query) {
    try {
      const axiosResponse = await apiInstance.get(`${apiUrl}${query}`);
      return axiosResponse.data;
    } catch (e) {
      throw new Error(`Erro ao obter dados da api ${apiUrl}`);
    }
  }

  async function fetchAndUpdateApisData(query, queryParticipants) {
    try {
      const participants = await fetchDataFromApi(
        process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL,
        queryParticipants,
      );
      const rooms = await fetchDataFromApi(
        process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL,
        query,
      );
      const messages = await fetchDataFromApi(
        process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL,
        query,
      );
      const questions = await fetchDataFromApi(
        process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL,
        query,
      );
      const newUsers = await fetchDataFromApi(
        process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL,
        query,
      );
      const votes = await fetchDataFromApi(
        process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL,
        query,
      );
      setApisDataObject({
        audiencesParticipantAPIData: participants,
        audiencesRoomsAPIData: rooms,
        audiencesMessagesAPIData: messages,
        audiencesQuestionsAPIData: questions,
        audiencesNewUsersAPIData: newUsers,
        audiencesVotesAPIData: votes,
      });
    } catch (e) {
      // If an error occurred, throw error and set default cachedData to whole page;
      throw new Error('Erro ao obter dados das APIS');
    }
  }

  function computeTotalOfUsersByPeriod(values, period) {
    const computedArray = [];
    let collumPeriodTitle = [];

    try {
      if (values !== null) {
        switch (period) {
          case dailyKeyWord:
            computedArray.push([
              values[0].start_date.match(/\d+/g)[2],
              values[0].new_users,
            ]);
            for (let i = 1; i < values.length; i += 1) {
              computedArray.push([
                values[i].start_date.match(/\d+/g)[2],
                values[i].new_users + computedArray[i - 1][1],
              ]);
            }
            collumPeriodTitle = [
              ['Dia', totalAcumuladoUsuariosCadastradosString],
            ];
            break;
          case monthlyKeyWord:
            computedArray.push([
              monthNamesList[new Date(values[0].end_date).getMonth()],
              values[0].new_users,
            ]);
            for (let i = 1; i < values.length; i += 1) {
              computedArray.push([
                monthNamesList[new Date(values[i].end_date).getMonth()],
                values[i].new_users + computedArray[i - 1][1],
              ]);
            }
            collumPeriodTitle = [
              ['Mês', totalAcumuladoUsuariosCadastradosString],
            ];
            break;
          default:
            computedArray.push([
              new Date(values[0].end_date).getFullYear().toString(),
              values[0].new_users,
            ]);
            for (let i = 1; i < values.length; i += 1) {
              computedArray.push([
                new Date(values[i].end_date).getFullYear().toString(),
                values[i].new_users + computedArray[i - 1][1],
              ]);
            }
            collumPeriodTitle = [
              ['Ano', totalAcumuladoUsuariosCadastradosString],
            ];
            break;
        }
      } else {
        collumPeriodTitle = [];
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
    setTotalUsersChartData(collumPeriodTitle.concat(computedArray));
    setTotalUsersChartDataLoaded(true);
  }

  async function filterAndSetRoomsRankingData(period, month, year) {
    let resultArray = [];
    const allRooms = defaultApisData.audienciasRankingData;
    try {
      switch (period) {
        case dailyKeyWord:
          resultArray = await allRooms.filter((value) => {
            const [valueYear, valueMonth] = value.date.split('-'); // Or, var month = e.date.split('-')[1];
            return (
              parseInt(month, 10) === parseInt(valueMonth, 10) && parseInt(year, 10) === parseInt(valueYear, 10)
            );
          });
          break;
        case monthlyKeyWord:
          resultArray = await allRooms.filter((value) => {
            const [valueYear] = value.date.split('-'); // Or, var month = e.date.split('-')[1];
            return parseInt(year, 10) === parseInt(valueYear, 10);
          });
          break;
        default:
          // yearly -> Total period
          resultArray = allRooms;
          break;
      }
    } catch (e) {
      resultArray = allRooms;
    }

    await setRoomsRankingData(resultArray);
  }

  async function updateChartsAndTableSubTitle(period, month, year) {
    try {
      switch (period) {
        case dailyKeyWord:
          setPeriodSubTitle(
            `${APPLICATION_CONSTANTS.MONTHS_LIST[month - 1]}/${year}`,
          );
          break;
        case monthlyKeyWord:
          setPeriodSubTitle(`${year}`);
          break;
        default:
          // yearly -> Total period
          setPeriodSubTitle(`${audienceInitialYear} a ${currentYear}`);
          break;
      }
    } catch (e) {
      setPeriodSubTitle('-');
    }
  }

  async function updateNewUsersChartData(period) {
    const values = apisDataObject.audiencesNewUsersAPIData.results;
    let arrayData = [];
    let collumPeriodTitle = [];

    try {
      switch (period) {
        case dailyKeyWord:
          arrayData = values.map((value) => [
            value.start_date.match(/\d+/g)[2],
            value.new_users,
          ]);
          collumPeriodTitle = ['Dia', 'Novos Usuários'];
          break;
        case monthlyKeyWord:
          arrayData = values.map((value) => [
            monthNamesList[new Date(value.end_date).getMonth()],
            value.new_users,
          ]);
          collumPeriodTitle = ['Mês', 'Novos Usuários'];
          break;
        default:
          arrayData = values.map((value) => [
            new Date(value.end_date).getFullYear().toString(),
            value.new_users,
          ]);
          collumPeriodTitle = ['Ano', 'Novos Usuários'];
          break;
      }
    } catch (e) {
      arrayData = [];
    }

    if (arrayData.length > 0) {
      setNewUsersChartData([collumPeriodTitle].concat(arrayData));
    } else {
      setNewUsersChartData(arrayData); // TALVEZ TROCAR POR FALSE
    }

    setNewUsersChartDataLoaded(true);

    if (Array.isArray(values) && values.length) {
      computeTotalOfUsersByPeriod(values, period);
    } else {
      computeTotalOfUsersByPeriod(null, period);
    }
  }

  async function updateTotalsData() {
    try {
      const dataJson = {
        users_total: formatNumberWithDots(
          apisDataObject.audiencesParticipantAPIData.sum_total_results,
        ),
        audiencias_total: formatNumberWithDots(
          apisDataObject.audiencesRoomsAPIData.sum_total_results,
        ),
        audiencias_total_finished: formatNumberWithDots(
          apisDataObject.audiencesRoomsAPIData.sum_finished,
        ),
        messages_total: formatNumberWithDots(
          apisDataObject.audiencesMessagesAPIData.sum_total_results,
        ),
        questions_total: formatNumberWithDots(
          apisDataObject.audiencesQuestionsAPIData.sum_total_results,
        ),
      };

      await setAudienciasTotalsData(dataJson);
      await setTotalsAreLoaded(true);
    } catch (e) {
      const dataJson = {
        users_total: '-',
        audiencias_total: '-',
        audiencias_total_finished: '-',
        messages_total: '-',
        questions_total: '-',
      };

      await setAudienciasTotalsData(dataJson);
      await setTotalsAreLoaded(true);
    }
  }

  async function updateParticipationChartData(period, month, year) {
    try {
      const messagesData = apisDataObject.audiencesMessagesAPIData.results;
      const questionsData = apisDataObject.audiencesQuestionsAPIData.results;
      const questionsVoteData = apisDataObject.audiencesVotesAPIData.results;

      let arrayData = [];
      const collumPeriodTitle = [
        'Data',
        'Mensagens do chat',
        'Perguntas',
        'Votos nas Perguntas',
      ];

      switch (period) {
        case dailyKeyWord:
          arrayData = await getParticipationChartDataByDay(
            month,
            year,
            messagesData,
            questionsData,
            questionsVoteData,
          );
          break;
        case monthlyKeyWord:
          arrayData = await getParticipationChartDataByMonth(
            month,
            year,
            messagesData,
            questionsData,
            questionsVoteData,
          );
          break;
        default:
          // yearly -> Total period
          arrayData = await getParticipationChartDataByYear(
            messagesData,
            questionsData,
            questionsVoteData,
            audienceInitialYear,
          );
          break;
      }

      if (arrayData.length > 0) {
        setParticipantionChartData([collumPeriodTitle].concat(arrayData));
      } else {
        setParticipantionChartData(arrayData);
      }
    } catch (e) {
      setParticipantionChartData([]);
    }
  }

  async function updateTotalRoomsChartData(period, month, year) {
    try {
      const roomsData = apisDataObject.audiencesRoomsAPIData.results;

      let arrayData = [];
      const collumPeriodTitle = ['Data', 'Canceladas', 'Realizadas', 'Total'];

      switch (period) {
        case dailyKeyWord:
          arrayData = await getRoomTotalsChartDataByDay(month, year, roomsData);
          break;
        case monthlyKeyWord:
          arrayData = await getRoomTotalsChartDataByMonth(year, roomsData);
          break;
        default:
          // yearly -> Total period
          arrayData = await getRoomTotalsChartDataByYear(roomsData);
          break;
      }

      if (arrayData.length > 0) {
        setTotalRoomsDefaultChartData([collumPeriodTitle].concat(arrayData));
        setTotalRoomsChartData([collumPeriodTitle].concat(arrayData));
      } else {
        setTotalRoomsChartData(arrayData);
        setTotalRoomsDefaultChartData(arrayData);
      }
    } catch (e) {
      console.log(e);
      setTotalRoomsChartData([]);
    }
  }

  async function updateAllPageInformations(period, month, year) {
    try {
      await updateTotalsData();
      await filterAndSetRoomsRankingData(period, month, year);
      await updateParticipationChartData(period, month, year);
      await updateTotalRoomsChartData(period, month, year);
      await updateNewUsersChartData(period);
    } catch (e) {
      console.log('Update all page informations');
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
      audiencesParticipantAPIData:
        defaultApisData.audienceParticipantUsersAPIData,
      audiencesRoomsAPIData: defaultApisData.audiencesRoomsAPIData,
      audiencesMessagesAPIData: defaultApisData.audienceMessagesAPIData,
      audiencesQuestionsAPIData: defaultApisData.audienceQuestionsAPIData,
      audiencesNewUsersAPIData: defaultApisData.audienceNewUsersAPIData,
      audiencesVotesAPIData: defaultApisData.audienceVotesAPIData,
    });
  }

  async function newLoadData(query, queryParticipants, period, month, year) {
    try {
      await resetPageComponentsLoadedStatusToFalse();
      await updateChartsAndTableSubTitle(period, month, year);
      await fetchAndUpdateApisData(query, queryParticipants);
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
      const { query, period } = await handleUpdatePeriodSearchQuery(
        month,
        year,
      );
      const { queryParticipants } = await handleUpdatePeriodSearchQueryParticipants(
        month,
        year,
      );

      await updateSelectedPeriodInterval(period, month, year);
      await newLoadData(query, queryParticipants, period, month, year);
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

  return (
    <div className={classes.root}>
      <Header
        title={TEXTCONSTANTS.pageToolTitle}
        handlePeriodChange={handlePeriodChange}
        year={defaultYearPeriod}
        monthPeriod={defaultMonthPeriod}
        headerColors={headerColors}
        initialYear={audienceInitialYear}
      />
      <Grid container spacing={1} className={classes.spacingContainer}>
        {showCachedDataAlert && (
          <AlertCachedData apiLastCacheMade={apiLastCacheMade} />
        )}

        <AlertDataConsolidateInterval />

        <Grid item xs={12}>
          <SectionHeader
            classes={classes}
            toolTipText={TEXTCONSTANTS.audiencesTotalsTexts.toolTip}
            title={TEXTCONSTANTS.audiencesTotalsTexts.title}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing} style={{ padding: 0 }}>
          <TotalFrame
            className={classes.totalFrame}
            isLoaded={totalsAreLoaded}
            info={`${audienciasTotalsData.users_total}`}
            title={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionParticipantsTotals
                .title
            }
            toolTipText={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionParticipantsTotals
                .toolTip
            }
            toolTipAriaLabel={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionParticipantsTotals
                .toolTipAriaLabel
            }
            toolTipColor={customTheme.palette.audiencias.seabuckthorn}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing} style={{ padding: 0 }}>
          <TotalFrame
            className={classes.totalFrame}
            isLoaded={totalsAreLoaded}
            info={`${audienciasTotalsData.audiencias_total}`}
            title={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionAudiencesTotals.title
            }
            toolTipText={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionAudiencesTotals
                .toolTip
            }
            toolTipAriaLabel={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionAudiencesTotals
                .toolTipAriaLabel
            }
            toolTipColor={customTheme.palette.audiencias.seabuckthorn}
            subInformation={`${audienciasTotalsData.audiencias_total_finished} realizadas`}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing} style={{ padding: 0 }}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${audienciasTotalsData.messages_total}`}
            title={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionMessagesTotals.title
            }
            toolTipText={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionMessagesTotals
                .toolTip
            }
            toolTipAriaLabel={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionMessagesTotals
                .toolTipAriaLabel
            }
            toolTipColor={customTheme.palette.audiencias.seabuckthorn}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing} style={{ padding: 0 }}>
          <TotalFrame
            className={classes.totalFrameDesktop}
            isLoaded={totalsAreLoaded}
            info={audienciasTotalsData.questions_total}
            title={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionQuestionsTotals.title
            }
            toolTipText={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionQuestionsTotals
                .toolTip
            }
            toolTipAriaLabel={
              TEXTCONSTANTS.audiencesTotalsTexts.subSectionQuestionsTotals
                .toolTipAriaLabel
            }
          />
        </Grid>

        <Grid item xs={12} className={classes.spacing} style={{ padding: 0 }}>
          <SectionHeader
            classes={classes}
            title={TEXTCONSTANTS.totalRoomsSectionTexts.title}
            toolTipText={
              TEXTCONSTANTS.distributionOfParticipationSectionTexts.toolTip
            }
            toolTipAriaLabel={
              TEXTCONSTANTS.distributionOfParticipationSectionTexts
                .toolTipAriaLabel
            }
          />
          {totalRoomsChartData !== undefined
            && totalRoomsChartData.length > 0 ? (
              <ChartTotalRoomsWithFilter
                height="60vh"
                download
                exportData={totalRoomsChartData}
                title={periodSubTitle}
                classes={classes}
                data={totalRoomsChartData}
                chartType={audiencesRoomsTotalsChart.chartType}
                chartOptions={audiencesRoomsTotalsChart.options}
                apiLastUpdate={apiLastConsolidateOfDataDate}
                tool={TOOLNAME}
                isLoaded
                apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
              />
            ) : (
              <NoDataForSelectedPeriod
                title={periodSubTitle}
                tool={TOOLNAME}
                apiLastUpdate={apiLastConsolidateOfDataDate}
                toolColor={headerColors.borderColor}
                apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
              />
            )}
        </Grid>

        <Grid item xs={12} className={classes.spacing} style={{ padding: 0 }}>
          <SectionHeader
            classes={classes}
            title={TEXTCONSTANTS.distributionOfParticipationSectionTexts.title}
            toolTipText={
              TEXTCONSTANTS.distributionOfParticipationSectionTexts.toolTip
            }
            toolTipAriaLabel={
              TEXTCONSTANTS.distributionOfParticipationSectionTexts
                .toolTipAriaLabel
            }
          />
          {participantionChartData !== undefined
            && participantionChartData.length > 0 ? (
              <ChartAndReport
                height="60vh"
                download
                exportData={participantionChartData}
                title={periodSubTitle}
                classes={classes}
                data={participantionChartData}
                chartType={audiencesWithMoreParticipation.chartType}
                chartOptions={audiencesWithMoreParticipation.options}
                apiLastUpdate={apiLastConsolidateOfDataDate}
                tool={TOOLNAME}
                isLoaded
                apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
              />
            ) : (
              <NoDataForSelectedPeriod
                title={periodSubTitle}
                tool={TOOLNAME}
                apiLastUpdate={apiLastConsolidateOfDataDate}
                toolColor={headerColors.borderColor}
                apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
              />
            )}
        </Grid>

        <Grid item xs={12} className={classes.spacing} style={{ padding: 0 }}>
          <SectionHeader
            classes={classes}
            toolTipColor={customTheme.palette.audiencias.seabuckthorn}
            title={TEXTCONSTANTS.rankingSectionTexts.title}
            toolTipText={TEXTCONSTANTS.rankingSectionTexts.toolTip}
            toolTipAriaLabel={
              TEXTCONSTANTS.rankingSectionTexts.toolTipAriaLabel
            }
          />
          {roomsRankingData !== undefined && roomsRankingData.length > 0 ? (
            <ChartDataFrame
              height="30vh"
              title={periodSubTitle}
              listView
              align="center"
              apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
              apiLastUpdate={apiLastConsolidateOfDataDate}
              tool={TOOLNAME}
              exportData={roomsRankingData}
              download
              downloadHeaders={rankingAudienciasHeaders}
              section="Report"
            >
              <Box width="100%" height="90%">
                <RankingTable
                  data={roomsRankingData}
                  columns={rankingAudienciaColumns}
                  filterRanking={filterRankingAudiencias}
                  period={selectedPeriod}
                  month={selectedMonth}
                  year={selectedYear}
                  tool="audiences"
                />
              </Box>
            </ChartDataFrame>
          ) : (
            <NoDataForSelectedPeriod
              title={periodSubTitle}
              tool={TOOLNAME}
              apiLastUpdate={apiLastConsolidateOfDataDate}
              toolColor={headerColors.borderColor}
              apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
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

        <Grid item xs={12} className={classes.spacing} style={{ padding: 0 }}>
          <SubSectionHeader
            style={{ marginTop: '0px' }}
            title={TEXTCONSTANTS.usersSectionTexts.subSectionNewUsers.title}
          />
          {newUsersChartData !== undefined && newUsersChartData.length > 0 ? (
            <div className={classes.contentBox}>
              <ChartAndReport
                isLoaded={newUsersChartDataLoaded}
                title={periodSubTitle}
                classes={classes}
                data={newUsersChartData}
                chartType={audiencesChartsUsersSettings.chartType}
                chartOptions={audiencesChartsUsersSettings.options}
                exportData={newUsersChartData}
                download
                apiLastUpdate={apiLastConsolidateOfDataDate}
                tool={TOOLNAME}
                apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
                observation={TEXTCONSTANTS.usersSectionTexts.subSectionNewUsers.observation}
                observationAnchor={TEXTCONSTANTS.usersSectionTexts.subSectionNewUsers.observationAnchor}
                observationAnchorString={TEXTCONSTANTS.usersSectionTexts.subSectionNewUsers.observationAnchorString}
                observationCondition={(selectedYear === '0')
                  || (selectedYear === '2017' && selectedMonth === '0')
                  || (selectedYear === '2017' && selectedMonth === '9')
                  || (selectedYear === '2017' && selectedMonth === '11')}
              />
            </div>
          ) : (
            <NoDataForSelectedPeriod
              title={periodSubTitle}
              tool={TOOLNAME}
              apiLastUpdate={apiLastConsolidateOfDataDate}
              toolColor={headerColors.borderColor}
              apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
            />
          )}
        </Grid>

        <Grid item xs={12} className={classes.spacing} style={{ padding: 0 }}>
          <SubSectionHeader
            title={
              TEXTCONSTANTS.usersSectionTexts
                .subSectionAccumulatedRegisteredUsers.title
            }
          />
          {totalUsersChartData !== undefined
            && totalUsersChartData.length > 0 ? (
              <div className={classes.contentBox}>
                <ChartAndReport
                  download={false}
                  exportData={totalUsersChartData}
                  isLoaded={totalUsersChartDataLoaded}
                  title={periodSubTitle}
                  classes={classes}
                  data={totalUsersChartData}
                  chartType={audiencesChartsUsersSettings.chartType}
                  chartOptions={audiencesChartsUsersSettings.options}
                  apiLastUpdate={apiLastConsolidateOfDataDate}
                  tool={TOOLNAME}
                  apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
                />
              </div>
            ) : (
              <NoDataForSelectedPeriod
                title={periodSubTitle}
                tool={TOOLNAME}
                apiLastUpdate={apiLastConsolidateOfDataDate}
                toolColor={headerColors.borderColor}
                apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
              />
            )}
        </Grid>
      </Grid>
    </div>
  );
}

Audiencias.propTypes = {
  defaultApisData: PropTypes.object,
  apiLastCacheMade: PropTypes.string,
  apiLastCacheMadeHour: PropTypes.string,
};

Audiencias.defaultProps = {
  defaultApisData: {},
  apiLastCacheMade: 'Carregando ...',
  apiLastCacheMadeHour: '',
};

export default Audiencias;
