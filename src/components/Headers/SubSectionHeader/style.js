/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  typography: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '16px',
    marginBottom: '16px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      marginTop: '24px',
      marginBottom: '24px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '25px',
      marginTop: '48px',
      marginBottom: '48px',
    },
  },
}));
