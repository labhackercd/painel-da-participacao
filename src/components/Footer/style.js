/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    bottom: 0,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  bannerBox: {
    width: '100%',
    height: '8px',
    background:
      'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',
  },
  bannerBoxLogos: {
    width: '91px',
    height: '24px',

    [theme.breakpoints.up('sm')]: {
      width: '160px',
      height: '43px',
    },
    '@media (min-width: 1024px)': {
      display: 'none',
    },
  },
  informationsDiv: {
    padding: '1rem 5rem 1rem 5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media (max-width: 800px)': {
      padding: '1rem 1rem 1rem 1rem',
    },

    [theme.breakpoints.up('xl')]: {
      gap: '200px',
      maxWidth: '1280px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  informationItem: {
    width: '300px',
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    '@media (max-width: 400px)': {
      width: '300px',
    },
  },
  informationItemImg: {
    width: '300px',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  informationItemLab: {
    width: '300px',
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',

    '@media (max-width: 400px)': {
      width: '200px',
    },

    [theme.breakpoints.up('lg')]: {
      flex: 5,
    },
  },
  informationLabSm: {
    display: 'block',

    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  informationLabLg: {
    display: 'none',

    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  informationItemTypographyText: {
    fontWeight: 'regular',
    '@media (max-width: 400px)': {
      textAlign: 'center',
      fontSize: '0.5rem',
    },
  },
}));
