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
    background: 'linear-gradient(90deg, rgba(20, 215, 104, 0.4) 0%, rgba(17, 129, 233, 0.4) 34.9%, rgba(245, 157, 42, 0.4) 67.71%, rgba(228, 56, 180, 0.4) 100%)',
  },
  bannerBoxLogos: {
    [theme.breakpoints.up('md')]: {
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
      alignItems: 'flex-start',
    },
  },
  informationItem: {
    width: '300px',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    '@media (max-width: 400px)': {
      width: '300px',
    },
  },
  informationItemImg: {
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  informationItemLab: {
    width: '300px',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    '@media (max-width: 400px)': {
      width: '200px',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  informationItemTypographyText: {
    fontSize: '1rem',
    fontWeight: 'regular',
    '@media (max-width: 400px)': {
      textAlign: 'center',
      fontSize: '0.5rem',
    },
  },
}));
