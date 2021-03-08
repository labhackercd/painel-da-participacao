/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import axios from 'axios';
import ChartDataFrame from '../../components/ChartDataFrame/index';
import Header from '../../components/Header/index';
import RankingTable from '../../components/RankingTable/index';
import GoogleChart from '../../components/Charts/GoogleChart';
// import fetchDataFromAPI from '../DataFetcher';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  appBarSpacer: theme.mixins.toolbar,
}));

function TotalFrame(props) {
  const { isLoaded, info, title } = props;

  return (
    <ChartDataFrame height="15vh" paddingLeft="0.5rem" listView={false} download={false} title={title}>
      {isLoaded ? (
        <Typography variant="h2" style={{ color: '#FFF', alignSelf: 'center' }}>
          {info}
        </Typography>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
          <CircularProgress color="secondary" />
        </Box>
      )}
    </ChartDataFrame>
  );
}

function GoogleChartFrame(props) {
  const {
    isLoaded, title, classes, data, chartType, chartOptions,
  } = props;

  return (
    <ChartDataFrame height="35vh" title={title} listView export_data={null} download>
      {isLoaded ? (
        <div className={classes.contentBox}>
          <GoogleChart
            chartType={chartType}
            data={data}
            options={chartOptions}
          />
        </div>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
          <CircularProgress color="secondary" />
        </Box>
      )}
    </ChartDataFrame>
  );
}

