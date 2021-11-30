/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography, Button, makeStyles } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  box: {
    paddingBottom: '50px',
    marginTop: '140px',

    [theme.breakpoints.only('xs')]: {
      paddingBottom: '70px',
      marginTop: '51px',
    },
  },
  container: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px',

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
      width: '90%',
      flexDirection: 'row',
      display: 'flex',
      gap: '50px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '90%',
      flexDirection: 'row',
      display: 'flex',
      gap: '50px',
    },
  },
  firstContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',

    [theme.breakpoints.up('sm')]: {
      gap: '56px',
    },
    [theme.breakpoints.up('md')]: {
      gap: '58px',
    },
    [theme.breakpoints.up('lg')]: {
      gap: '58px',
    },
    [theme.breakpoints.up('xl')]: {
      gap: '58px',
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
      width: '100px',
      height: '100px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '157px',
      height: '157px',
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
      fontSize: '2.3rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.5rem',
    },
  },
  typographyDescription: {
    fontSize: '0.875rem',
    fontWeight: 'regular',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.25rem',
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
      fontSize: '1.4rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.875rem',
    },
  },
  buttonStyle: {
    height: '100%',
    width: '100%',
    color: theme.palette.black.main,
    textTransform: 'none',
    fontWeight: 700,
    padding: '8px 14px 8px 14px',

    [theme.breakpoints.only('xs')]: {
      width: '60%',
      height: '50%',
      padding: '5px 8px 5px 8px',
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
          <Box>
            <Typography
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
