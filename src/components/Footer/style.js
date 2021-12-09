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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',

    padding: '16px 20px',

    [theme.breakpoints.up('sm')]: {
      padding: '32px 35px',
    },

    '@media (max-width: 1280px)': {
      padding: '20px 70px',
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
    '@media (min-width: 1024px)': {
      flex: 8,
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

    '@media (min-width: 1024px)': {
      flex: 20,
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
    fontSize: '8px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '10px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '13px',
    },
  },
}));
