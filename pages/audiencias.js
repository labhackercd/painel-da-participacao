/* eslint-disable max-len */
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
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Layout from '../layouts/index';
import { DEFAULT_SEARCH_QUERY } from '../src/services/constants/constants';
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

function AudienciasPage({ dados, defaultApisData, apiLastCacheMade }) {
  const classes = useStyles();

  function AudienciasHeader() {
    return (
      <Box marginBottom={5} marginX={2}>
        <Typography variant="h1">
          <Box fontWeight="fontWeightBold">
            A Participação em Audiências Interativas
          </Box>
        </Typography>
        <div>
          <Typography component="p" variant="h4">
            <Box style={{ color: '#BFBFBF' }}>
              Painel de estatísticas de participação dos cidadãos em audiências públicas e
              eventos interativos da Câmara dos Deputados.
            </Box>
          </Typography>
        </div>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>Dashboard Audiências</title>
      </Head>
      <Layout value={1}>
        <Grid container className={classes.root}>
          <Container className={classes.container}>
            <main className={classes.content}>
              <AudienciasHeader />
              <Audiencias responseDataRanking={dados} defaultApisData={defaultApisData} apiLastCacheMade={apiLastCacheMade} />
            </main>
          </Container>
        </Grid>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let audienciasRankingData = [];

  async function getAudienciasRankingData() {
    const results = [];
    let url = `${process.env.NEXT_PUBLIC_AUDIENCIAS_REPORT_RANKING_URL}?limit=500`;
    try {
      do {
        const resp = await axios.get(url);
        const data = await resp.data;
        url = data.next;
        results.push(...data.results);
      } while (url);

      return { data: results, lastUpdate: format(new Date(), ' dd/LL/yyyy, k:m', { locale: ptBR }) };
    } catch (err) {
      return [];
    }
  }

  audienciasRankingData = await getAudienciasRankingData();
  const participantsResponse = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${DEFAULT_SEARCH_QUERY}`);
  const roomsResponseData = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${DEFAULT_SEARCH_QUERY}`);
  const messagesResponseData = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${DEFAULT_SEARCH_QUERY}`);
  const questionsResponseData = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${DEFAULT_SEARCH_QUERY}`);
  const newUsersResponseData = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${DEFAULT_SEARCH_QUERY}`);
  const votesResponseData = await axios.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${DEFAULT_SEARCH_QUERY}`);

  return {
    props: {
      dados: audienciasRankingData,
      defaultApisData: {
        audienciasRankingData: audienciasRankingData.data,
        audienceParticipantUsersAPIData: participantsResponse.data,
        audiencesRoomsAPIData: roomsResponseData.data,
        audienceMessagesAPIData: messagesResponseData.data,
        audienceNewUsersAPIData: newUsersResponseData.data,
        audienceQuestionsAPIData: questionsResponseData.data,
        audienceVotesAPIData: votesResponseData.data,
      },
      apiLastCacheMade: format(new Date(), ' dd/LL/yyyy, k:m', { locale: ptBR }),
    },
    revalidate: 6000, // Update data every hour (600 seconds)
  };
}

export default AudienciasPage;
