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
  },
  drawerMobile: {
    background: 'black',
    color: 'white',
    width: '100%',
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
  mobileTabs: {
    [theme.breakpoints.down('md')]: {
      alignItems: 'baseline',

      '& .MuiTabs-flexContainer': {
        alignItems: 'baseline',
      },
      '& .MuiTabs-indicator': {
        left: '0px',
        width: '60%',
        maxHeight: '5px',
        top: '120px',
      },
    },
  },
  indicatorClass: {
    background: 'linear-gradient(90deg, rgba(20, 215, 104, 0.5) 0%, rgba(17, 129, 233, 0.5) 32.81%, rgba(245, 157, 42, 0.5) 69.79%, rgba(228, 56, 180, 0.5) 100%)',
    height: '5px',
    [theme.breakpoints.down('md')]: {
      top: '300px',
      marginTop: '48px',
    },
  },
}));

export default useStyles;
