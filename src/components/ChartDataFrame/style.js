/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    padding: '0px 16px 0px 16px',

    [theme.breakpoints.up('sm')]: {
      padding: '0px 35px 0px 0px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 0px',
    },
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '15px 15px 0 0',
    width: '100%',
    backgroundColor: '#252525',
  },
  container: {
    backgroundColor: '#000',
    borderRadius: '0 0 0 0',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: theme.palette.white.main,
  },
  downloadCSV: {
    color: theme.palette.white.main,
    alignSelf: 'center',
    [theme.breakpoints.only('xs')]: {
      fontSize: '8px',
    },
  },
  downloadIcon: {
    marginLeft: '10px',
    color: theme.palette.white.main,
    alignSelf: 'center',

    [theme.breakpoints.only('xs')]: {
      marginLeft: '0px',
    },
  },
  header: {
    display: 'flex',
    width: '100%',
  },
  icon: {
    alignSelf: 'center',
    padding: '-0.2rem 1rem 0 0',
  },
  listViewIcon: {
    opacity: '0.5',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '2rem',
    padding: '0 0 0 2rem',
  },
  updateLegend: {
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
  },
  updateLegendText: {
    fontFamily: 'Open Sans',
    fontSize: '0.8rem',
    color: '#B9B9B9',
  },
  anchorTag: {
    color: '#F1EA67',
    textDecoration: 'none',
  },
}));
