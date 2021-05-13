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
        <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="54" cy="54" r="52.5" fill="#212121" stroke={item.color} strokeWidth="3" />
          <path d="M37.832 48.1529H45.4518V72.9172H37.832V48.1529ZM37.832 35.7708H45.4518V45.6765H37.832V35.7708ZM63.2313 63.0115H70.8511V72.9172H63.2313V63.0115ZM63.2313 55.5822H70.8511V60.5351H63.2313V55.5822ZM50.5317 55.5822H58.1515V72.9172H50.5317V55.5822ZM50.5317 45.6765H58.1515V53.1058H50.5317V45.6765Z" fill={item.color} />
        </svg>

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
