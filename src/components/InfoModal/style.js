/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',

    [theme.breakpoints.only('xs')]: {
      margin: '50% 16px 0px 16px',
    },

    [theme.breakpoints.up('sm')]: {
      margin: '50% 0px 0px 0px',
    },
  },
  modal: {
    minWidth: '100%',
    maxWidth: '425px',
    position: 'relative',
    fontSize: '12px',
    padding: '20px',
    backgroundColor: '#363636',
    zIndex: 10,
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('sm')]: {
      minWidth: '343px',
    },
  },
  titleModal: {
    color: theme.palette.white.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '24px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
    },
  },
  descriptionModal: {
    color: theme.palette.white.main,
    display: 'flex',
    fontSize: '13px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '24px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
  },
  iconClose: {
    width: '20px',
    height: '20px',

    [theme.breakpoints.up('sm')]: {
      width: '32px',
      height: '32px',
    },
  },
  close: {
    padding: 0,
    marginTop: '20px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'row-reverse',
    color: 'white',
    right: 0,
    top: 0,
    position: 'absolute',
    cursor: 'pointer',
  },
  info: {
    marginTop: '28px',
    marginBottom: '16px',
  },
  iconInfo: {
    width: '32px',
    height: '32px',
  },
}));
