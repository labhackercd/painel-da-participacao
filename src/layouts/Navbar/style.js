import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.black.main,
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      padding: '0 0',
    },
  },
  drawerContainer: {
    padding: '20px 60px',
  },
  drawerMobile: {
    background: '#252525',
    color: 'white',
  },
  divider: {
    background: 'white',
  },
  tab: {
    height: '92%',
    textTransform: 'capitalize',
    fontWeight: '600',
    margin: '0rem 0 0 0rem',
    fontSize: '1.2rem',

    [theme.breakpoints.only('lg')]: {
      fontSize: '1rem',
    },
  },
  toolbarContentMobile: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItens: 'center',
  },
  mobileLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desktopNavbarContent: {
    width: '100%',
    height: '10vh',
    padding: '5rem',
    display: 'flex',
    justifyContent: 'space-around',
  },
  camaraBar: {
    height: '5vh',
    width: '100%',
    backgroundColor: '#363636',
    padding: '0 0 0 5rem',
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
