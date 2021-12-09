/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  dot: {
    display: 'inline-block',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    opacity: 1,
    webkitBoxShadow: 'none',
    boxShadow: 'none',
    padding: 0,
    margin: 0,
    marginRight: '12px',
    outline: 0,
    cursor: 'pointer',

    [theme.breakpoints.up('sm')]: {
      width: '8px',
      height: '8px',
    },
  },
  dotActive: {
    background: '#FFFFFF',
  },
  dotInactive: {
    background: '#363636',
  },
  arrow: {
    position: 'absolute',
    top: '115px',
    zIndex: 1000,
    border: 0,
    background: 'none',
    opacity: 1,
    cursor: 'pointer',

    [theme.breakpoints.only('xs')]: {
      position: 'relative',
    },
  },
  arrowLeft: {
    left: -16,
  },
  arrowRight: {
    right: -16,
  },
}));
