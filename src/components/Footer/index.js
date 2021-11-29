/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { useStyles } from './style';
import logoCamaraDosDeputados from '../../assets/images/logos/logo_cd.svg';

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box className={classes.footerContainer}>
        <Box className={classes.bannerBox} />
        <Box className={classes.informationsDiv}>
          <Box className={classes.informationItemLab}>
            <Typography
              className={`${classes.typography} ${classes.informationItemTypographyText}`}
            >
              Versão 1.0 - 2021
            </Typography>
            <Typography
              className={`${classes.typography} ${classes.informationItemTypographyText}`}
            >
              LABHacker
            </Typography>
          </Box>

          <Box className={classes.informationItemImg}>
            <img
              src={logoCamaraDosDeputados}
              alt="Logotipo Câmara dos Deputados"
              className={classes.bannerBoxLogos}
            />
          </Box>

          <Box className={classes.informationItem}>
            <a
              href={`${process.env.NEXT_PUBLIC_FALE_CONOSCO_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#F1EA67', textDecoration: 'none' }}
            >
              <Typography
                style={{ fontWeight: 'bold' }}
                className={`${classes.typography} ${classes.informationItemTypographyText}`}
              >
                Fale Conosco
              </Typography>
            </a>
            <Typography
              className={`${classes.typography} ${classes.informationItemTypographyText}`}
            >
              Disque-Câmara:
            </Typography>
            <Typography
              className={`${classes.typography} ${classes.informationItemTypographyText}`}
            >
              0800-0-619-619 de 8h às 20h
            </Typography>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
