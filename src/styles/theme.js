import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
  {
    // Up to the values, default values in css are for mobile
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 600,
        desktopMd: 960,
        desktopLg: 1280,
        desktopXl: 1920,
      },
    },
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
        dataConsolidateBackground: '#9F8EF7',
      },
    },
  },
);

export default theme;
