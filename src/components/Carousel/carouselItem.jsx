/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box, Typography, Button, makeStyles,
} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  firstContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
    },
  },
  caroulselItemImg: {
    width: '64px',
    height: '64px',
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
    textAlign: 'left',
  },
  typographyToolTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',

    [theme.breakpoints.up('md')]: {
      width: '210px',
      height: '60px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '240px',
      height: '70px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '270px',
      height: '80px',
    },
  },
  typographyDescription: {
    fontSize: '0.875rem',
    fontWeight: 'regular',

    [theme.breakpoints.up('md')]: {
      width: '210px',
      height: '60px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '240px',
      height: '70px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '270px',
      height: '80px',
    },
  },
  typographyButton: {
    fontSize: '1.5rem',
    fontWeight: 600,
    [theme.breakpoints.down('lg')]: {
      fontSize: '12px',
    },

  },
  buttonStyle: {
    height: '33px',
    width: '143px',
    color: theme.palette.black.main,
    textTransform: 'none',
    fontWeight: 700,
    padding: 0,

    [theme.breakpoints.up('md')]: {
      width: '210px',
      height: '60px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '240px',
      height: '70px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '270px',
      height: '80px',
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
          <Box>
            <img src={item.img} alt="" className={classes.caroulselItemImg} />
          </Box>
          <Box>
            <Typography className={`${classes.typography} ${classes.typographyToolTitle}`} align="center">
              {item.toolName}
            </Typography>
            <Typography className={`${classes.typography} ${classes.typographyDescription}`} align="center">
              {item.description}
            </Typography>
          </Box>
        </Box>
        <Box width="100%" display="flex" justifyContent="center">
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
