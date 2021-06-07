/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import {
  Grid, Container, Box, Typography,
} from '@material-ui/core/';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { apiInstance } from '../services/api/apiInstance';
import Layout from '../layouts/index';
import { DEFAULT_SEARCH_QUERY, REFRESH_API_CACHE_DATA_INTERVAL } from '../settings/applicationOptions/index';
import * as TEXTCONSTANTS from '../settings/texts/AudienciasPage';
import Audiencias from '../containers/Audiencias';
import { useStyles } from '../styles/pages/audienciasPageStyle';

function AudienciasPage({
  defaultApisData, apiLastCacheMade, apiLastCacheMadeHour,
}) {
  const classes = useStyles();

  function AudienciasHeader() {
    return (
      <Box marginBottom={5} marginX={2}>
        <Typography variant="h1">
          <Box fontWeight="fontWeightBold">
            {TEXTCONSTANTS.pageTitle}
          </Box>
        </Typography>
        <div>
          <Typography component="p" variant="h4">
            <Box style={{ color: '#BFBFBF' }}>
              {TEXTCONSTANTS.pageSubTitle}
            </Box>
          </Typography>
        </div>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{TEXTCONSTANTS.pageHTMLTitle}</title>
      </Head>
      <Layout value={1}>
        <Grid container className={classes.root}>
          <Container className={classes.container}>
            <main className={classes.content}>
              <AudienciasHeader />
              <Audiencias
                defaultApisData={defaultApisData}
                apiLastCacheMade={apiLastCacheMade}
                apiLastCacheMadeHour={apiLastCacheMadeHour}
              />
            </main>
          </Container>
        </Grid>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let audienciasRankingData = [];

  function removeCSVEscapeCharacters(text) {
    return text.replace(/"/g, "'");
  }

  async function getAudienciasRankingData() {
    const results = [];
    let url = `${process.env.NEXT_PUBLIC_AUDIENCIAS_REPORT_RANKING_URL}?limit=500`;
    try {
      do {
        const resp = await apiInstance.get(url);
        const data = await resp.data;
        url = data.next;
        const dataToFormat = [...data.results];
        const formatedData = await dataToFormat.map((item) => ({
          ...item,
          title_reunion: item.title_reunion ? removeCSVEscapeCharacters(item.title_reunion) : null,
          reunion_theme: item.reunion_theme ? removeCSVEscapeCharacters(item.reunion_theme) : null,
          audience_status: item.is_active ? 'Realizada' : 'Cancelada',
        }));

        results.push(...formatedData);
      } while (url);
      return { data: results };
    } catch (err) {
      return { data: [] };
    }
  }

  audienciasRankingData = await getAudienciasRankingData();
  const participantsResponse = await apiInstance.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${DEFAULT_SEARCH_QUERY}`);
  const roomsResponseData = await apiInstance.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${DEFAULT_SEARCH_QUERY}`);
  const messagesResponseData = await apiInstance.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${DEFAULT_SEARCH_QUERY}`);
  const questionsResponseData = await apiInstance.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${DEFAULT_SEARCH_QUERY}`);
  const newUsersResponseData = await apiInstance.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${DEFAULT_SEARCH_QUERY}`);
  const votesResponseData = await apiInstance.get(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${DEFAULT_SEARCH_QUERY}`);

  return {
    props: {
      defaultApisData: {
        audienciasRankingData: audienciasRankingData.data,
        audienceParticipantUsersAPIData: participantsResponse.data,
        audiencesRoomsAPIData: roomsResponseData.data,
        audienceMessagesAPIData: messagesResponseData.data,
        audienceNewUsersAPIData: newUsersResponseData.data,
        audienceQuestionsAPIData: questionsResponseData.data,
        audienceVotesAPIData: votesResponseData.data,
      },
      apiLastCacheMade: format(new Date(), ' dd/LL/yyyy, kk:mm', { locale: ptBR }),
      apiLastCacheMadeHour: (new Date()).toString(),
    },
    revalidate: REFRESH_API_CACHE_DATA_INTERVAL,
  };
}

export default AudienciasPage;
