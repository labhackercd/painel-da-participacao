/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import axios from 'axios';
import {
  makeStyles, Grid, Container, Box, Typography,
} from '@material-ui/core/';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { DEFAULT_SEARCH_QUERY } from '../settings/applicationOptions/index';
import Layout from '../layouts/index';
import Wikilegis from '../containers/Wikilegis';
import * as TEXTCONSTANTS from '../settings/texts/WikilegisPage';

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

function WikilegisPage({
  dados, defaultApisData, apiLastCacheMade, apiLastCacheMadeHour,
}) {
  const classes = useStyles();

  function WikilegisHeader() {
    return (
      <Box marginBottom={5} marginX={2}>
        <Typography variant="h1">
          <Box fontWeight="fontWeightBold">
            {TEXTCONSTANTS.pageTitle}
          </Box>
        </Typography>
        <Typography variant="h4">
          <Box style={{ color: '#BFBFBF' }}>
            {TEXTCONSTANTS.pageSubTitle}
          </Box>
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{TEXTCONSTANTS.pageHTMLTitle}</title>
      </Head>
      <Layout value={2}>
        <Grid container className={classes.root}>
          <Container className={classes.container}>
            <main className={classes.content}>
              <WikilegisHeader />
              <Wikilegis
                responseDataRanking={dados}
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
  let wikilegisRankingData = [];

  async function getWikilegisRankingData() {
    const results = [];
    let url = `${process.env.NEXT_PUBLIC_WIKILEGIS_DOCUMENTS_RANKING_URL}?limit=500`;

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

  wikilegisRankingData = await getWikilegisRankingData();
  const participantsResponse = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${DEFAULT_SEARCH_QUERY}`);
  const legislativeProposalsResponseData = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${DEFAULT_SEARCH_QUERY}`);
  const opinionsResponseData = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${DEFAULT_SEARCH_QUERY}`);
  const votesResponseData = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${DEFAULT_SEARCH_QUERY}`);
  const newUsersResponseData = await axios.get(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${DEFAULT_SEARCH_QUERY}`);

  return {
    props: {
      dados: wikilegisRankingData,
      defaultApisData: {
        wikilegisRankingData: wikilegisRankingData.data,
        wikilegisParticipantUsersAPIData: participantsResponse.data,
        wikilegisLegislativeProposalsAPIData: legislativeProposalsResponseData.data,
        wikilegisOpinionsAPIData: opinionsResponseData.data,
        wikilegisVotesAPIData: votesResponseData.data,
        wikilegisNewUsersAPIData: newUsersResponseData.data,
      },
      apiLastCacheMade: format(new Date(), ' dd/LL/yyyy, k:mm', { locale: ptBR }),
      apiLastCacheMadeHour: (new Date()).toString(),
    },
    revalidate: 3600, // Update data every hour (3600 seconds)
  };
}

export default WikilegisPage;
