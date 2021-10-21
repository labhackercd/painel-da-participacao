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
    [theme.breakpoints.up('xl')]: {
      paddingTop: '4rem',
    },
  },
  textBoxMargin: {
    margin: '1rem',
    paddingRight: '2rem',

    [theme.breakpoints.up('md')]: {
      paddingRight: '4rem',
      paddingLeft: '4rem',
    },
    [theme.breakpoints.up('xl')]: {
      paddingRight: '4rem',
      paddingLeft: '4rem',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typograhyTitle: {
    width: '85%',
    fontSize: '1.688rem',
    fontWeight: 'bold',
    paddingBottom: '10px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.125rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.625rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '4rem',
    },
  },
  typographyTitleCaption: {
    fontSize: '0.563rem',
    textAlign: 'justify',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.688rem',
      paddingBottom: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      paddingBottom: '2rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5rem',
      paddingBottom: '2rem',
    },
  },
  typographyTitleText: {
    fontSize: '1rem',
    fontWeight: 'regular',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.813rem',
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
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.7rem',
    },
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
    [theme.breakpoints.up('xl')]: {
      fontSize: '2rem',
    },
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
      fontSize: '1rem',
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
  },
  headerImg: {
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  lineDividerGradientColor: {
    marginTop: '0',
    paddingTop: '0',
    width: '65%',
    height: '2px',
    background: 'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',
    [theme.breakpoints.up('xl')]: {
      marginBottom: '2rem',
    },
  },
  imgClass: {
    [theme.breakpoints.up('sm')]: {
      width: '245px',
      height: '239px',
    },
    [theme.breakpoints.up('md')]: {
      width: '390px',
      height: '378px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '490px',
      height: '478px',
    },
  },
}));
