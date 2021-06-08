/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PageNavbar from '../layouts/navbar';
import Footer from '../components/Footer/index';

import error500Image from '../assets/images/informations/500_image.png';
import { useStyles } from '../styles/pages/500PageStyle';

function Custom500() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Painel da Participação Erro 500</title>
      </Head>
      <Box className={classes.box}>
        <Box className={classes.boxHeader}>
          <PageNavbar value={null} />
        </Box>
        <Box className={classes.boxContent}>
          <Box className={classes.textBox}>
            <Typography className={classes.typographyTitle} align="center">
              {'<Erro 500 />'}
            </Typography>
            <Typography className={classes.typographySubTitle} align="center">
              Servidor fora do ar
            </Typography>
            <Typography className={classes.typographyInfoText} align="center">
              Por favor tente novamente mais tarde
            </Typography>
          </Box>
          <Box>
            <img
              src={error500Image}
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

export default Custom500;
