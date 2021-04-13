import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import axios from 'axios';
import ChartDataFrame from '../../components/ChartDataFrame/index';
import Header from '../../components/Header/index';
import RankingTable from '../../components/RankingTable/index';
import GoogleChart from '../../components/Charts/GoogleChart';
import {
  getParticipationChartDataByDay, getParticipationChartDataByMonth, getParticipationChartDataByYear,
} from '../../services/functions/auxFunctions/index';

import { handleUpdatePeriodSearchQuery } from '../../services/functions/handlers/index';

import TotalFrame from '../../components/Frames/TotalFrame/index';
import Sectionheader from '../../components/Headers/SectionHeader/index';
import SubSectionHeader from '../../components/Headers/SubSectionHeader/index';
import NoDataForSelectedPeriod from '../../components/Informations/NoDataForSelectedPeriod/index';
import GoogleChartFrame from './auxComponentes';

import {
  participantsTotalToolTip, messagesTotalToolTip, audiencesTotalToolTip, audiencesRankingToolTip,
} from '../../services/texts/tooltips';

import {
  MONTHS_LIST, MONTHS_ABBREVIATED_LIST, DEFAULT_YEAR, DEFAULT_SELECTED_PERIOD_TYPE,
  DEFAULT_MONTH_PERIOD, DEFAULT_SEARCH_QUERY, DAILY_KEY_WORD, MONTHLY_KEY_WORD,
  AUDIENCIAS_INITIAL_YEAR,
} from '../../services/constants/constants';

import { rankingAudienciaColumns } from './settings';

import customTheme from '../../../styles/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  divider: {
    borderColor: theme.palette.audiencias.divider,
  },
  appBarSpacer: theme.mixins.toolbar,
  toolTipIcon: {
    color: '#DA7F0B',
  },

}));

const defaultYear = DEFAULT_YEAR;
const defaultSelectedPeriodType = DEFAULT_SELECTED_PERIOD_TYPE; // Get all months of the year
const defaultMonthPeriod = DEFAULT_MONTH_PERIOD; // All months
const defaultSearchQuery = DEFAULT_SEARCH_QUERY;
const dailyKeyWord = DAILY_KEY_WORD;
const monthlyKeyWord = MONTHLY_KEY_WORD;
const monthNamesList = MONTHS_ABBREVIATED_LIST;

