/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  dot: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    opacity: 1,
    padding: '5px 5px 5px 5px',
    webkitBoxShadow: 'none',
    boxShadow: 'none',
    webkitTransition: 'background .5s',
    mozTransition: 'background .5s',
    transition: 'background .5s',
    padding: 0,
    margin: 0,
    marginRight: '12px',
    outline: 0,
    cursor: 'pointer',
  },
  dotActive: {
    background: '#FFFFFF',
  },
  dotInactive: {
    background: '#363636',
  },
  arrow: {
    position: 'absolute',
    top: '0px',
    bottom: '50px',
    zIndex: 1000,
    border: 0,
    background: 'none',
    opacity: 1,
    cursor: 'pointer',

    [theme.breakpoints.down('sm')]: {
      position: 'relative',
    },
  },
  arrowLeft: {
    left: 0,
  },
  arrowRight: {
    right: 0,
  },
}));
