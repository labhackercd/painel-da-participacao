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
import bannerInitialPage from '../assets/images/initialPage/peopleInGroupImage.png';

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
        <Box>
          <PageNavbar value={0} />
        </Box>
        <Box className={classes.boxContent}>
          <Box className={classes.boxGridContainer}>
            <Grid container>
              <Grid item xs={12} sm={6} lg={6}>
                <Box className={classes.textBox}>
                  <div>
                    <Typography className={classes.typographyHighLightedText}>
                      {formatNumberWithDots(usersTotal)}
                    </Typography>
                    <Typography gutterBottom className={classes.typographyBoxText}>
                      {' '}
                      cidadãos se cadastraram no portal e-Democracia da Câmara dos Deputados.*
                    </Typography>
                    <Box>
                      <Typography className={classes.typographyBoxText}>
                        Conheça os números de
                      </Typography>
                      <Typography className={classes.typographyHighLightedText}>
                        {' '}
                        participação pelos cidadãos.
                      </Typography>
                    </Box>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                  <img className={classes.initialPageBannerImg} src={bannerInitialPage} alt="" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Box width="35%" height="100%">
                    <Typography className={`${classes.typography} ${classes.typographyCaption}`}>
                      * Dados consolidados até
                      {' '}
                      {apiLastCacheMade}
                    </Typography>
                  </Box>
                  <Box className={classes.lineDividerGradientColor} />
                </Box>

              </Grid>
              <Grid item xs={12}>
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
