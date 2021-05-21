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
          fontStyle: 'semibold',
        },
        h1: {
          fontSize: 54,
          fontStyle: 'semibold',
        },
        h2: {
          fontSize: 36,
          fontStyle: 'semibold',
        },
        h3: {
          fontSize: 26,
          fontStyle: 'semibold',
        },
        h4: {
          fontSize: 16,
          fontStyle: 'semibold',
        },
        h5: {
          fontSize: 14,
          fontStyle: 'semibold',
        },
        h6: {
          fontSize: 13,
          fontStyle: 'semibold',
        },
        h7: {
          fontSize: 9,
          fontStyle: 'regular',
        },
        body1: {
          fontSize: 12,
          fontStyle: 'regular',
        },
        body2: {
          fontSize: 9,
          fontStyle: 'semibold',
        },
      },
      palette: {
        primary: {
          main: '#2e2e2e',
        },
        secondary: {
          main: '#00C354',
        },
        black: {
          main: '#212121',
          secondary: '#252525',
        },
        white: {
          main: '#FFF',
        },
        gray: {
          tundora: '#404040',
          dusty: '#979797',
          silver: '#C4C4C4',
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
        text: {
          primary: '#FFFFFF',
        },
        blue: {
          cyan: '#2BE6FF',
        },
        audiencias: {
          toolTip: '#DA7F0B',
          butteredRum: '#9E5E0D',
          anzac: '#E1A04E',
          divider: '#DA7F0B',
          seabuckthorn: '#F59D2A',
        },
        wikilegis: {
          salem: '#058D40',
          jade: '#00C354',
          camarone: '#00612A',
        },
        alert: {
          background: '#F5632A',
        },
      },
    },
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

MockTheme.defaultProps = {
  children: React.createElement('div'),
};

MockTheme.propTypes = {
  children: PropTypes.node,
};
