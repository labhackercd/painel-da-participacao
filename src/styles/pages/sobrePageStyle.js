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
    maxWidth: '1530px',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    // [theme.breakpoints.up('xl')]: {
    //   fontSize: '4rem',
    // },
  },
  typographyTitleCaption: {
    fontSize: '0.563rem',
    textAlign: 'justify',
    paddingBottom: '25px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '0.688rem',
      paddingBottom: '2rem',
      paddingTop: '8px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      paddingBottom: '2rem',
      paddingTop: '8px',
    },
    // [theme.breakpoints.up('xl')]: {
    //   fontSize: '1.5rem',
    //   paddingBottom: '2rem',
    //   paddingTop: '16px',
    // },
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
    // [theme.breakpoints.up('xl')]: {
    //   fontSize: '2.813rem',
    // },
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
  typograhyH3: {
    fontSize: '1.3rem',
    fontWeight: '600',
    paddingTop: '0px',
    paddingBottom: '32px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },

    // [theme.breakpoints.up('xl')]: {
    //   fontSize: '2.1rem',
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
  toolSectionHeader: {
    display: 'flex',
    marginTop: '5vh',
    marginBottom: '50px',
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
    // [theme.breakpoints.up('xl')]: {
    //   fontSize: '3rem',
    // },
  },
  lineBox: {
    marginTop: '27px',
    marginBottom: '43px',

    [theme.breakpoints.up('md')]: {
      marginTop: '74px',
      marginBottom: '80px',
    },
  },
  lineDividerGradientColor: {
    marginTop: '1rem',
    width: '65%',
    height: '4px',
    background:
      'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',
    [theme.breakpoints.up('xl')]: {
      marginBottom: '2rem',
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
    paddingTop: '90px',

    [theme.breakpoints.up('md')]: {
      paddingTop: '120px',
    },
  },
}));
