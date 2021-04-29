import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import BarChartIcon from '@material-ui/icons/BarChart';
import Box from '@material-ui/core/Box';
import Layout from '../layouts/index';

const useStyles = makeStyles((theme) => ({
  content: {
    height: '100em',
  },
  container: {
    width: 'auto',
    height: '100em',
  },
  backgroundImage: {
    width: '100%',
    height: '100em',
    backgroundImage: `url(${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/background/background_initial_page.svg)`,
    backgroundSize: 'contain',
  },
  wikilegisSection: {
    background: 'linear-gradient(180deg, #14D768 -51.22%, rgba(20, 215, 104, 0) 100%)',
    //backgroundImage: `url(${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/initialPage/frame_wikilegis.svg)`,
    //backgroundRepeat: 'no-repeat',
    float: 'left',
  },
  audienciasSection: {
    background: 'linear-gradient(180deg, #F59D2A -51.22%, rgba(245, 157, 42, 0) 100%)',
    height: '100%',
  },
  imgCenter: {
    width: '100px',
    height: '100px',
    backgroundColor: 'green',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    margin: 'auto',
  },
  infoContainer: {
    float: 'left',
    padding: 0,
    margin: '0 auto',
    position: 'relative',
  },
  buttonStyle: {
    color: 'black',
    fontWeight: 700,
    textTransform: 'none',
  },
  chartImages: {
    '@media (max-width: 600px)': {
      maxWidth: '150px',
      maxHeight: '200px',
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Dashboard Audiências</title>
      </Head>
      <Layout value={0}>
        <main className={classes.content}>
          <Grid container className={classes.container}>
            <Grid item xs={12} md={5} className={classes.gridItem}>
              <Typography variant="h1" gutterBottom>
                PAINEL DA PARTICIPAÇÃO
              </Typography>
              <Typography>
                XXX cidadãos se cadastraram no portal e-Democracia da Câmara dos Deputados no período de XXXXX.
              </Typography>
              <Typography>
                Conheça os números de utilização das  ferramentas de participação pelos cidadãos.
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box height="100em" display="flex">
                <Box width="50%" height="100%" className={classes.audienciasSection} display="flex" flexDirection="column" justifyContent="center">
                  <Box display="flex" justifyContent="left" paddingBottom="7rem" marginLeft="3rem">
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
                  <Box display="flex" justifyContent="center" paddingTop="15em">
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
                  <Box display="flex" height="auto" justifyContent="left" paddingBottom="7rem" marginLeft="3rem">
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
                  <Box display="flex" justifyContent="center" paddingTop="15em">
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
        </main>
      </Layout>
    </>
  );
}

export default Home;