function Audiencias(props) {
  const classes = useStyles();
  const [audienciasTotalsData, setAudienciasTotalsData] = useState('');
  const [newUsersChartData, setNewUsersChartData] = useState([]);
  // const [usersChartData, setUsersChartData] = useState([]);
  // const [roomsRankingData, setRoomsRankingData] = useState([]);
  const [participantionChartData, setParticipantionChartData] = useState([]);
  const [totalsAreLoaded, setTotalsAreLoaded] = useState(false);
  const [newUsersChartDataLoaded, setNewUsersChartDataLoaded] = useState(false);
  // const [usersChartDataLoaded, setUsersChartDataLoaded] = useState(false);
  // const [roomsRankingDataLoaded, setRoomsRankingDataLoaded] = useState(false);
  const [participantionChartDataLoaded, setParticipantionChartDataLoaded] = useState(false);
  const [yearPeriod, setYearPeriod] = useState(new Date().getFullYear().toString());
  const [monthPeriod, setMonthPeriod] = useState('0'); // month 0 correspons to "all months"
  const [searchQuery, setSearchQuery] = useState(`?period=monthly&start_date__year=${new Date().getFullYear()}&ordering=start_date`);

  // eslint-disable-next-line no-unused-vars
  const [selectedPeriodType, setSelectedPeriodType] = useState('monthly'); // yearly or monthly or daily

  const audiencesChartsUsersSettings = {
    chartType: 'LineChart',
    options: {
      legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
      colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
      hAxis: { textStyle: { color: '#FFFFFF' }, gridlines: { color: 'transparent' }, title: 'Ano' },
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
      colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
      bar: { groupWidth: '80%' },
      hAxis: { textStyle: { color: '#FFFFFF' } },
      vAxis: { minValue: 0, gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' } },
      backgroundColor: '#000000',
    },
  };

  async function fetchAndSetAudienciasTotalsData(query) {
    const newUsersTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${query}`);
    const audienciesTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${query}`);
    const messagesTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${query}`);
    const questionsTotalResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${query}`);

    const dataJson = {
      users_total: newUsersTotalResponse.data.sum_total_results,
      audiencias_total: audienciesTotalResponse.data.sum_total_results,
      messages_total: messagesTotalResponse.data.sum_total_results,
      questions_total: questionsTotalResponse.data.sum_total_results,
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
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ];

    switch (period) {
      case 'daily':
        arrayData = values.map(
          (value) => [new Date(value.end_date).getDate().toString(), value.new_users],
        );
        collumPeriodTitle = ['Dia', 'Novos Usuários'];
        break;
      case 'monthly':
        arrayData = values.map(
          (value) => [monthNames[(new Date(value.end_date)).getMonth()], value.new_users],
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
      setNewUsersChartData([collumPeriodTitle].concat(arrayData));
    } else {
      setNewUsersChartData(arrayData);
    }

    setNewUsersChartDataLoaded(true);

    /*
    if (Array.isArray(values) && values.length) {
      computeTotalOfUsersByPeriod(values);
    }
    */
  }

  function pad(d) {
    return (d < 10 ? `0${d.toString()}` : d.toString());
  }

  async function getParticipationChartDataByDay(month, year, messagesData, questionsData, questionsVoteData) {
    const totalOfDaysInMonth = await new Date(year, month, 0).getDate();
    const resultArray = [];

    for (let i = 1; i <= totalOfDaysInMonth; i += 1) {
      const messageFiltered = messagesData.filter((message) => message.end_date === `${year}-${pad(month)}-${pad(i)}`);
      const questionFiltered = questionsData.filter((question) => question.end_date === `${year}-${pad(month)}-${pad(i)}`);
      const questionsVoteFiltered = questionsVoteData.filter((queVote) => queVote.end_date === `${year}-${pad(month)}-${pad(i)}`);

      resultArray.push(
        [
          `${i}`,
          (messageFiltered.length > 0) ? messageFiltered[0].messages : 0,
          (questionFiltered.length > 0) ? questionFiltered[0].questions : 0,
          (questionsVoteFiltered.length > 0) ? questionsVoteFiltered[0].votes : 0,
        ],
      );
    }
    return resultArray;
  }

  async function getParticipationChartDataByMonth(month, year, messagesData, questionsData, questionsVoteData) {
    const resultArray = [];
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ];

    for (let i = 1; i <= 12; i += 1) {
      const messageFiltered = messagesData.filter((message) => message.start_date === `${year}-${pad(i)}-01`);
      const questionFiltered = questionsData.filter((question) => question.start_date === `${year}-${pad(i)}-01`);
      const questionsVoteFiltered = questionsVoteData.filter((queVote) => queVote.start_date === `${year}-${pad(i)}-01`);

      resultArray.push(
        [
          `${monthNames[i - 1]}`,
          (messageFiltered.length > 0) ? messageFiltered[0].messages : 0,
          (questionFiltered.length > 0) ? questionFiltered[0].questions : 0,
          (questionsVoteFiltered.length > 0) ? questionsVoteFiltered[0].votes : 0,
        ],
      );
    }

    return resultArray;
  }

  async function getParticipationChartDataByYear(messagesData, questionsData, questionsVoteData) {
    const resultArray = [];
    function pad(d) {
      return (d < 10 ? `0${d.toString()}` : d.toString());
    }

    for (let i = 2016; i <= 2020; i += 1) {
      const messageFiltered = messagesData.filter((message) => message.start_date === `${i}-01-01`);
      const questionFiltered = questionsData.filter((question) => question.start_date === `${i}-01-01`);
      const questionsVoteFiltered = questionsVoteData.filter((queVote) => queVote.start_date === `${i}-01-01`);

      resultArray.push(
        [
          `${i}`,
          (messageFiltered.length > 0) ? messageFiltered[0].messages : 0,
          (questionFiltered.length > 0) ? questionFiltered[0].questions : 0,
          (questionsVoteFiltered.length > 0) ? questionsVoteFiltered[0].votes : 0,
        ],
      );
    }

    return resultArray;
  }

  async function fetchAndSetParticipationChartData(query, period, month, year) {
    const messagesResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${query}`);
    const questionsResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${query}`);
    const questionsVotesResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${query}`);

    const messagesData = messagesResponse.data.results;
    const questionsData = questionsResponse.data.results;
    const questionsVoteData = questionsVotesResponse.data.results;

    let arrayData = [];
    const collumPeriodTitle = ['Data', 'Perguntas', 'Votos nas Perguntas', 'Mensagens do chat'];
    switch (period) {
      case 'daily':
        arrayData = await getParticipationChartDataByDay(month, year, messagesData, questionsData, questionsVoteData);
        break;
      case 'monthly':
        arrayData = await getParticipationChartDataByMonth(month, year, messagesData, questionsData, questionsVoteData);
        break;
      default: // yearly -> Total period
        arrayData = await getParticipationChartDataByYear(messagesData, questionsData, questionsVoteData);
        break;
    }

    if (arrayData.length > 0) {
      setParticipantionChartData([collumPeriodTitle].concat(arrayData));
    } else {
      setParticipantionChartData(arrayData);
    }
  }

  async function loadData(query, period, month, year) {
    fetchAndSetAudienciasTotalsData(query);
    fetchAndSetNewUsersChartData(query, period);
    fetchAndSetParticipationChartData(query, period, month, year);
    // fetchAndSetRoomsRankingData();
  }

  async function handleUpdatePeriodSearchQuery(month, year) {
    let query = '';
    let period = '';
    if (year === '0') {
      query = '?period=yearly&ordering=start_date';
      period = 'yearly';
    } else if ((year !== '0') && (month === '0')) {
      query = `?period=monthly&start_date__year=${year}&ordering=start_date`;
      period = 'monthly';
    } else { // (yearPeriod !== '0') && (monthPeriod !== '0')
      query = `?period=daily&start_date__year=${year}&start_date__month=${month}&ordering=start_date`;
      period = 'daily';
    }
    await loadData(query, period, month, year); // Reload page data
  }

  async function handlePeriodChange(month, year) {
    await handleUpdatePeriodSearchQuery(month, year);
  }

  useEffect(() => {
    loadData(searchQuery, selectedPeriodType);
  }, []);

  return (
    <>
      <Header
        title="Audiências Interativas"
        handlePeriodChange={handlePeriodChange}
        year={yearPeriod}
        monthPeriod={monthPeriod}
      />
      <Grid container spacing={1} className={classes.spacingContainer}>
        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={`${audienciasTotalsData.users_total}`} title="Total de Novos Usuários" />
        </Grid>

        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={`${audienciasTotalsData.audiencias_total}`} title="Total de Audiências" />
        </Grid>

        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={`${audienciasTotalsData.messages_total}`} title="Total de Mensagens" />
        </Grid>

        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={audienciasTotalsData.questions_total} title="Total de Perguntas" />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <ChartDataFrame height="60vh" title="Temas de audiências mais participativas" listView export_data={null} download>
            <div className={classes.contentBox}>
              <GoogleChart
                chartType={audiencesWithMoreParticipation.chartType}
                data={participantionChartData}
                options={audiencesWithMoreParticipation.options}
              />
            </div>
          </ChartDataFrame>
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <ChartDataFrame height="70vh" title="Ranking" listView export_data={null} download={false}>
            <Box width="100%" height="90%">
              <RankingTable data={props.responseDataRanking} />
            </Box>
          </ChartDataFrame>
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          {(newUsersChartData.length > 0) ? (
            <div className={classes.contentBox}>
              <GoogleChartFrame
                isLoaded={newUsersChartDataLoaded}
                title="Novos Usuários"
                classes={classes}
                data={newUsersChartData}
                chartType={audiencesChartsUsersSettings.chartType}
                chartOptions={audiencesChartsUsersSettings.options}
              />
            </div>
          ) : (
            <ChartDataFrame height="10vh" title="Novos Usuários" listView export_data={null} download={false}>
              <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
                <Typography>Não existem dados para o período selecionado</Typography>
              </Box>
            </ChartDataFrame>
          )}
        </Grid>
      </Grid>
    </>
  );
}

TotalFrame.propTypes = {
  isLoaded: PropTypes.bool,
  info: PropTypes.node,
  title: PropTypes.string,
};

TotalFrame.defaultProps = {
  isLoaded: false,
  info: 'info',
  title: 'Title',
};

GoogleChartFrame.propTypes = {
  isLoaded: PropTypes.bool,
  classes: PropTypes.object,
  title: PropTypes.string,
  data: PropTypes.node,
  chartType: PropTypes.string,
  chartOptions: PropTypes.object,
};

GoogleChartFrame.defaultProps = {
  isLoaded: false,
  classes: '',
  title: 'Title',
  data: {},
  chartType: '',
  chartOptions: {},
};

export default Audiencias;

/*
  function computeTotalOfUsersByPeriod(values) {
    const computedArray = [
      [new Date(values[0].end_date).getFullYear().toString(), values[0].new_users],
    ];
    for (let i = 1; i < values.length; i += 1) {
      computedArray.push(
        [new Date(values[i].end_date).getFullYear().toString(),
          values[i].new_users + computedArray[i - 1][1]],
      );
    }
    const chartCompleteData = [['Ano', 'Total de Usuários']].concat(computedArray);
    setUsersChartData(chartCompleteData);
    setUsersChartDataLoaded(true);
  }
*/
