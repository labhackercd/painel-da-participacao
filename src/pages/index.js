/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import axios from 'axios';
import {
  makeStyles, Grid, Typography, Hidden, Box,
} from '@material-ui/core';
import PageNavbar from '../layouts/navbar';
import Footer from '../components/Footer/index';
import Carousel from '../components/Carousel/index';
import formatNumberWithDots from '../utils/format/numbers/formatNumbersWithDots/formatNumberWithDots';
import logoParticipa from '../assets/images/logos/logo_participa.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    // QHD/WQHD (2560×1440) QUADHD - 4K UHD (3840×2160) 4K ULTRA HD
    '@media (min-width: 2300px)': {
      height: '100vh',
      width: '100vw',
    },
    backgroundColor: theme.palette.primary.main,
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    width: 'auto',
    backgroundColor: theme.palette.primary.main,
    height: '100%',
  },
  boxHeader: {

  },
  boxContent: {
    flex: '1 ',
    display: 'flex',
    flexFlow: 'column',
  },
  bannerBox: {
    width: '100%',
    display: 'flex',
    height: '250px',
    '@media (min-width: 2200px)': {
      height: '400px',
    },
    '@media (max-width: 600px)': {
      height: '200px',
    },
    background: ' linear-gradient(90deg, rgba(228, 56, 180, 0.3) 0%, rgba(245, 157, 42, 0.3) 32.29%, rgba(17, 129, 233, 0.3) 63.54%, rgba(20, 215, 104, 0.3) 100%);',
  },
  bannerBoxText: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    paddingLeft: '2vh',
    '@media (min-width: 1100px)': {
      paddingLeft: '10vh',
    },
  },
  bannerBoxParticipaLogo: {
    width: '10%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '40vh',
    '@media (max-width: 2200px)': {
      marginRight: '20vh',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typograhyTitle: {
    fontSize: '2.938rem',
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: '2rem',
    },
  },
  typographyCaption: {
    fontSize: '1.5rem',
    fontWeight: 'regular',
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
  textBox: {
    paddingLeft: '2vh',
    paddingTop: '3vh',
    '@media (min-width: 1100px)': {
      paddingLeft: '10vh',
    },
  },
  typographyBoxText: {
    fontFamily: 'Open Sans',
    fontSize: '2.4rem',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },
  typographyBoxTextTitle: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
    fontWeight: 'bold',
    fontSize: '2.938rem',
    '@media (max-width: 600px)': {
      fontSize: '1.4rem',
    },
  },
  typographyHighLightedText: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },
  typographyParagraphBox: {
    paddingTop: '50px',
    '@media (max-width: 960px)': {
      paddingTop: '10px',
    },
  },
  boxGridContainer: {
    flex: '1 ',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5vh',
    paddingBottom: '10vh',
  },
  gridContainer: {
    width: '100%',
    height: '100%',
  },
  caroulselBox: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 900px)': {
      paddingTop: '30px',
      paddingBottom: '20px',
    },
  },
  caroulselInsideBox: {
    width: '100%',
    '@media (min-width: 1300px)': {
      width: '70%',
    },
  },
  iconStyle: {
    color: 'white',
  },
}));

function Home({ usersTotal, apiLastCacheMade }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Dashboard Audiências</title>
      </Head>
      <Box className={classes.box}>
        <Box className={classes.boxHeader}>
          <PageNavbar value={0} />
        </Box>
        <Box className={classes.boxContent}>
          <Box className={classes.bannerBox}>
            <Box className={classes.bannerBoxText}>
              <Typography className={`${classes.typography} ${classes.typograhyTitle}`}>
                Painel da Participação
              </Typography>
            </Box>
            <Hidden mdDown>
              <Box className={classes.bannerBoxParticipaLogo}>
                <Image
                  src={logoParticipa}
                  alt="Logotipo do LABHacker"
                  width={700}
                  height={700}
                />
              </Box>
            </Hidden>
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
    revalidate: 43200, // Update data every 12 hour(43200 seconds)
  };
}

export default Home;
