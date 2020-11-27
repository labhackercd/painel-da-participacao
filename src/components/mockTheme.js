import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import OpenSansSemiBold from './../fonts/OpenSans-SemiBold.ttf';

const openSansSemiBold = {
    fontFamily: 'OpenSans',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    src: `
      local('OpenSans'),
      local('OpenSans-SemiBold'),
      url(${OpenSansSemiBold}) format('ttf')
    `,
  };

export default function MockTheme({ children }: any) {
  const theme = createMuiTheme(
    {
    typography: {
      fontFamily: "OpenSans",
      body:{
        fontSize:12,
        fontStyle: 'semibold',
      },
      h1:{
        fontSize:54,
        fontStyle: 'semibold',
      },
      h2:{
        fontSize:36,
        fontStyle: 'semibold',
      },
      h3:{
        fontSize:26,
        fontStyle: 'semibold',
      },
      h4:{
        fontSize:16,
        fontStyle: 'semibold',
      },
      h5:{
        fontSize:14,
        fontStyle: 'semibold',
      },
      h6:{
        fontSize:13,
        fontStyle: 'semibold',
      },
      h7:{
        fontSize:9,
        fontStyle: 'regular',
      },
      body1:{
        fontSize:12,
        fontStyle: 'regular'
      },
      body2:{
        fontSize:9,
        fontStyle: 'semibold',
      }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [openSansSemiBold],
        },
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
        main: '#121212'
      },
      lightGrey: {
        main: '#979797',
      },
      mediumGrey: {
        main: '#252525',
      },
    },
  });
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
