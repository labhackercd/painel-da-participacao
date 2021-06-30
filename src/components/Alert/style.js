/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  gridItem: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    background: theme.palette.alert.background,
    color: 'black',
    '@media (max-width: 600px)': {
      width: '90%',
    },
    width: '50%',
    height: '4rem',
  },
  iconBox: {
    width: '10%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    height: '100%',
    width: '80%',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '10px',
  },
  textTypography: {
    fontFamily: 'Open Sans',
    fontSize: '0.813rem',
    fontWeight: 600,
  },
  spinnerBox: {
    height: '100%',
    width: '10%',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
