/* eslint-disable no-await-in-loop */
import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import BarChartIcon from '@material-ui/icons/BarChart';
import Box from '@material-ui/core/Box';
// import Layout from '../layouts/index';
import PageNavbar from '../layouts/navbar';
// import Footer from '../src/components/Footer/index';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  container: {
    width: 'auto',
    height: '100%',
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
  },
  textBox: {
    margin: '10%',
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
    color: '#1181E9',
  },
  wikilegisSection: {
    background: 'linear-gradient(180deg, #14D768 -51.22%, rgba(20, 215, 104, 0) 100%)',
    float: 'left',
  },
  audienciasSection: {
    background: 'linear-gradient(180deg, #F59D2A -51.22%, rgba(245, 157, 42, 0) 100%)',
    height: '100%',
  },
  buttonStyle: {
    color: 'black',
    textTransform: 'none',
    fontWeight: 700,
    '@media (max-width: 600px)': {
      width: '90%',
    },
  },
  buttonContainer: {
    paddingTop: '15em',
    '@media (max-width: 1100px)': {
      paddingBottom: '5vh',
    },
  },
  chartImages: {
    '@media (max-width: 600px)': {
      maxWidth: '150px',
      maxHeight: '200px',
    },
  },
  toolSectionHeader: {
    paddingBottom: '9vh',
    marginLeft: '1rem',
    '@media (max-width: 1100px)': {
      paddingTop: '2vh',
    },
  },
  toolSectionHeaderTextTitle: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '2.438rem',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },
  toolSectionHeaderTextSubTitle: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    letterSpacing: '0.05em',
    fontSize: '1.2rem',
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
}));

function Home({ dados }) {
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
          <Grid container className={classes.container}>
            <Grid item xs={12} md={5}>
              <Box className={classes.textBox}>
                <Box paddingBottom="100px">
                  <Typography variant="h1" gutterBottom className={classes.typographyBoxTextTitle}>
                    PAINEL DA
                    {' '}
                    <br />
                    {' '}
                    PARTICIPAÇÃO
                  </Typography>
                </Box>
                <Typography className={classes.typographyHighLightedText} display="inline">
                  {dados.data.sum_total_results}
                </Typography>
                <Typography gutterBottom className={classes.typographyBoxText} display="inline">
                  {' '}
                  cidadãos se cadastraram no portal e-Democracia da Câmara dos Deputados
                  no período de
                </Typography>
                <Typography className={classes.typographyHighLightedText} display="inline">
                  {' '}
                  {`2016 à ${new Date().getFullYear()}`}
                </Typography>
                <Typography gutterBottom className={classes.typographyBoxText} display="inline">
                  .
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
              <Box height="100%" display="flex">
                <Box width="50%" height="100%" className={classes.audienciasSection} display="flex" flexDirection="column" justifyContent="center">
                  <Box className={classes.toolSectionHeader}>
                    <Typography variant="h2" className={classes.toolSectionHeaderTextTitle}>
                      Audiências Interativas
                    </Typography>
                    <Typography className={classes.toolSectionHeaderTextSubTitle}>
                      Perguntas aos parlamentares
                    </Typography>
                  </Box>
                  <Box display="flex" flexDirection="row-reverse">
                    <img
                      className={classes.chartImages}
                      src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/initialPage/audiencias_chart_frame.png`}
                      alt=""
                      role="presentation"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" className={classes.buttonContainer}>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_AUDIENCIAS_PAGE_URL}`}
                      passHref
                    >
                      <Button
                        style={{ backgroundColor: '#F59D2A' }}
                        className={classes.buttonStyle}
                        variant="contained"
                        color="primary"
                        endIcon={<BarChartIcon />}
                      >
                        Participação nas Audiências
                      </Button>
                    </Link>

                  </Box>
                </Box>

                <Box width="50%" className={classes.wikilegisSection} display="flex" flexDirection="column" justifyContent="center">
                  <Box className={classes.toolSectionHeader}>

                    <Typography variant="h2" className={classes.toolSectionHeaderTextTitle}>
                      Wikilegis
                      <br />
                      {' '}
                    </Typography>
                    <Typography className={classes.toolSectionHeaderTextSubTitle}>
                      Opiniões em textos de propostas legislativas
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="left">
                    <img
                      className={classes.chartImages}
                      src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/initialPage/wikilegis_chart_frame.png`}
                      alt=""
                      role="presentation"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" className={classes.buttonContainer}>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_WIKILEGIS_PAGE_URL}`}
                      passHref
                    >
                      <Button
                        style={{ backgroundColor: '#14D768' }}
                        className={classes.buttonStyle}
                        variant="contained"
                        color="primary"
                        endIcon={<BarChartIcon />}
                      >
                        Participação na Wikilegis
                      </Button>
                    </Link>
                  </Box>
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
  let dados = [];

  async function getData() {
    const results = [];
    const url = `${process.env.NEXT_PUBLIC_EDEMOCRACIA_REPORT_RANKING_USERS_URL}?period=yearly`;

    try {
      const resp = await axios.get(url);
      const respData = await resp.data;

      return { data: respData };
    } catch (err) {
      return [];
    }
  }

  dados = await getData();

  return {
    props: {
      dados,
    },
    revalidate: 600, // Update data every 10 minutes (600 seconds)
  };
}

export default Home;


//https://tes.edemocracia.camara.leg.br/reports/api/new-users/?period=yearly
