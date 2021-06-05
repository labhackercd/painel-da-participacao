/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PageNavbar from '../../layouts/navbar';
import Footer from '../../components/Footer/index';

import { useStyles } from './style';
import error404Image from '../../assets/images/informations/404_image.png';

function Custom404() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Painel da Participação Erro 404</title>
      </Head>
      <Box className={classes.box}>
        <Box className={classes.boxHeader}>
          <PageNavbar value={null} />
        </Box>
        <Box className={classes.boxContent}>
          <Box className={classes.textBox}>
            <Typography className={classes.typographyTitle} align="center">
              {'<Erro 404 />'}
            </Typography>
            <Typography className={classes.typographySubTitle} align="center">
              Página não encontrada
            </Typography>
            <Typography className={classes.typographyInfoText} align="center">
              A URL informada não existe
            </Typography>
          </Box>
          <Box>
            <img
              src={error404Image}
              alt=""
              width="700px"
              height="500px"
            />
          </Box>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </div>
  );
}

export default Custom404;
