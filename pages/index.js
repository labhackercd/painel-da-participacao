import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
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
    fontSize: '2.4em',
  },
  typographyNumberBoxText: {
    fontSize: '2.4em',
    color: 'blue',
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
    display: 'flex',
    justifyContent: 'left',
    paddingBottom: '9vh',
    marginLeft: '3rem',
    '@media (max-width: 1100px)': {
      paddingTop: '2vh',
    },
  },
}));

function Home() {
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
                  <Typography variant="h1" gutterBottom>
                    PAINEL DA PARTICIPAÇÃO
                  </Typography>
                </Box>
                <Typography variant="body1" gutterBottom className={classes.typographyBoxText}>
                  XXX cidadãos se cadastraram no portal e-Democracia da
                  Câmara dos Deputados no período de XXXXX.
                </Typography>
                <Box paddingTop="50px">
                  <Typography className={classes.typographyBoxText}>
                    Conheça os números de utilização das  ferramentas de participação
                    pelos cidadãos.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box height="100%" display="flex">
                <Box width="50%" height="100%" className={classes.audienciasSection} display="flex" flexDirection="column" justifyContent="center">
                  <Box className={classes.toolSectionHeader}>
                    <Typography variant="h4">
                      Audiências Interativas
                      <br />
                      {' '}
                      Perguntas aos parlamentares
                    </Typography>
                    <Typography />
                  </Box>
                  <Box display="flex" flexDirection="row-reverse">
                    <img
                      className={classes.chartImages}
                      src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/initialPage/audiencias_chart_frame.png`}
                      alt="Audiencias Chart"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" className={classes.buttonContainer}>
                    <Button
                      style={{ backgroundColor: '#F59D2A' }}
                      className={classes.buttonStyle}
                      variant="contained"
                      color="primary"
                      endIcon={<BarChartIcon />}
                    >
                      Participação nas Audiências
                    </Button>
                  </Box>
                </Box>

                <Box width="50%" className={classes.wikilegisSection} display="flex" flexDirection="column" justifyContent="center">
                  <Box className={classes.toolSectionHeader}>
                    <Typography variant="h4">
                      Wikilegis
                      <br />
                      {' '}
                      Opiniões em textos de propostas legislativas
                    </Typography>
                    <Typography />
                  </Box>
                  <Box display="flex" justifyContent="left">
                    <img
                      className={classes.chartImages}
                      src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/initialPage/wikilegis_chart_frame.png`}
                      alt="Wikilegis Chart"
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" className={classes.buttonContainer}>
                    <Button
                      style={{ backgroundColor: '#14D768' }}
                      className={classes.buttonStyle}
                      variant="contained"
                      color="primary"
                      endIcon={<BarChartIcon />}
                    >
                      Participação na Wikilegis
                    </Button>
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

export default Home;
