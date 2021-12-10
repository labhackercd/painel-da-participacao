/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
  },
  container: {
    [theme.breakpoints.up('md')]: {
      padding: '0px 70px',
    },
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '40px',

    [theme.breakpoints.up('sm')]: {
      marginTop: '48px',
    },
    '@media (max-width: 1025px)': {
      minHeight: '85vh',
    },
    '@media (min-width: 1025px)': {
      marginTop: '80px',
    },
  },
  lineBox: {
    [theme.breakpoints.only('xs')]: {
      marginTop: '24px',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typographyBox: {
    marginBottom: '2%',
    width: '35%',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '2%',
      width: '78%',
    },
  },
  typographyCaption: {
    fontSize: '8px',
    fontWeight: 'regular',
    paddingLeft: '35px',

    [theme.breakpoints.only('xs')]: {
      margin: 0,
      padding: '0 1rem 0 1rem',
      fontSize: '0.5rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '7rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '10px',
    },
  },
  textBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '35px',

    [theme.breakpoints.only('xs')]: {
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
    fontSize: '16px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '25px',
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
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  caroulselInsideBox: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  initialPageBannerImg: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '15%',
      width: '250px',
      height: '180px',
    },
    '@media (min-width: 1025px)': {
      width: '327px',
      height: '237px',
      marginTop: '5%',
    },
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  lineDividerGradientColor: {
    marginTop: 0,
    width: '100%',
    height: '2px',
    background:
      'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',

    [theme.breakpoints.up('sm')]: {
      height: '4px',
    },
  },
  footerBox: {
    paddingTop: '10px',

    '@media (min-width: 1025px)': {
      paddingTop: '120px',
    },
  },
}));
