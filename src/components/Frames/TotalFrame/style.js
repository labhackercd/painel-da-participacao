/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    padding: '0px 14px 0px 0px',

    [theme.breakpoints.up('md')]: {
      padding: '0px 20px 0px 0px',
    },
  },
  rootLast: {
    display: 'flex',
    width: '100%',
    padding: '0px 0px',
  },
  box: {
    height: 'auto',
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
    alignItems: 'center',
    padding: '9px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
}));
