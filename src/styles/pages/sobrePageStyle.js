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
    [theme.breakpoints.up('xl')]: {
      paddingTop: '4rem',
    },
  },
  textBoxMargin: {
    margin: '1rem',
    paddingRight: '2rem',

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
      fontSize: '2.1rem',
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

    [theme.breakpoints.up('xl')]: {
      fontSize: '1.7rem',
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
      fontSize: '1.5rem',
    },
  },
  toolSectionHeader: {
    display: 'flex',
    marginTop: '5vh',
    marginBottom: '3vh',
  },
  toolSectionTypograhyTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3rem',
    },
  },
  lineDividerGradientColor: {
    marginTop: '1rem',
    width: '65%',
    height: '2px',
    background: 'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',
    [theme.breakpoints.up('xl')]: {
      marginBottom: '2rem',
    },
  },
  criteriesSection: {
    paddingLeft: '1rem',

    [theme.breakpoints.up('sm')]: {
      '& p': {
        paddingLeft: '2rem',
      },
    },

  },
}));
