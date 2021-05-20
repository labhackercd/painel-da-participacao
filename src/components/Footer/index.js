/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, Box,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    bottom: 0,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  bannerBox: {
    width: '100%',
    display: 'flex',
    height: '50px',
    background: ' linear-gradient(90deg, rgba(228, 56, 180, 0.3) 0%, rgba(245, 157, 42, 0.3) 32.29%, rgba(17, 129, 233, 0.3) 63.54%, rgba(20, 215, 104, 0.3) 100%);',
  },
  bannerBoxParticipaLogo: {
    width: '10%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '30vh',
  },
  informationsDiv: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  informationItem: {
    '@media (max-width: 900px)': {
      margin: '15px',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  informationItemTypographyText: {
    fontSize: '1rem',
    fontWeight: 'regular',
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box className={classes.footerContainer}>
        <Box className={classes.bannerBox} />
        <Box className={classes.informationsDiv}>
          <Box className={classes.informationItem}>
            {' '}
            <img
              src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/logo/logo_cd.svg`}
              alt="Logotipo Câmara dos Deputados"
              className={classes.bannerBoxLogos}
            />
          </Box>
          <Box className={classes.informationItem}>
            <Typography className={`${classes.typography} ${classes.informationItemTypographyText}`}>
              Painel da Participação
            </Typography>
          </Box>
          <Box className={classes.informationItem}>
            <Typography className={`${classes.typography} ${classes.informationItemTypographyText}`}>
              Versão 1.0 desenvolvida em 2021 pelo LABHacker da Câmara dos Deputados
            </Typography>
          </Box>
          <Box className={classes.informationItem}>
            <u>
              <Typography style={{ fontWeight: 'bold' }} className={`${classes.typography} ${classes.informationItemTypographyText}`}>Fale Conosco</Typography>
            </u>
            <Typography className={`${classes.typography} ${classes.informationItemTypographyText}`}>Disque-Câmara:</Typography>
            <Typography className={`${classes.typography} ${classes.informationItemTypographyText}`}>0800-0-619-619 de 8h às 20h</Typography>
          </Box>
        </Box>
      </Box>

    </footer>
  );
}
