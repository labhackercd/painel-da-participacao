/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

// const linearGradient = 'linear-gradient(90deg, rgba(228, 56, 180, 0.3) 0%, rgba(245, 157, 42, 0.3) 32.29%, rgba(17, 129, 233, 0.3) 63.54%, rgba(20, 215, 104, 0.3) 100%);';

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
  },
  box: {
    paddingTop: '5rem',
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    minHeight: '85vh',
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typographyCaption: {
    fontSize: '0.375rem',
    fontWeight: 'regular',
    paddingLeft: '1rem',

    '@media (min-width: 700px)': {
      fontSize: '0.75rem',
    },
    '@media (min-width: 1000px)': {
      fontSize: '1rem',
    },

    [theme.breakpoints.up('md')]: {
      paddingLeft: '8rem',
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
    [theme.breakpoints.up('md')]: {
      paddingLeft: '7rem',
    },
  },
  typographyBoxText: {
    display: 'inline',
    '& span': {
      fontWeight: 'bold',
    },
    fontSize: '1rem',
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('xl')]: {
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
    '@media (max-width: 400px)': {
      paddingTop: '10vh',
    },
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
    paddingBottom: '6rem',
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
