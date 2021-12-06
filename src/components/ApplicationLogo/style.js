import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoClass: {
    cursor: 'pointer',
    width: '140px',
    height: '35px',

    [theme.breakpoints.up('md')]: {
      width: '250px',
      height: '55px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '300px',
      height: '60px',
    },
  },
}));

export default useStyles;
