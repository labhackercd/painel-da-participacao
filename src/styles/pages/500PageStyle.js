/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    // QHD/WQHD (2560×1440) QUADHD - 4K UHD (3840×2160) 4K ULTRA HD:
    '@media (min-width: 2300px)': {
      height: '100vh',
      width: '100vw',
    },
    backgroundColor: theme.palette.primary.main,
  },
  box: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
  },
  boxHeader: {
    flex: '0 1 auto',
  },
  boxContent: {
    flex: '1 1 auto',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10vh',
  },
  textBox: {
    paddingBottom: '20px',
  },
  typographyTitle: {
    fontFamily: 'Open Sans',
    fontSize: '3rem',
    letterSpacing: '0.05em',
    fontWeight: 'bold',
  },
  typographySubTitle: {
    fontFamily: 'Open Sans',
    fontSize: '2rem',
    letterSpacing: '0.05em',
    fontWeight: 'bold',
    margin: '10px',
  },
  typographyInfoText: {
    fontFamily: 'Open Sans',
    fontSize: '1.4rem',
    letterSpacing: '0.05em',
    color: '#E6E6E6',
  },
}));
