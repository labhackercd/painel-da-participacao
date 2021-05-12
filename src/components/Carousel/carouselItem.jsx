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
  buttonStyle: {
    color: 'black',
    textTransform: 'none',
    fontWeight: 700,
    '@media (max-width: 600px)': {
      width: '90%',
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
        <svg width="157" height="157" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="78.5" cy="78.5" r="77" fill="#212121" stroke={item.color} strokeWidth="3" />
          <path d="M55 70H66.0769V106H55V70ZM55 52H66.0769V66.4H55V52ZM91.9231 91.6H103V106H91.9231V91.6ZM91.9231 80.8H103V88H91.9231V80.8ZM73.4615 80.8H84.5385V106H73.4615V80.8ZM73.4615 66.4H84.5385V77.2H73.4615V66.4Z" fill={item.color} />
        </svg>
      </Box>
      <Box>
        <Typography className={`${classes.typography} ${classes.typographyToolTitle}`} align="center">
          {item.toolName}
        </Typography>
      </Box>
      <Box width="60%" flexGrow={1} height="100%">
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
            {item.buttonText}
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
