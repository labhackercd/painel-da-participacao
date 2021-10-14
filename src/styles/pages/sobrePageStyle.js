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
  },
  textBoxMargin: {
    margin: '1rem',
    paddingRight: '2rem',
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typograhyTitle: {
    width: '85%',
    fontSize: '1.688rem',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.125rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.625rem',
    },
  },
  typographyTitleCaption: {
    fontSize: '0.563rem',
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'justify',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.688rem',
      paddingBottom: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.813rem',
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
  },
  typograhyH2: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingTop: '10px',
    paddingBottom: '10px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.169rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.576rem',
    },
  },
  typograhyH3: {
    fontSize: '1.3rem',
    fontWeight: '600',
    paddingTop: '5px',
    paddingBottom: '10px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
  typographyParagraph: {
    fontSize: '1rem',
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'justify',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.935rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.261rem',
    },
  },
  toolSectionHeader: {
    display: 'flex',
    marginTop: '5vh',
    marginBottom: '3vh',
  },
  lineDividerGradientColor: {
    marginTop: '1rem',
    width: '65%',
    height: '2px',
    background: 'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',
  },
}));
