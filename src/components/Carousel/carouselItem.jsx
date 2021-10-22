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

    [theme.breakpoints.up('sm')]: {
      width: '90%',
      flexDirection: 'row',
      display: 'flex',
      gap: '50px',
    },
    [theme.breakpoints.up('md')]: {
      width: '90%',
      flexDirection: 'row',
      display: 'flex',
      gap: '50px',
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

    [theme.breakpoints.up('sm')]: {
      gap: '58px',
    },
    [theme.breakpoints.up('md')]: {
      gap: '58px',
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    },

  },
  caroulselItemImg: {
    width: '64px',
    height: '64px',

    [theme.breakpoints.up('sm')]: {
      width: '70px',
      height: '70px',
    },
    [theme.breakpoints.up('md')]: {
      width: '70px',
      height: '70px',
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
    textAlign: 'left',
  },
  typographyToolTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.75rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.75rem',
    },
    [theme.breakpoints.up('lg')]: {


    },
    [theme.breakpoints.up('xl')]: {
 
    },
  },
  typographyDescription: {
    fontSize: '0.875rem',
    fontWeight: 'regular',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.up('xl')]: {

    },
  },
  typographyButton: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9rem',
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
  buttonStyle: {
    height: '33px',
    width: '143px',
    color: theme.palette.black.main,
    textTransform: 'none',
    fontWeight: 700,
    padding: 0,

    [theme.breakpoints.up('sm')]: {
      height: 'auto',
      width: '153px',
      padding: '5px 8px 5px 8px',
    },
    [theme.breakpoints.up('md')]: {
      height: 'auto',
      width: '153px',
      padding: '5px 8px 5px 8px',
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
  buttonContainer: {
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
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
        <Box className={classes.buttonContainer}>
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
