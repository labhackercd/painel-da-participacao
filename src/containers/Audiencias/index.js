import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import ChartDataFrame from '../../components/ChartDataFrame/index';
import Header from '../../components/Header/index';
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

export default function Audiencias() {
  const classes = useStyles();
  // const [audienciasData, setAudienciasData] = useState({});
  const [data, setData] = useState('');
  const [datePeriodSelectData, setDatePeriodSelectData] = useState({ year: '', semester: '', month: '' });
  const [totalsAreLoaded, setTotalsAreLoaded] = useState(false);

  const audiencesWithMoreParticipation = {
    chartType: 'ColumnChart',
    data: [
      ['Data', 'Perguntas', 'Votos nas Perguntas', 'Mensagens do chat'],
      ['01/12', 300, 800, 231],
      ['02/12', 345, 545, 265],
      ['03/12', 240, 865, 212],
      ['04/12', 256, 870, 234],
      ['05/12', 210, 856, 275],
      ['06/12', 323, 822, 276],
      ['07/12', 356, 762, 212],
      ['08/12', 121, 542, 434],
      ['09/12', 130, 232, 234],
      ['10/12', 213, 212, 954],
      ['11/12', 365, 309, 545],
      ['12/12', 313, 312, 576],
      ['13/12', 376, 376, 603],
      ['14/12', 309, 354, 565],
      ['15/12', 354, 323, 732],
    ],
    options: {
      bars: 'vertical',
      legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
      isStacked: 'true',
      colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
      bar: { groupWidth: '40%' },
      hAxis: { textStyle: { color: '#FFFFFF' } },
      vAxis: { minValue: 0, gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' } },
      backgroundColor: '#000000',
    },
  };

  const audiencesWithMoreVisualizations = {
    chartType: 'PieChart',
    data: [
      ['Audiência', 'Participação'],
      ['Retomada das Aulas Presenciais em 2021', 11],
      ['O impacto das queimadas nas...', 2],
      ['Sem. virtual O papel do Legislativo...', 2],
    ],
    options: {
      legend: { position: 'right', maxLines: 3, textStyle: { color: 'white' } },
      colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
      hAxis: { textStyle: { color: '#FFFFFF' } },
      vAxis: { minValue: 0, gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' } },
      backgroundColor: '#000000',
    },
  };

  const audiencesUsersTotal = {
    chartType: 'LineChart',
    data: [
      ['Ano', 'Total de Usuários', 'Novos Usuários'],
      ['2016', 10, 5],
      ['2017', 23, 15],
      ['2018', 17, 9],
      ['2019', 18, 10],
      ['2020', 35, 14],
    ],
    options: {
      legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
      colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
      hAxis: { textStyle: { color: '#FFFFFF' }, gridlines: { color: 'transparent' } },
      vAxis: { minValue: 0, gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' } },
      series: {
        1: { curveType: 'function' },
      },
      backgroundColor: '#000000',
    },
  };

  async function fetchAudienciasTotals() {
    const response = await axios.get('url');
    return response.data;
  }

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

  async function loadData() {
    /*
    const response = await fetchDataFromAPI({ year: '', semester: '', month: '' });
    const audienciasDataResponse = response.general_analysis.audiencias.data;
    setData(response);
    setAudienciasData(audienciasDataResponse);
    */
    const dataJson = {
      users_total: 100,
      audiencias_total: 234,
      messages_total: 125.2,
      questions_total: 545,
    };
    setData(dataJson);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header setDatePeriodSelectData={setDatePeriodSelectData} datePeriodSelectData={datePeriodSelectData} title="Audiências Interativas" />
      <Grid container spacing={1} className={classes.spacingContainer}>
        <Grid item xs={12} md={3} className={classes.spacing}>
          <ChartDataFrame height="15vh" paddingRight="0.5rem" listView={false} download={false} title="Total usuários" className={classes.positionStats}>
            {data ? <Typography variant="h2" style={{ color: '#FFF', alignSelf: 'center' }}>{data.users_total}</Typography> : ''}
          </ChartDataFrame>
        </Grid>

        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={`${data.audiencias_total} MIL`} title="Total Audiências" />
        </Grid>

        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={`${data.questions_total} MI`} title="Total Mensagens" />
        </Grid>

        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={data.questions_total} title="Total Perguntas" />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <ChartDataFrame height="60vh" title="Temas de audiências mais participativas" listView export_data={data.treemap_chart_data} download>
            <div className={classes.contentBox}>
              <GoogleChart
                chartType={audiencesWithMoreParticipation.chartType}
                data={audiencesWithMoreParticipation.data}
                options={audiencesWithMoreParticipation.options}
              />
            </div>
          </ChartDataFrame>
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <ChartDataFrame height="35vh" paddingRight="0.5rem" listView download />
        </Grid>

        <Grid item xs={6} className={classes.spacing}>
          <ChartDataFrame height="35vh" paddingRight="0.5rem" title="Audiências que tiveram mais visualizações" listView download>
            <GoogleChart
              chartType={audiencesWithMoreVisualizations.chartType}
              data={audiencesWithMoreVisualizations.data}
              options={audiencesWithMoreVisualizations.options}
            />
          </ChartDataFrame>
        </Grid>
        <Grid item xs={6} className={classes.spacing}>
          <ChartDataFrame height="35vh" paddingLeft="0.5rem" title="Audiências que tiveram mais visualizações" listView download>
            <GoogleChart
              chartType={audiencesUsersTotal.chartType}
              data={audiencesUsersTotal.data}
              options={audiencesUsersTotal.options}
            />
          </ChartDataFrame>
        </Grid>

      </Grid>
    </>
  );
}
