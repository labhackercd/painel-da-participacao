/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
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
  },
  container: {
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '40px',
    padding: '0px 0px 0px 16px',

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
  textBoxMargin: {},
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typograhyTitle: {
    width: '85%',
    fontSize: '20px',
    fontWeight: 'bold',
    paddingBottom: '10px',
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
    paddingTop: '8px',

    [theme.breakpoints.up('sm')]: {
      ffontSize: '16px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '20px',
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
    paddingBottom: '32px',
    paddingTop: '32px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      paddingBottom: '48px',
      paddingTop: '48px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '25px',
    },
  },
  typographyParagraph: {
    fontSize: '16px',
    paddingBottom: '32px',

    [theme.breakpoints.up('sm')]: {
      padding: '0px 0px 48px 0px',
    },
  },
  apisCards: {
    '@media (max-width: 1023px)': {
      padding: '0px 35px 0px 0px',
    },
    [theme.breakpoints.only('xs')]: {
      padding: '0px 16px 0px 0px',
    },
  },
  apiCard: {
    height: '367px',
    width: '100%',
    backgroundColor: '#363636',
    borderRadius: '8px',
    position: 'relative',
  },
  apiCardHead: {
    height: '25px',
    /* topo | direita | inferior | esquerda */
    borderRadius: '8px 8px 0 0',
  },
  apiCardBody: {
    height: '100%',
    marginLeft: '24px',
    marginRight: '24px',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '24px',
  },
  apiCardBodyTypographyTitle: {
    fontFamily: 'Open Sans',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '0.05rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },
  },
  apiCardBodyTypographyParagraph: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    letterSpacing: '0.1rem',
    paddingTop: '10px',
    color: '#BFBFBF',
    '@media (max-width: 1100px)': {
      fontSize: '0.8rem',
    },
  },
  apiCardText: {
    margin: '0px 5px 0px 5px',
  },
  apiCardButtons: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingBottom: '24px',
    position: 'absolute',
    bottom: 0,
    right: '24px',
  },
  cardsContainer: {
    '@media (max-width: 1023px)': {
      padding: '0px 35px 0px 0px',
    },
    [theme.breakpoints.only('xs')]: {
      padding: '0px 16px 0px 0px',
    },
  },
  anchorLink: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  headerContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '4rem',
      paddingRight: '4rem',
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '4rem',
      paddingRight: '4rem',
    },
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerImg: {
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  lineBox: {
    marginBottom: '20px',
    marginTop: '-1px',

    [theme.breakpoints.only('xs')]: {
      marginTop: '24px',
    },

    [theme.breakpoints.up('md')]: {
      marginBottom: '80px',
      marginTop: '-3px',
    },
  },
  lineDividerGradientColor: {
    marginTop: '0',
    paddingTop: '0',
    width: '65%',
    height: '2px',
    background:
      'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',
    [theme.breakpoints.up('sm')]: {
      height: '4px',
    },
  },
  initialPageBannerImg: {
    [theme.breakpoints.up('sm')]: {
      marginRight: '35px',
      marginTop: '10%',
      width: '207px',
      height: '180px',
    },
    '@media (min-width: 1025px)': {
      width: '242px',
      height: '240px',
      marginTop: '0%',
      marginRight: '0px',
    },
    [theme.breakpoints.only('xs')]: {
      display: 'none',
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
