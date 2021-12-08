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
    minWidth: '0',
    padding: '0px',
    marginLeft: '16px',
    fontSize: '16px',
    opacity: '1',

    '& button': {
      padding: '0px',
      paddingTop: '8px',
    },
    '.MuiTab-root': {
      minWidth: '0px',
    },

    '& span': {
      color: 'white',
    },

    [theme.breakpoints.up('sm')]: {
      marginLeft: '34px',
    },

    [theme.breakpoints.up('lg')]: {
      marginLeft: '56px',
      fontSize: '20px',
    },
  },
  tabSelected: {
    '& span': {
      width: 'auto',
      background:
        'linear-gradient(90deg, rgba(20, 215, 104, 0.5) 0%, rgba(17, 129, 233, 0.5) 32.81%, rgba(245, 157, 42, 0.5) 69.79%, rgba(228, 56, 180, 0.5) 100%)',
      padding: '8px 0px',
      backgroundSize: '100% 5px',
      backgroundPosition: 'bottom 0 left 0,bottom 0 left 0',
      backgroundRepeat: 'no-repeat',
    },
  },
  toolbarContentMobile: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItens: 'center',

  },

  toolbarContentMobileClose: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 4px 0px 16px',

    [theme.breakpoints.up('sm')]: {
      padding: '32px 23px 0px 35px',
    },
  },
  mobileLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMenu: {
    width: '32px',
    height: '32px',

    [theme.breakpoints.up('sm')]: {
      width: '48px',
      height: '48px',
    },
  },
  desktopNavbarContent: {
    width: '100%',
    height: '10vh',
    paddingTop: '5rem',
    paddingBottom: '5rem',
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
  },
  camaraBar: {
    height: '5vh',
    width: '100%',
    backgroundColor: '#363636',
    display: 'flex',
    alignItems: 'center',
    padding: '0 0 0 1.5rem',
    paddingTop: '5px',
    paddingBottom: '5px',

    [theme.breakpoints.up('lg')]: {
      height: '6vh',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 0 0 2.9rem',
    },
  },
  logoCamaraBar: {
    width: '100%',
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tabsClass: {
    marginTop: '36px',

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
    [theme.breakpoints.up('sm')]: {
      marginTop: '60px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '0px',
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
      width: '170px',
      height: '50px',
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
  logoCamaraDosDeputados: {
    [theme.breakpoints.up('md')]: {
      width: '170px',
      height: '50px',
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