function Audiencias(props) {
  const { responseDataRanking } = props;
  const headerColors = {
    borderColor: '#DA7F0B',
    button: {
      main: '#DA7F0B',
      hover: '#C47209',
    },
    toolTipBackground: '14D768',
  };

  const classes = useStyles();
  const [audienciasTotalsData, setAudienciasTotalsData] = useState('');
  const [newUsersChartData, setNewUsersChartData] = useState([]);
  const [totalUsersChartData, setTotalUsersChartData] = useState([]);
  const [roomsRankingData, setRoomsRankingData] = useState(responseDataRanking.data);
  const [participantionChartData, setParticipantionChartData] = useState([]);
  const [totalsAreLoaded, setTotalsAreLoaded] = useState(false);
  const [newUsersChartDataLoaded, setNewUsersChartDataLoaded] = useState(false);
  const [totalUsersChartDataLoaded, setTotalUsersChartDataLoaded] = useState(false);
  const [periodSubTitle, setPeriodSubTitle] = useState(new Date().getFullYear().toString());
  const [participantionChartDataLastUpdate, setParticipantionChartDataLastUpdate] = useState('Carregando');
  const roomsRankingDataLastUpdate = responseDataRanking.lastUpdate;
  const [totalUsersChartDataLastUpdate, setTotalUsersChartDataLastUpdate] = useState('Carregando');
  const [newUsersChartDataLastUpdate, setNewUsersChartDataLastUpdate] = useState('Carregando');

  const audiencesChartsUsersSettings = {
    chartType: 'LineChart',
    options: {
      legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
      colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
      lineWidth: 5,
      pointSize: 15,
      hAxis: {
        textStyle: { color: '#FFFFFF' },
        gridlines: { color: 'transparent' },
        titleTextStyle: { color: 'white' },
      },
      vAxis: { gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' }, format: '##.##' },
      series: {
        1: { curveType: 'function' },
      },
      backgroundColor: '#000000',
    },
  };

  const audiencesWithMoreParticipation = {
    chartType: 'ColumnChart',
    options: {
      bars: 'vertical',
      legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
      isStacked: 'true',
      colors: ['#744600', '#EBE23B', '#DA7F0B'],
      bar: { groupWidth: '80%' },
      hAxis: { textStyle: { color: 'white' }, titleTextStyle: { color: 'white' } },
      vAxis: {
        minValue: 0,
        gridlines: { color: 'transparent' },
        textStyle: { color: '#FFFFFF' },
        format: '###.##',
      },
      backgroundColor: '#000000',
    },
  };

  function computeTotalOfUsersByPeriod(values, period) {
    const computedArray = [];
    let collumPeriodTitle = [];

    switch (period) {
      case dailyKeyWord:
        computedArray.push([values[0].start_date.match(/\d+/g)[2], values[0].new_users]);
        for (let i = 1; i < values.length; i += 1) {
          computedArray.push(
            [values[i].start_date.match(/\d+/g)[2],
              values[i].new_users + computedArray[i - 1][1]],
          );
        }
        collumPeriodTitle = [['Dia', 'Total de Usuários Cadastrados']];
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
        collumPeriodTitle = [['Mês', 'Total de Usuários Cadastrados']];
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
        collumPeriodTitle = [['Ano', 'Total de Usuários Cadastrados']];
        break;
    }

    setTotalUsersChartDataLastUpdate(values[0].modified);
    setTotalUsersChartData(collumPeriodTitle.concat(computedArray));
    setTotalUsersChartDataLoaded(true);
  }

  async function fetchAndSetAudienciasTotalsData(query) {
    const participantsUsersTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${query}`);
    const audienciesTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${query}`);
    const messagesTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${query}`);
    const questionsTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${query}`);

    function numberWithDots(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
    }
    const dataJson = {
      users_total: numberWithDots(participantsUsersTotalResponse.data.sum_total_results),
      audiencias_total: numberWithDots(audienciesTotalResponse.data.sum_total_results),
      messages_total: numberWithDots(messagesTotalResponse.data.sum_total_results),
      questions_total: numberWithDots(questionsTotalResponse.data.sum_total_results),
    };

    await setAudienciasTotalsData(dataJson);
    await setTotalsAreLoaded(true);
  }

  async function fetchAndSetNewUsersChartData(query, period) {
    const url = `${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${query}`;
    const newUsersTotalResponse = await axios.get(url);
    const values = newUsersTotalResponse.data.results;
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
    }
  }

  function getApiLastUpdateDateAndHour(messagesData, questionsData, questionsVoteData) {
    let lastUpdate = '';

    if (messagesData.length > 0) {
      lastUpdate = messagesData[0].modified;
    } else if (questionsData.length > 0) {
      lastUpdate = questionsData[0].modified;
    } else if (questionsVoteData.length > 0) {
      lastUpdate = questionsVoteData[0].modified;
    } else {
      lastUpdate = '-';
    }

    return lastUpdate;
  }

  async function fetchAndSetParticipationChartData(query, period, month, year) {
    const messagesResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${query}`);
    const questionsResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${query}`);
    const questionsVotesResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${query}`);

    const messagesData = messagesResponse.data.results;
    const questionsData = questionsResponse.data.results;
    const questionsVoteData = questionsVotesResponse.data.results;

    let arrayData = [];
    const collumPeriodTitle = ['Data', 'Mensagens do chat', 'Perguntas', 'Votos nas Perguntas'];

    switch (period) {
      case dailyKeyWord:
        arrayData = await getParticipationChartDataByDay(
          month, year, messagesData, questionsData, questionsVoteData,
        );
        break;
      case monthlyKeyWord:
        arrayData = await getParticipationChartDataByMonth(
          month, year, messagesData, questionsData, questionsVoteData,
        );
        break;
      default: // yearly -> Total period
        arrayData = await getParticipationChartDataByYear(
          messagesData, questionsData, questionsVoteData, AUDIENCIAS_INITIAL_YEAR,
        );
        break;
    }

    if (arrayData.length > 0) {
      setParticipantionChartData([collumPeriodTitle].concat(arrayData));
      setParticipantionChartDataLastUpdate(
        getApiLastUpdateDateAndHour(messagesData, questionsData, questionsVoteData),
      );
    } else {
      setParticipantionChartData(arrayData);
    }
  }

  async function filterAndSetRoomsRankingData(period, month, year) {
    // to be implemented
    let resultArray = [];
    const allRooms = props.responseDataRanking.data;

    switch (period) {
      case dailyKeyWord:
        resultArray = await allRooms.filter((value) => {
          const [valueYear, valueMonth] = value.date.split('-'); // Or, var month = e.date.split('-')[1];
          return (
            (parseInt(month, 10) === parseInt(valueMonth, 10))
            && (parseInt(year, 10) === parseInt(valueYear, 10))
          );
        });
        break;
      case monthlyKeyWord:
        resultArray = await allRooms.filter((value) => {
          const [valueYear] = value.date.split('-'); // Or, var month = e.date.split('-')[1];
          return (parseInt(year, 10) === parseInt(valueYear, 10));
        });
        break;
      default: // yearly -> Total period
        resultArray = allRooms;
        break;
    }

    await setRoomsRankingData(resultArray);
  }

  async function updateChartsAndTableSubTitle(period, month, year) {
    const todayDate = new Date();

    switch (period) {
      case dailyKeyWord:
        setPeriodSubTitle(`${MONTHS_LIST[month - 1]}/${year}`);
        break;
      case monthlyKeyWord:
        setPeriodSubTitle(`${year}`);
        break;
      default: // yearly -> Total period
        setPeriodSubTitle(
          `2016 a ${(todayDate.getFullYear())}`,
        );
        break;
    }
  }

  async function loadData(query, period, month, year) {
    updateChartsAndTableSubTitle(period, month, year);
    fetchAndSetAudienciasTotalsData(query);
    fetchAndSetNewUsersChartData(query, period);
    fetchAndSetParticipationChartData(query, period, month, year);
    filterAndSetRoomsRankingData(period, month, year);
  }

  async function handlePeriodChange(month, year) {
    const { query, period } = await handleUpdatePeriodSearchQuery(month, year);
    await loadData(query, period, month, year); // Reload page data
  }

  useEffect(() => {
    // Load Initial page year with current year informations
    loadData(defaultSearchQuery, defaultSelectedPeriodType, 0, defaultYear);
  }, []);

  return (
    <>
      <Header
        title="Audiências Interativas"
        handlePeriodChange={handlePeriodChange}
        year={defaultYear}
        monthPeriod={defaultMonthPeriod}
        headerColors={headerColors}
        initialYear={AUDIENCIAS_INITIAL_YEAR}
      />
      <Grid container spacing={1} className={classes.spacingContainer}>
        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${audienciasTotalsData.users_total}`}
            title="Participantes"
            toolTipAriaLabel="Informação sobre o termo participantes"
            toolTipText={participantsTotalToolTip}
            toolTipColor={customTheme.palette.audiencias.seabuckthorn}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${audienciasTotalsData.audiencias_total}`}
            title="Audiências"
            toolTipText={audiencesTotalToolTip}
            toolTipAriaLabel="Informação sobre o termo audiências"
            toolTipColor={customTheme.palette.audiencias.seabuckthorn}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame
            isLoaded={totalsAreLoaded}
            info={`${audienciasTotalsData.messages_total}`}
            title="Mensagens"
            toolTipText={messagesTotalToolTip}
            toolTipAriaLabel="Informação sobre o termo mensagens"
            toolTipColor={customTheme.palette.audiencias.seabuckthorn}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={audienciasTotalsData.questions_total} title="Perguntas" />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <Sectionheader classes={classes} toolTipText={null} title="Distribuição da participação no período" />
          <ChartDataFrame
            height="60vh"
            title={periodSubTitle}
            listView
            exportData={participantionChartData}
            download
            align="center"
            apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
            apiLastUpdate={participantionChartDataLastUpdate}
          >
            <GoogleChart
              chartType={audiencesWithMoreParticipation.chartType}
              data={participantionChartData}
              options={audiencesWithMoreParticipation.options}
            />
          </ChartDataFrame>
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <Sectionheader classes={classes} toolTipAriaLabel="Seção Ranking das Audiências" title="Ranking das audiências" toolTipText={audiencesRankingToolTip} toolTipColor={customTheme.palette.audiencias.seabuckthorn} />
          {(roomsRankingData !== undefined && roomsRankingData.length > 0) ? (
            <ChartDataFrame
              height="30vh"
              title={periodSubTitle}
              listView
              exportData={roomsRankingData}
              download
              align="center"
              apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
              apiLastUpdate={roomsRankingDataLastUpdate}
            >
              <Box width="100%" height="90%">
                <RankingTable data={roomsRankingData} columns={rankingAudienciaColumns} />
              </Box>
            </ChartDataFrame>
          ) : (
            <NoDataForSelectedPeriod title="Salas" />
          )}
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <Sectionheader classes={classes} toolTipText={null} title="Usuários" />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SubSectionHeader title="Novos cadastros de usuários" />
          {(newUsersChartData !== undefined && newUsersChartData.length > 0) ? (
            <div className={classes.contentBox}>
              <GoogleChartFrame
                isLoaded={newUsersChartDataLoaded}
                title={periodSubTitle}
                classes={classes}
                data={newUsersChartData}
                chartType={audiencesChartsUsersSettings.chartType}
                chartOptions={audiencesChartsUsersSettings.options}
                exportData={newUsersChartData}
                download
                apiLastUpdate={newUsersChartDataLastUpdate}
              />
            </div>
          ) : (
            <NoDataForSelectedPeriod title="Novos Usuários" />
          )}
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <SubSectionHeader title="Total de Usuários Cadastrados" />
          {(totalUsersChartData !== undefined && totalUsersChartData.length > 0) ? (
            <div className={classes.contentBox}>
              <GoogleChartFrame
                download={false}
                exportData={totalUsersChartData}
                isLoaded={totalUsersChartDataLoaded}
                title={periodSubTitle}
                classes={classes}
                data={totalUsersChartData}
                chartType={audiencesChartsUsersSettings.chartType}
                chartOptions={audiencesChartsUsersSettings.options}
                apiLastUpdate={totalUsersChartDataLastUpdate}
              />
            </div>
          ) : (
            <NoDataForSelectedPeriod title={periodSubTitle} />
          )}
        </Grid>
      </Grid>
    </>
  );
}

Audiencias.propTypes = {
  responseDataRanking: PropTypes.object,
};

Audiencias.defaultProps = {
  responseDataRanking: [],
};

export default Audiencias;
