/* eslint-disable no-await-in-loop */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import Layout from '../layouts/index';

import Audiencias from '../src/containers/Audiencias';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: '2.5rem 0 0 0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '0 0 2rem 0',
  },
}));

function AudienciasPage({ dados }) {
  const classes = useStyles();
  return (
    <Layout value={0}>
      <Grid container className={classes.root}>
        <Container className={classes.container}>
          <main className={classes.content}>
            <Audiencias responseDataRanking={dados} />
          </main>
        </Container>
      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  let dados = [];

  async function getData() {
    const results = [];
    // let url = 'https://tes.edemocracia.camara.leg.br/audiencias/reports/api/ranking/?limit=500';
    let url = `${process.env.NEXT_PUBLIC_AUDIENCIAS_REPORT_RANKING_URL}?limit=500`;

    try {
      do {
        const resp = await axios.get(url);
        const data = await resp.data;
        url = data.next;
        results.push(...data.results);
      } while (url);

      return results;
    } catch (err) {
      return [];
    }
  }

  dados = await getData();

  return {
    props: {
      dados,
    },
    revalidate: 600, // Update data every 10 minutes (600 seconds)
  };
}

export default AudienciasPage;
