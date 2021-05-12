/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
// import PropTypes from 'prop-types';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import BarChartIcon from '@material-ui/icons/BarChart';
import Carousel from 'react-elastic-carousel';

import Box from '@material-ui/core/Box';
// import Layout from '../layouts/index';
import PageNavbar from '../layouts/navbar';
// import Footer from '../components/Footer/index';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
  },
  boxHeader: {
    flex: '0 1 auto',
  },
  boxContent: {
    flex: '1 1 auto',
    width: 'auto',
    height: '100%',
    marginTop: '5vh',
  },
  bannerBox: {
    width: '100%',
    display: 'flex',
    height: '280px',
    '@media (max-width: 600px)': {
      height: '250px',
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
  },
  typographyBoxTextTitle: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
    fontWeight: 'bold',
    fontSize: '2.938rem',
  },
  typographyHighLightedText: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
  },
  gridContainer: {
    width: '100%',
    height: 'auto',
  },
  caroulselBox: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      marginTop: '10vh',
    },
  },
}));

function Home({ usersTotal }) {
  const classes = useStyles();

  const carouselItens = [
    {
      id: 1, toolName: 'Wikilegis', description: 'Opiniões em textos de propostas legislativas', color: '#14D768',
    },
    {
      id: 2, toolName: 'Audiências Interativas', description: 'Perguntas aos parlamentares', color: '#F59D2A',
    },
  ];

  const items = [
    { id: 1, title: 'item #1' },
    { id: 2, title: 'item #2' },
    { id: 3, title: 'item #3' },
    { id: 4, title: 'item #4' },
    { id: 5, title: 'item #5' },
  ];



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
                  src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/logo/logo_participa.svg`}
                  alt="Logotipo do LABHacker"
                  width={700}
                  height={700}
                />
              </Box>
            </Hidden>
          </Box>
          <Grid container classesName={classes.gridContainer}>
            <Grid item xs={12} md={5}>
              <Box className={classes.textBox}>
                <Typography className={classes.typographyHighLightedText} display="inline">
                  {usersTotal}
                </Typography>
                <Typography gutterBottom className={classes.typographyBoxText} display="inline">
                  {' '}
                  cidadãos se cadastraram no portal e-Democracia da Câmara dos Deputados
                  até hoje.
                </Typography>
                <Box paddingTop="50px">
                  <Typography className={classes.typographyBoxText} display="inline">
                    Conheça os números de utilização das
                  </Typography>
                  <Typography className={classes.typographyHighLightedText} display="inline">
                    {' '}
                    ferramentas de participação pelos cidadãos.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box className={classes.caroulselBox}>
                <Box width="50%">
                  <Carousel>
                    {items.map((item) => <div key={item.id}>{item.title}</div>)}
                  </Carousel>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* <Box>
          <Footer />
        </Box> */}
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
      return respData.sum_total_results;
    } catch (err) {
      return '-';
    }
  }

  const usersTotal = await getData();

  return {
    props: {
      usersTotal,
    },
    revalidate: 43200, // Update data every 12 hour(43200 seconds)
  };
}

export default Home;
