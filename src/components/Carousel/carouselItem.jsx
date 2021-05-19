/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box, Typography, Button, makeStyles,
} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typographyToolTitle: {
    fontSize: '2.438rem',
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: '1.4rem',
    },
  },
  typographyDescription: {
    fontSize: '1.625rem',
    fontWeight: 'regular',
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
  typographyButton: {
    fontSize: '1.5rem',
    fontWeight: 600,
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
    margin: 8,
  },
  buttonStyle: {
    color: '#212121',
    textTransform: 'none',
    fontWeight: 700,
    '@media (max-width: 600px)': {
      width: '90%',
      height: '60px',
    },
  },
  buttonContainer: {
    paddingTop: '15px',
  },
}));

export default function CarouselItem({ item }) {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" paddingBottom="50px">
      <Box>
        <img src={item.img} alt="" width="150px" height="150px" />
      </Box>
      <Box>
        <Typography className={`${classes.typography} ${classes.typographyToolTitle}`} align="center">
          {item.toolName}
        </Typography>
      </Box>
      <Box width="60%" height="100%">
        <Typography className={`${classes.typography} ${classes.typographyDescription}`} align="center">
          {item.description}
        </Typography>
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
  );
}
