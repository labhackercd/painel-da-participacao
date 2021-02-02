import React, { useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeMenu from '../HomeMenu';
import Header from '../Header';

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
  // const page = props.page;
  const [datePeriodSelectData, setDatePeriodSelectData] = useState({ year: '', semester: '', month: '' });
  // const [data, setData] = useState({});
  // const [audienciasData, setAudienciasData] = useState({})

  return (
    <Grid container className={classes.root}>
      <HomeMenu open />
      <Container className={classes.container}>
        <main className={classes.content}>
          <Header setDatePeriodSelectData={setDatePeriodSelectData} title="Audiências Interativas" />
          {props.children}
        </main>
      </Container>
    </Grid>
  );
}
