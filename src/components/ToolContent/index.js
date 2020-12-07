import React, {useState, useLayoutEffect, useEffect} from 'react';
import { Grid, Container} from '@material-ui/core';
import HomeMenu from '../HomeMenu';
import Header from '../Header';
import Audiencias from './../Audiencias';
import { makeStyles } from '@material-ui/core/styles';
import fetchDataFromAPI from './../DataFetcher';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    overflow: 'auto',
    flexGrow: 1,
    padding: '2.5rem 0 0 0',
  },
  container: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '0 0 2rem 0',
  },
}));

export default function ToolContent(props) {
  const classes = useStyles();
  const page = props.page;
  const [datePeriodSelectData, setDatePeriodSelectData] = useState({year:  '', semester: '', month: ''})
  const [data, setData] = useState({});
  const [audienciasData, setAudienciasData] = useState({})

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await fetchDataFromAPI(datePeriodSelectData);
    const audienciasData = response.general_analysis.audiencias.data;
    setData(response)
    setAudienciasData(audienciasData)
  }
  function renderSwitch(param) {
    console.log("data inside renderSwitch")
    console.log(param)
  }

  return (
    <Grid container className={classes.root}>
    <HomeMenu open={true}></HomeMenu>
    <Container className={classes.container}>
      <main className={classes.content}>
        <Header setDatePeriodSelectData={setDatePeriodSelectData} title="Audiências Interativas" />
        <Audiencias data={audienciasData} />
      </main>
    </Container>
    </Grid>
  )
}
