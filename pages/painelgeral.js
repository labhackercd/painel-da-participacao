/* eslint-disable no-await-in-loop */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from '../layouts/index';

import PainelGeral from '../src/containers/PainelGeral';

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

function PainelGeralPage({ dados }) {
  const classes = useStyles();

  function PainelGeralHeader() {
    return (
      <Box marginBottom={5} marginX={2}>
        <Typography variant="h1">
          <Box fontWeight="fontWeightBold">
            Painel geral
          </Box>
        </Typography>
        <div>
          <Typography component="p" variant="h4">
            <Box style={{ color: '#BFBFBF' }}>
              Painel de estatísticas da participação no portal e-Democracia da Câmara dos Deputados.
            </Box>
          </Typography>
        </div>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>Painel Geral</title>
      </Head>
      <Layout value={0}>
        <Grid container className={classes.root}>
          <Container className={classes.container}>
            <main className={classes.content}>
              <PainelGeralHeader />
              <PainelGeral responseDataRanking={dados} />
            </main>
          </Container>
        </Grid>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let dados = [];

  function pad(d) {
    return (d < 10 ? `0${d.toString()}` : d.toString());
  }

  function getLastUpdateHour(today) {
    return (
      `${pad(today.getDate())}/${pad(today.getMonth())}/${today.getFullYear()}
      ${pad(today.getHours())}:${pad(today.getMinutes())}`
    );
  }

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

      return { data: results, lastUpdate: getLastUpdateHour(new Date()) };
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

export default PainelGeralPage;
