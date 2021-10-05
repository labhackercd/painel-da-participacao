/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

// const linearGradient = 'linear-gradient(90deg, rgba(228, 56, 180, 0.3) 0%, rgba(245, 157, 42, 0.3) 32.29%, rgba(17, 129, 233, 0.3) 63.54%, rgba(20, 215, 104, 0.3) 100%);';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    // QHD/WQHD (2560×1440) QUADHD - 4K UHD (3840×2160) 4K ULTRA HD
    '@media (min-width: 2300px)': {
      height: '100vh',
      width: '100vw',
    },
    backgroundColor: theme.palette.primary.main,
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    width: 'auto',
    height: '100%',
  },
  boxContent: {
    flex: '1 ',
    display: 'flex',
    flexFlow: 'column',
    marginRight: '5vw',
    marginLeft: '5vw',
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typographyCaption: {
    fontSize: '0.375rem',
    fontWeight: 'regular',
    paddingLeft: '20px',

    '@media (min-width: 700px)': {
      fontSize: '0.75rem',
    },
    '@media (min-width: 1100px)': {
      fontSize: '1rem',
    },
  },
  textBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem',
    '@media (max-width: 400px)': {
      padding: '0 1rem 0 1rem',
      margin: 0,
    },
  },
  typographyBoxText: {
    display: 'inline',
    '@media (max-width: 400px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 1100px)': {
      fontSize: '1.2rem',
    },
    '@media (min-width: 1100px)': {
      fontSize: '2.8rem',
    },
  },
  typographyHighLightedText: {
    fontWeight: 'bold',
    display: 'inline',
    '@media (max-width: 400px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 1100px)': {
      fontSize: '1.2rem',
    },
    '@media (min-width: 1100px)': {
      fontSize: '2.8rem',
    },
  },
  boxGridContainer: {
    flex: '1 ',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5vh',
    paddingBottom: '5vh',
  },
  gridContainer: {
    width: '100%',
    height: '100%',
  },
  caroulselBox: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10vh',
    paddingBottom: '20px',
  },
  caroulselInsideBox: {
    width: '90%',
  },
  initialPageBannerImg: {
    '@media (min-width: 1100px)': {
      width: '500px',
      height: '360px',
    },
    '@media (max-width: 1100px)': {
      width: '250px',
      height: '180px',
    },
    '@media (max-width: 500px)': {
      display: 'none',
    },
  },
  lineDividerGradientColor: {
    marginTop: 0,
    width: '65%',
    height: '2px',
    background: 'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',
  },
}));
