import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
  {
    typography: {
      h1: {
        fontSize: 47,
        fontStyle: 'semibold',
      },
      h2: {
        fontSize: 39,
        fontStyle: 'semibold',
      },
      h3: {
        fontSize: 25,
        fontStyle: 'semibold',
      },
      h4: {
        fontSize: 16,
        fontStyle: 'semibold',
      },
      h5: {
        fontSize: 13,
        fontStyle: 'semibold',
      },
      h6: {
        fontSize: 12,
        fontStyle: 'semibold',
      },
      h7: {
        fontSize: 9,
        fontStyle: 'regular',
      },
      body: {
        fontSize: 12,
        fontStyle: 'semibold',
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
      text: {
        primary: '#FFFFFF',
      },
      audiencias: {
        butteredRum: '#9E5E0D',
        anzac: '#E1A04E',
        divider: '#DA7F0B',
        seabuckthorn: '#F59D2A',
      },
      wikilegis: {
        salem: '#058D40',
        jade: '#00C354',
        camarone: '00612A',
      },
      generalPanel: {
        fountainBlue: '#669FC3',
      },
    },
  },
);

export default theme;
