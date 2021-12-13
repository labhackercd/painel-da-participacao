/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    padding: '0px 16px 0px 0px',

    [theme.breakpoints.up('sm')]: {
      padding: '0px 35px 0px 0px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 0px',
    },
  },
  box: {
    height: '4vh',
    borderRadius: '15px 15px 0 0',
    width: '100%',
    backgroundColor: theme.palette.black.secondary,
  },
  container: {
    backgroundColor: '#000',
    borderRadius: '0 0 15px 15px',
    width: '100%',
  },
  text: {
    color: theme.palette.white.main,
    marginTop: '1vh',
  },
  header: {
    height: '3vh',
    display: 'flex',
    width: '100%',
  },
}));
