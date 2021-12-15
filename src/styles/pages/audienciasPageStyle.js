/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/';

export const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0px 0px 0px 16px',
    marginTop: '40px',

    '@media (max-width: 1025px)': {
      overflowX: 'hidden !important',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0px 0px 0px 35px',
      marginTop: '48px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 70px',
    },
    '@media (min-width: 1025px)': {
      marginTop: '80px',
    },
  },
  boxTitle: {
    padding: '0px 16px 0px 0px',

    [theme.breakpoints.up('sm')]: {
      padding: '0px 35px 0px 0px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 0px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxWidth: '100%',
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typographyTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '16px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
      marginBottom: '24px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '39px',
    },
  },
  typographyDescription: {
    fontSize: '13px',
    color: '#FFFFFF',

    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '20px',
      width: '55%',
    },
  },
  lineBox: {
    marginTop: '24px',
    marginBottom: '24px',

    '@media (min-width: 1025px)': {
      marginTop: '32px',
      marginBottom: '48px',
    },
  },
  lineDividerGradientColor: {
    marginTop: '1rem',
    width: '65%',
    height: '2px',
    background:
      'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',

    [theme.breakpoints.up('sm')]: {
      height: '4px',
    },
  },
}));
