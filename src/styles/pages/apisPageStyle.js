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
      padding: '0px 35px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 70px',
    },
    '@media (min-width: 1280px)': {
      padding: 0,
    },

    [theme.breakpoints.up('sm')]: {
      marginTop: '48px',
    },
    '@media (min-width: 1025px)': {
      marginTop: '80px',
    },
  },
  textBoxMargin: {
    margin: '1rem',
    // paddingRight: '2rem',

    // [theme.breakpoints.up('md')]: {
    //   paddingRight: '4rem',
    //   paddingLeft: '4rem',
    // },

    // [theme.breakpoints.up('xl')]: {
    //   paddingRight: '4rem',
    //   paddingLeft: '4rem',
    // },
  },
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
    // [theme.breakpoints.up('xl')]: {
    //   fontSize: '4rem',
    // },
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
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingBottom: '32px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.169rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.576rem',
    },
    // [theme.breakpoints.up('xl')]: {
    //   fontSize: '2.7rem',
    // },
  },
  typographyParagraph: {
    fontSize: '1rem',
    paddingBottom: '24px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.935rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.261rem',
    },
    // [theme.breakpoints.up('xl')]: {
    //   fontSize: '2rem',
    // },
  },
  apiCard: {
    height: '329px',
    width: '100%',
    backgroundColor: '#0D0D0D',
    borderRadius: '15px',
  },
  apiCardHead: {
    height: '25px',
    /* topo | direita | inferior | esquerda */
    borderRadius: '15px 15px 0 0',
  },
  apiCardBody: {
    height: '100%',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  apiCardBodyTypographyTitle: {
    fontFamily: 'Open Sans',
    fontSize: '1.563rem',
    letterSpacing: '0.05rem',
    '@media (max-width: 1100px)': {
      fontSize: '1.2rem',
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
    paddingBottom: '15px',
  },
  cardsContainer: {
    paddingTop: '20px',
    paddingBottom: '20px',
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
    // width: '100%',
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // padding: '0px 16px',

    // [theme.breakpoints.up('sm')]: {
    //   padding: '0px 35px',
    // },
    // [theme.breakpoints.up('md')]: {
    //   padding: '0px 70px',
    // },
    // '@media (min-width: 1280px)': {
    //   padding: 0,
    // },
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
      marginRight: '22px',
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
    paddingTop: '90px',

    [theme.breakpoints.up('md')]: {
      paddingTop: '120px',
    },
  },
}));
