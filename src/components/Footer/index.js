/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Typography, Box,
} from '@material-ui/core';
import { useStyles } from './style';
import logoCamaraDosDeputados from '../../assets/images/logos/logo_cd.svg';

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
              src={logoCamaraDosDeputados}
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
