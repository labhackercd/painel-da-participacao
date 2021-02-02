import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChartDataFrame from '../ChartDataFrame';
import fetchDataFromAPI from '../DataFetcher';
import GoogleChart from '../Charts/GoogleChart';

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
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  positionStats: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

function StyledTotalNumber(number) {
  return (
    <Typography variant="h2" style={{ color: '#FFF', alignSelf: 'center' }}>{number}</Typography>
  );
}

export default function Audiencias() {
  const classes = useStyles();
  // const [audienciasData, setAudienciasData] = useState({});
  const [data, setData] = useState('');
  const barChartdata = {
    values: [
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000],
    ],
    options: {
      title: 'Population of Largest U.S. Cities',
      chartArea: { width: '30%', height: '60%' },
      hAxis: {
        title: 'Total Population',
        minValue: 0,
      },
      vAxis: {
        title: 'City',
      },
    },
  };
  const treeMapChartdata = {
    values: [
      [
        'Location',
        'Parent',
        'Market trade volume (size)',
        'Market increase/decrease (color)',
      ],
      ['Global', null, 0, 0],
      ['America', 'Global', 0, 0],
      ['Europe', 'Global', 0, 0],
      ['Asia', 'Global', 0, 0],
      ['Australia', 'Global', 0, 0],
      ['Africa', 'Global', 0, 0],
      ['Brazil', 'America', 11, 10],
      ['USA', 'America', 52, 31],
      ['Mexico', 'America', 24, 12],
      ['Canada', 'America', 16, -23],
      ['France', 'Europe', 42, -11],
      ['Germany', 'Europe', 31, -2],
      ['Sweden', 'Europe', 22, -13],
      ['Italy', 'Europe', 17, 4],
      ['UK', 'Europe', 21, -5],
      ['China', 'Asia', 36, 4],
      ['Japan', 'Asia', 20, -12],
      ['India', 'Asia', 40, 63],
      ['Laos', 'Asia', 4, 34],
      ['Mongolia', 'Asia', 1, -5],
      ['Iran', 'Asia', 18, 13],
      ['Pakistan', 'Asia', 11, -52],
      ['Egypt', 'Africa', 21, 0],
      ['S. Africa', 'Africa', 30, 43],
      ['Sudan', 'Africa', 12, 2],
      ['Congo', 'Africa', 10, 12],
      ['Zaire', 'Africa', 8, 10],
    ],
    options: {
      minColor: '#f00',
      midColor: '#ddd',
      maxColor: '#0d0',
      headerHeight: 15,
      fontColor: 'black',
      showScale: true,
    },
  };

  async function loadData() {
    const response = await fetchDataFromAPI({ year: '', semester: '', month: '' });
    // const audienciasDataResponse = response.general_analysis.audiencias.data;
    setData(response);
    // setAudienciasData(audienciasDataResponse);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Grid container>
      <Grid item md={3} className={classes.spacing}>
        <ChartDataFrame height="15vh" paddingRight="0.5rem" listView={false} download={false} title="Total usuários" className={classes.positionStats}>
          {data ? <StyledTotalNumber number={data.users_total} /> : ''}
        </ChartDataFrame>
      </Grid>
      <Grid item md={3} className={classes.spacing}>
        <ChartDataFrame height="15vh" paddingLeft="0.5rem" listView={false} download={false} title="Total Audiências">
          {data ? <StyledTotalNumber number={data.audiencias_total} /> : ''}
        </ChartDataFrame>
      </Grid>
      <Grid item md={3} className={classes.spacing}>
        <ChartDataFrame height="15vh" paddingLeft="0.5rem" listView={false} download={false} title="Total mensagens">
          {data ? <StyledTotalNumber number={data.messages_total} /> : ''}
        </ChartDataFrame>
      </Grid>
      <Grid item md={3} className={classes.spacing}>
        <ChartDataFrame height="15vh" paddingLeft="0.5rem" title="Total perguntas" listView={false} download={false}>
          {data ? <StyledTotalNumber number={data.questions_total} /> : ''}
        </ChartDataFrame>
      </Grid>
      <Grid item md={12} className={classes.spacing}>
        <ChartDataFrame height="60vh" title="Temas de audiências mais participativas" listView export_data={data.treemap_chart_data} download>
          <div className={classes.contentBox}>
            <GoogleChart chartType="TreeMap" data={treeMapChartdata.values} options={treeMapChartdata.options} />
          </div>
        </ChartDataFrame>
      </Grid>
      <Grid container>
        <Grid item md={6} className={classes.spacing}>
          <ChartDataFrame height="35vh" paddingRight="0.5rem" listView download>
            <GoogleChart chartType="BarChart" data={barChartdata.values} options={barChartdata.options} />
          </ChartDataFrame>
        </Grid>
        <Grid item md={6} className={classes.spacing}>
          <ChartDataFrame height="35vh" paddingLeft="0.5rem" listView download />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} className={classes.spacing}>
          <ChartDataFrame height="35vh" paddingRight="0.5rem" listView download />
        </Grid>
        <Grid item md={6} className={classes.spacing}>
          <ChartDataFrame height="35vh" paddingLeft="0.5rem" listViewdownload />
        </Grid>
      </Grid>
    </Grid>
  );
}
