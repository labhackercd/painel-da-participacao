import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoClass: {
    cursor: 'pointer',
    width: '161px',
    height: '34px',

    [theme.breakpoints.up('sm')]: {
      width: '250px',
      height: '55px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '270px',
      height: '56px',
    },
  },
}));

export default useStyles;
