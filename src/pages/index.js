/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import axios from 'axios';
import {
  Grid, Typography, Hidden, Box,
} from '@material-ui/core';
import PageNavbar from '../layouts/navbar';
import Footer from '../components/Footer/index';
import Carousel from '../components/Carousel/index';
import formatNumberWithDots from '../utils/format/numbers/formatNumbersWithDots/formatNumberWithDots';
import logoParticipa from '../assets/images/logos/logo_participa.svg';

import { REFRESH_API_CACHE_DATA_INTERVAL } from '../settings/applicationOptions/index';

import { useStyles } from '../styles/pages/indexPageStyle';

function Home({ usersTotal, apiLastCacheMade }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Painel da Participação</title>
      </Head>
      <Box className={classes.box}>
        <Box className={classes.boxHeader}>
          <PageNavbar value={0} />
        </Box>
        <Box className={classes.boxContent}>
          <Box className={classes.bannerBox}>
            <Box className={classes.bannerBoxText}>
              <Typography>
                Logo
              </Typography>
              <Typography className={`${classes.typography} ${classes.typograhyTitle}`}>
                Painel da Participação
              </Typography>
            </Box>
          </Box>
          <Box className={classes.boxGridContainer}>
            <Grid container>
              <Grid item xs={12} md={5}>
                <Box className={classes.textBox}>
                  <Typography className={classes.typographyHighLightedText} display="inline">
                    {formatNumberWithDots(usersTotal)}
                  </Typography>
                  <Typography gutterBottom className={classes.typographyBoxText} display="inline">
                    {' '}
                    cidadãos se cadastraram no portal e-Democracia da Câmara dos Deputados.*
                  </Typography>
                  <Box className={classes.typographyParagraphBox}>
                    <Typography className={classes.typographyBoxText} display="inline">
                      Conheça os números de utilização das
                    </Typography>
                    <Typography className={classes.typographyHighLightedText} display="inline">
                      {' '}
                      ferramentas de participação pelos cidadãos.
                    </Typography>
                    <Typography className={`${classes.typography} ${classes.typographyCaption}`}>
                      * Dados atualizados em
                      {' '}
                      {apiLastCacheMade}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box className={classes.caroulselBox}>
                  <Box className={classes.caroulselInsideBox}>
                    <Carousel />
                  </Box>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>

    </div>
  );
}

export async function getStaticProps() {
  async function getData() {
    const url = `${process.env.NEXT_PUBLIC_EDEMOCRACIA_REPORT_RANKING_USERS_URL}?period=yearly`;

    try {
      const resp = await axios.get(url);
      const respData = await resp.data;
      return respData;
    } catch (err) {
      return '-';
    }
  }

  const usersTotal = await getData();

  return {
    props: {
      usersTotal: usersTotal.sum_total_results,
      apiLastCacheMade: (usersTotal.results[0].modified).split(' ')[0],
    },
    revalidate: REFRESH_API_CACHE_DATA_INTERVAL, // Default 3600 seconds
  };
}

export default Home;
