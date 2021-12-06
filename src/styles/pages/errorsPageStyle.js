/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    // QHD/WQHD (2560×1440) QUADHD - 4K UHD (3840×2160) 4K ULTRA HD:
    '@media (min-width: 2300px)': {
      height: '100vh',
      width: '100vw',
    },
    backgroundColor: theme.palette.primary.main,
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
  },
  boxHeader: {
    flex: '0 1 auto',
  },
  boxContent: {
    flex: '1 1 auto',
    minHeight: '70vh',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '10vh',
    maxWidth: '1530px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textBox: {
    paddingLeft: '16px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '15%',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    paddingBottom: '32px',
    letterSpacing: '0.05em',
    '& span': {
      fontWeight: 'bold',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.75rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
    // [theme.breakpoints.up('xl')]: {
    //   paddingLeft: '1rem',
    //   fontSize: '3rem',
    // },
  },
  imgBox: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  bannerImg: {
    width: '80%',
    height: '230px',

    [theme.breakpoints.up('sm')]: {
      width: '450px',
      height: '350px',
    },
    [theme.breakpoints.only('md')]: {
      width: '450px',
      height: '350px',
    },
    [theme.breakpoints.only('lg')]: {
      width: '500px',
      height: '400px',
    },
    // [theme.breakpoints.up('xl')]: {
    //   width: '600px',
    //   height: '472px',
    // },
  },
  lineDividerGradientColor: {
    marginTop: '0',
    paddingTop: '0',
    width: '80%',
    height: '4px',
    marginBottom: '2rem',
    background:
      'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',
    [theme.breakpoints.up('xl')]: {
      marginBottom: '2rem',
    },
  },
}));
