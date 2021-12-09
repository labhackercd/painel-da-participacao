/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: '80px',
    padding: '0px 50px 40px 70px',

    '@media (min-width: 1280px)': {
      padding: '0px 50px 40px 112px',
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0px 0px 73px 0px',
      marginTop: '51px',
    },
  },
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',

    [theme.breakpoints.up('sm')]: {
      width: '100%',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  firstContainer: {
    height: '100%',
    display: 'flex',
    gap: '16px',
    flexDirection: 'column',

    [theme.breakpoints.only('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    [theme.breakpoints.up('sm')]: {
      flex: 2,
      gap: '24px',
      flexDirection: 'row',
    },

    '@media (min-width: 1025px)': {
      gap: '80px',
    },
  },
  caroulselItemImg: {
    width: '72px',
    height: '72px',

    [theme.breakpoints.up('sm')]: {
      width: '80px',
      height: '80px',
    },
    '@media (min-width: 1025px)': {
      width: '96px',
      height: '96px',
    },
  },
  typographyBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
      justifyItems: 'start',
      alignItems: 'start',
    },

  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  typographyToolTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',

    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '39px',
    },
  },
  typographyDescription: {
    fontSize: '16px',
    fontWeight: 'regular',
    width: '80%',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      width: '100%',
    },
    '@media (min-width: 1025px)': {
      fontSize: '25px',
    },
  },
  typographyButton: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',

    '@media (min-width: 1025px)': {
      fontSize: '16px',
    },
  },
  buttonStyle: {
    height: '100%',
    width: '100%',
    color: theme.palette.black.main,
    textTransform: 'none',
    fontWeight: 700,
    padding: '8px 14px 8px 14px',
    borderRadius: '4px',
    transition: 'filter 0.2s',
    '&:hover': {
      filter: 'brightness(0.7)',
    },

    [theme.breakpoints.only('xs')]: {
      width: '60%',
      height: '50%',
      padding: '16px',
    },

    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },

  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
}));

export default function CarouselItem({ item }) {
  const classes = useStyles();

  return (
    <Box
      className={classes.box}
      width="100%"
      display="flex"
      padding="0"
      justifyContent="center"
    >
      <Box className={classes.container}>
        <Box className={classes.firstContainer}>
          <Box>
            <img src={item.img} alt="" className={classes.caroulselItemImg} />
          </Box>
          <Box className={classes.typographyBox}>
            <Typography
              width="100%"
              className={`${classes.typography} ${classes.typographyToolTitle}`}
              align="center"
            >
              {item.toolName}
            </Typography>
            <Typography
              className={`${classes.typography} ${classes.typographyDescription}`}
              align="center"
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.buttonContainer}>
          <Link href={item.toolPage} passHref>
            <Button
              style={{ backgroundColor: item.color }}
              className={classes.buttonStyle}
              variant="contained"
              color="primary"
            >
              <Typography
                className={`${classes.typography} ${classes.typographyButton}`}
                align="center"
              >
                {item.buttonText}
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
