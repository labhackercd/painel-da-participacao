/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  boxHeader: {
    flex: '0 1 auto',
  },
  boxContent: {
    flex: '1 1 auto',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '10vh',
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0px 16px 0px 0px',

    [theme.breakpoints.up('sm')]: {
      padding: '0px 35px 0px 0px',
      marginTop: '48px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 70px',
    },
    '@media (min-width: 1025px)': {
      marginTop: '80px',
    },
  },
  textBox: {
    paddingLeft: '16px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '35px',
    },
    '@media (min-width: 1025px)': {
      paddingLeft: '75px',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: '16px',
    paddingBottom: '32px',
    letterSpacing: '0.05em',
    '& span': {
      fontWeight: 'bold',
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '25px',
    },
  },
  imgBox: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  bannerImg: {
    width: '265px',
    height: '180px',

    '@media (min-width: 1025px)': {
      width: '350px',
      height: '236px',
      marginTop: '32px',
    },
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
