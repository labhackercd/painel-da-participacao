import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoClass: {
    width: '140px',
    height: '35px',

    [theme.breakpoints.up('md')]: {
      width: '190px',
      height: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '250px',
      height: '60px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '300px',
      height: '60px',
    },
  },
}));

export default useStyles;
