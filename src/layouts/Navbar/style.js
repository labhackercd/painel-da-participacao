import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.black.main,
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      padding: '0 0',
    },
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
  tabSelected: {
    '& span': {
      width: 'auto',
      background: 'linear-gradient(90deg, rgba(20, 215, 104, 0.5) 0%, rgba(17, 129, 233, 0.5) 32.81%, rgba(245, 157, 42, 0.5) 69.79%, rgba(228, 56, 180, 0.5) 100%)',
      paddingBottom: '5px',
      backgroundSize: '100% 5px',
      backgroundPosition: 'bottom 0 left 0,bottom 5px left 0',
      backgroundRepeat: 'no-repeat',
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
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  tabsClass: {
    [theme.breakpoints.down('md')]: {
      alignItems: 'baseline',
      '& .MuiTabs-flexContainer': {
        alignItems: 'baseline',
      },

      '& button': {
        display: 'flex',
        justifyContent: 'flex-start',
      },
      '& span': {
        width: 'auto',
      },

    },
  },
  indicatorClass: {
    color: 'transparent',
    height: '0px',
    [theme.breakpoints.down('md')]: {
      top: '300px',
      marginTop: '48px',
    },
  },
  logoPainelClass: {
    width: '106px',
    height: '32px',

    [theme.breakpoints.up('md')]: {
      width: '210px',
      height: '60px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '240px',
      height: '70px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '270px',
      height: '80px',
    },
  },
}));

export default useStyles;
