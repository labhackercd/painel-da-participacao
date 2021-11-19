import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoClass: {
    width: '140px',
    height: '35px',

    [theme.breakpoints.up('md')]: {
      width: '190px',
      height: '55px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '250px',
      height: '80px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '300px',
      height: '75px',
    },
  },
}));

export default useStyles;
