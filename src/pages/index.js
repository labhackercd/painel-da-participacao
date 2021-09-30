/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
import Head from 'next/head';
import {
  Grid, Typography, Box,
} from '@material-ui/core';
import { format, subDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { apiInstance } from '../services/api/apiInstance';
import PageNavbar from '../layouts/Navbar/index';
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
            <Box className={classes.bannerBoxParticipaLogo}>
              <img
                src={logoParticipa}
                alt="Logotipo do LABHacker"
              />
            </Box>
            <Box className={classes.bannerBoxText}>
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
                      * Dados consolidados até
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
      const resp = await apiInstance.get(url);
      const respData = await resp.data;
      return respData.sum_total_results;
    } catch (err) {
      return '-';
    }
  }

  const usersTotalData = await getData();
  return {
    props: {
      usersTotal: usersTotalData,
      apiLastCacheMade: format(subDays(new Date(), 1), ' dd/LL/yyyy', { locale: ptBR }),
    },
    revalidate: REFRESH_API_CACHE_DATA_INTERVAL,
  };
}

export default Home;
