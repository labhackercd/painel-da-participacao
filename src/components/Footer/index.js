/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography, Box,
} from '@material-ui/core';
import { footerItens } from './itens';

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
  bannerBoxLogos: {
    width: 'auto',
    height: '30px',

  },
  informationsDiv: {
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  informationItem: {
    margin: '30px',
    '@media (max-width: 900px)': {
      margin: '15px',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  informationItemTypographyTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: '0.7',
    },
  },
  informationItemTypographyText: {
    fontSize: '1rem',
    fontWeight: 'regular',
  },
  bottomInformations: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '10px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  function infoItem(props) {
    const { title, subItens } = props;
    return (
      <Box className={classes.informationItem}>
        <Typography className={`${classes.typography} ${classes.informationItemTypographyTitle}`}>{title}</Typography>
        {subItens.map((subItem) => (
          <Box display="flex">
            {(subItem.url !== '' && subItem.url !== undefined)
              ? (
                <a href={subItem.url} style={{ color: 'white', textDecoration: 'none' }}>
                  {' '}
                  <Typography className={`${classes.typography} ${classes.informationItemTypographyText}`}>{subItem.text}</Typography>
                </a>
              )
              : <Typography className={`${classes.typography} ${classes.informationItemTypographyText}`}>{subItem.text}</Typography>}
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <footer className={classes.root}>
      <Box className={classes.footerContainer}>
        <Box className={classes.bannerBox} style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Box>
            <img
              src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/logo/logo_cd.svg`}
              alt="Logotipo Câmara dos Deputados"
              className={classes.bannerBoxLogos}
            />
          </Box>
          <Box>
            <img
              src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/logo/logo_participa.svg`}
              alt="Logotipo da aplicação participa"
              className={classes.bannerBoxLogos}
            />
          </Box>
          <Box>
            <img
              src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/logo/logo_lab.svg`}
              alt="Logotipo da aplicação LABHacker"
              className={classes.bannerBoxLogos}
            />
          </Box>
        </Box>
        <Box className={classes.informationsDiv}>
          {footerItens.map((item) => infoItem(item))}
        </Box>
        <Box className={classes.bottomInformations}>
          <Typography>LABHacker Câmara dos Deputados Painel da Participação</Typography>
          <Typography>{`${currentYear} - Painel da Participação`}</Typography>
        </Box>
      </Box>

    </footer>
  );
}
