import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function MockTheme({ children }) {
  const theme = createMuiTheme(
    {
      typography: {
        body: {
          fontSize: 12,
        },
        h1: {
          fontSize: 54,
        },
        h2: {
          fontSize: 36,
        },
        h3: {
          fontSize: 26,
        },
        h4: {
          fontSize: 16,
        },
        h5: {
          fontSize: 14,
        },
        h6: {
          fontSize: 13,
        },
        h7: {
          fontSize: 9,
        },
        body1: {
          fontSize: 12,
        },
        body2: {
          fontSize: 9,
        },
      },
      palette: {
        primary: {
          main: '#121212',
        },
        secondary: {
          main: '#00C354',
        },
        black: {
          main: '#000',
        },
        white: {
          main: '#FFF',
        },
        background: {
          main: '#121212',
        },
        lightGrey: {
          main: '#979797',
        },
        mediumGrey: {
          main: '#252525',
        },
      },
    },
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
