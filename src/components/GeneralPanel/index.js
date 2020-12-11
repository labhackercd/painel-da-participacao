import React, {useState,useEffect} from 'react';
import { Grid, Typography} from '@material-ui/core';
import ChartDataFrame from './../ChartDataFrame';
import { makeStyles } from '@material-ui/core/styles';
import fetchDataFromAPI from './../DataFetcher';
import CalendarHeatChart from './../Charts/CalendarHeatChart';

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

function StyledTotalNumber(props) {

  return (
      <Typography variant="h2" style={{color: '#FFF', alignSelf: 'center'}}>{props.number}</Typography>
  )
}

export default function GeneralPanel(props) {
  const classes = useStyles();
  const [audienciasData, setAudienciasData] = useState({})
  const [data, setData] = useState('')
  const calendarHeatChartdata = {
      values:[
        [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
        [new Date("2013-02-04T10:40:00.000Z"), 37032],
        [new Date("2013-02-04T10:40:00.000Z"), 38024],
        [new Date("2013-02-04T10:40:00.000Z"), 38024],
        [new Date("2013-02-04T10:40:00.000Z"), 38108],
        [new Date("2013-02-04T10:40:00.000Z"), 38229],
    ],
      options:{
      title: 'Red Sox Attendance',
      calendar: {
        cellColor: {
          stroke: '#76a7fa',
          strokeOpacity: 0.5,
          strokeWidth: 1,
        }
      },
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await fetchDataFromAPI({year:  '', semester: '', month: ''});
    const audienciasData = response.general_analysis.audiencias.data;
    setData(response)
    setAudienciasData(audienciasData)
  }

  return (
      <Grid container>
        <Grid item md={12} className={classes.spacing}>
          <ChartDataFrame height="25vh"
                      paddingRight="0.5rem"
                      listView={false}
                      download={false}
                      title="Total usuários"
                      className={classes.positionStats}>
                      {data ? <StyledTotalNumber number={data.users_total}/> : ''}
            <CalendarHeatChart style={{padding: '1rem 0 0 0'}} data={calendarHeatChartdata.values} options={calendarHeatChartdata.options}></CalendarHeatChart>
          </ChartDataFrame>
        </Grid>
      </Grid>
  )
}
