/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
import Head from 'next/head';
import { Grid, Typography, Box } from '@material-ui/core';
import { format, subDays } from 'date-fns';
import Footer from '../components/Footer/index';
import ptBR from 'date-fns/locale/pt-BR';
import { apiInstance } from '../services/api/apiInstance';
import Carousel from '../components/Carousel/index';
import PageNavbar from '../layouts/Navbar/index';
import formatNumberWithDots from '../utils/format/numbers/formatNumbersWithDots/formatNumberWithDots';
import bannerInitialPage from '../assets/images/initialPage/peopleInGroupImage.png';

import {
  APPLICATION_NAME,
  REFRESH_API_CACHE_DATA_INTERVAL,
  DEFAULT_SEARCH_QUERY,
} from '../settings/applicationOptions/index';

import { useStyles } from '../styles/pages/indexPageStyle';

function Home({ usersTotal, apiLastCacheMade }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>{APPLICATION_NAME}</title>
      </Head>
      <PageNavbar value={0} />
      <Box className={classes.box}>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <Box className={classes.textBox}>
                <div>
                  <Typography className={classes.typographyBoxText}>
                    <span>{formatNumberWithDots(usersTotal)}</span> cidadãos se
                    cadastraram no portal e-Democracia da Câmara dos Deputados.*
                  </Typography>
                  <Box style={{ marginTop: '20px' }}>
                    <Typography className={classes.typographyBoxText}>
                      Conheça os números de{' '}
                      <span>participação pelos cidadãos.</span>
                    </Typography>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  className={classes.initialPageBannerImg}
                  src={bannerInitialPage}
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                className={classes.lineBox}
                display="flex"
                alignItems="center"
                height="100%"
              >
                <Box className={classes.typographyBox} height="100%">
                  <Typography
                    className={`${classes.typography} ${classes.typographyCaption}`}
                  >
                    * Dados consolidados até {apiLastCacheMade}
                  </Typography>
                </Box>
                <Box
                  height="100%"
                  width="65%"
                  display="flex"
                  align="flex-start"
                  flexDirection="row-reverse"
                >
                  <Box className={classes.lineDividerGradientColor} />
                </Box>
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
      <Box className={classes.footerBox}>
        <Footer />
      </Box>
    </div>
  );
}

export async function getStaticProps() {
  async function getData() {
    const url = `${process.env.NEXT_PUBLIC_EDEMOCRACIA_REPORT_RANKING_USERS_URL}${DEFAULT_SEARCH_QUERY}`;

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
      apiLastCacheMade: format(subDays(new Date(), 1), ' dd/LL/yyyy', {
        locale: ptBR,
      }),
    },
    revalidate: REFRESH_API_CACHE_DATA_INTERVAL,
  };
}

export default Home;
