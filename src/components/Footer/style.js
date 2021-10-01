/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
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
  bannerBoxParticipaLogo: {
    width: '10%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '30vh',
  },
  informationsDiv: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  informationItem: {
    '@media (max-width: 900px)': {
      margin: '15px',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  informationItemTypographyText: {
    fontSize: '1rem',
    fontWeight: 'regular',
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  },
}));
