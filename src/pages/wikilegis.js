/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import { Grid, Box, Typography } from '@material-ui/core/';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { apiInstance } from '../services/api/apiInstance';
import {
  DEFAULT_SEARCH_QUERY,
  PARTICIPANTS_SEARCH_QUERY,
  REFRESH_API_CACHE_DATA_INTERVAL,
} from '../settings/applicationOptions/index';
import Layout from '../layouts/index';
import Wikilegis from '../containers/Wikilegis';
import * as TEXTCONSTANTS from '../settings/texts/WikilegisPage';

import { useStyles } from '../styles/pages/wikilegisPageStyle';

function WikilegisPage({
  defaultApisData,
  apiLastCacheMade,
  apiLastCacheMadeHour,
}) {
  const classes = useStyles();

  function WikilegisHeader() {
    return (
      <Box className={classes.boxTitle}>
        <Typography className={classes.typographyTitle} variant="h1" component="div">
          {TEXTCONSTANTS.pageTitle}
        </Typography>
        <div>
          <Typography className={classes.typographyDescription} component="div" variant="h4">
            {TEXTCONSTANTS.pageSubTitle}
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
      <Layout value={2}>
        <Grid container className={classes.root}>
          <div className={classes.container}>
            <main className={classes.content}>
              <WikilegisHeader />
              <Box
                display="flex"
                className={classes.lineBox}
                flexDirection="row-reverse"
              >
                <div className={classes.lineDividerGradientColor} />
              </Box>
              <Wikilegis
                defaultApisData={defaultApisData}
                apiLastCacheMade={apiLastCacheMade}
                apiLastCacheMadeHour={apiLastCacheMadeHour}
              />
            </main>
          </div>
        </Grid>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let wikilegisRankingData = [];
  const formatedQueryDate = format(new Date(), 'yyyy-LL-dd', { locale: ptBR });

  async function getWikilegisRankingData() {
    const results = [];
    let url = `${process.env.NEXT_PUBLIC_WIKILEGIS_DOCUMENTS_RANKING_URL}?limit=500&closing_date__lt=${formatedQueryDate}`;

    try {
      do {
        const resp = await apiInstance.get(url);
        const data = await resp.data;
        url = data.next;
        results.push(...data.results);
      } while (url);

      return {
        data: results,
        lastUpdate: format(new Date(), ' dd/LL/yyyy, kk:mm', { locale: ptBR }),
      };
    } catch (err) {
      return { data: [] };
    }
  }
  wikilegisRankingData = await getWikilegisRankingData();
  const participantsResponse = await apiInstance.get(
    `${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${PARTICIPANTS_SEARCH_QUERY}`,
  );
  const legislativeProposalsResponseData = await apiInstance.get(
    `${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${DEFAULT_SEARCH_QUERY}`,
  );
  const opinionsResponseData = await apiInstance.get(
    `${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${DEFAULT_SEARCH_QUERY}`,
  );
  const votesResponseData = await apiInstance.get(
    `${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${DEFAULT_SEARCH_QUERY}`,
  );
  const newUsersResponseData = await apiInstance.get(
    `${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${DEFAULT_SEARCH_QUERY}`,
  );

  return {
    props: {
      defaultApisData: {
        wikilegisRankingData: wikilegisRankingData.data,
        wikilegisParticipantUsersAPIData: participantsResponse.data,
        wikilegisLegislativeProposalsAPIData:
          legislativeProposalsResponseData.data,
        wikilegisOpinionsAPIData: opinionsResponseData.data,
        wikilegisVotesAPIData: votesResponseData.data,
        wikilegisNewUsersAPIData: newUsersResponseData.data,
      },
      apiLastCacheMade: format(new Date(), ' dd/LL/yyyy, kk:mm', {
        locale: ptBR,
      }),
      apiLastCacheMadeHour: new Date().toString(),
    },
    revalidate: REFRESH_API_CACHE_DATA_INTERVAL,
  };
}

export default WikilegisPage;
