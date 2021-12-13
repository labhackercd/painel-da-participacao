/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
  },
  container: {
    width: 'auto',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },
  box: {
    display: 'flex',
    height: '100%',
    width: 'auto',
    flexFlow: 'column',
    backgroundColor: theme.palette.primary.main,
  },
  boxHeader: {
    flex: '0 1 auto',
  },
  boxContent: {
    flex: '1 1 auto',
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '40px',

    [theme.breakpoints.up('sm')]: {
      marginTop: '48px',
    },
    '@media (min-width: 1025px)': {
      marginTop: '80px',
    },
  },
  textBoxMargin: {
    padding: '0px 16px',
    [theme.breakpoints.up('sm')]: {
      padding: '0px 35px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 70px',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typograhyTitle: {
    width: '85%',
    fontSize: '20px',
    fontWeight: 'bold',
    paddingBottom: '16px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '39px',
    },
  },
  typographyTitleCaption: {
    fontSize: '13px',
    textAlign: 'justify',
    paddingBottom: '32px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
      paddingTop: '8px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '20px',
      paddingTop: '8px',
    },
  },
  typographyTitleText: {
    fontSize: '16px',
    fontWeight: 'regular',

    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '25px',
    },
  },
  typograhyH2: {
    fontSize: '16px',
    fontWeight: 'bold',
    paddingBottom: '16px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '25px',
    },
  },
  typograhyH3: {
    fontSize: '16px',
    fontWeight: '600',
    paddingTop: '0px',
    paddingBottom: '16px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  typographyParagraph: {
    fontSize: '16px',
    paddingBottom: '16px',
  },
  toolSectionHeader: {
    display: 'flex',
    marginTop: '5vh',
    marginBottom: '50px',
  },
  toolSectionTypograhyTitle: {
    fontSize: '16px',
    fontWeight: 'bold',

    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '31px',
    },
  },
  lineBox: {
    marginTop: '24px',
    marginBottom: '32px',

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
  criteriesSection: {
    paddingLeft: '2rem',

    [theme.breakpoints.up('md')]: {
      paddingLeft: '4rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '6rem',
    },
  },
  footerBox: {
    paddingTop: '32px',

    [theme.breakpoints.up('sm')]: {
      paddingTop: '48px',
    },
    '@media (min-width: 1025px)': {
      paddingTop: '80px',
    },
  },
}));
