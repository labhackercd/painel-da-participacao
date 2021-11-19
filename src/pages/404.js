/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Layout from '../layouts/index';

import { useStyles } from '../styles/pages/errorsPageStyle';
import error404Image from '../assets/images/404Page/banner.svg';

import { APPLICATION_NAME } from '../settings/applicationOptions/index';

function Custom404() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>{ `Erro 404 | ${APPLICATION_NAME}`}</title>
      </Head>
      <Layout>
        <Box className={classes.boxContent}>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Box width="100%" display="flex" flexDirection="column">
                <Box width="90%" className={classes.textBox}>
                  <Typography variant="h1" className={classes.typography}>
                    <span>404</span>
                    . Página não encontrada.
                  </Typography>
                </Box>
                <div className={classes.lineDividerGradientColor} />
                <Box width="100%" className={classes.textBox}>
                  <Typography variant="h2" className={classes.typography}>
                    O URL buscado não foi encontrado
                    nesse servidor.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className={classes.imgBox}>
                <img src={error404Image} alt="Imagem Representativa de erro" className={classes.bannerImg} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </div>
  );
}

export default Custom404;
