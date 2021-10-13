/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box, Typography, Button, makeStyles,
} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '@media (max-width: 800px)': {
      width: '95%',
    },
    '@media (max-width: 400px)': {
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
    },
  },
  firstContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
    },
  },
  caroulselItem: {
    maxWidth: '150px',
    maxHeight: '150px',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '640px',
      maxHeight: '64px',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
    textAlign: 'left',
  },
  typographyToolTitle: {
    fontSize: '2.438rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.2rem',
    },
  },
  typographyDescription: {
    fontSize: '1.625rem',
    fontWeight: 'regular',
    [theme.breakpoints.down('lg')]: {
      fontSize: '0.8rem',
    },
  },
  typographyButton: {
    fontSize: '1.5rem',
    fontWeight: 600,
    [theme.breakpoints.down('lg')]: {
      fontSize: '0.75rem',
    },

  },
  buttonStyle: {
    width: '340px',
    color: theme.palette.black.main,
    textTransform: 'none',
    fontWeight: 700,
    '@media (max-width: 1200px)': {
      maxWidth: '200px',
      height: '40px',
    },
    '@media (max-width: 400px)': {
      width: '100%',
      height: '40px',
    },
    transition: 'filter 0.2s',

    '&:hover': {
      filter: 'brightness(0.7)',
    },
  },
}));

export default function CarouselItem({ item }) {
  const classes = useStyles();

  return (
    <Box paddingBottom="50px" width="100%" display="flex" justifyContent="center">
      <Box className={classes.container}>
        <Box className={classes.firstContainer}>
          <Box maxWidth="20%">
            <img src={item.img} alt="" className={classes.caroulselItem} />
          </Box>
          <Box maxWidth="50%">
            <Typography className={`${classes.typography} ${classes.typographyToolTitle}`} align="center">
              {item.toolName}
            </Typography>
            <Typography className={`${classes.typography} ${classes.typographyDescription}`} align="center">
              {item.description}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Link
            href={item.toolPage}
            passHref
          >
            <Button
              style={{ backgroundColor: item.color }}
              className={classes.buttonStyle}
              variant="contained"
              color="primary"
            >
              <Typography className={`${classes.typography} ${classes.typographyButton}`} align="center">
                {item.buttonText}
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
