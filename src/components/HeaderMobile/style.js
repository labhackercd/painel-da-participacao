/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'flex-end',
  },
  paper: {
    backgroundColor: '#363636',
    borderRadius: '15px 15px 0 0',
    color: 'white',
    margin: 0,
    maxWidth: '100%',
    width: '100%',
    '& .picker-container .picker-column .picker-item.picker-item-selected': {
      fontFamily: 'Open Sans',
      color: '#14D768',
      fontWeight: 700,
      fontSize: '14px',
    },
    '& .picker-container .picker-column .picker-item': {
      fontFamily: 'Open Sans',
      color: '#F0F0F0',
      fontSize: '14px',
    },
  },
  box: {
    background: '#14D768',
    borderRadius: '15px 15px 0 0',
    color: '#121212',
    height: '44px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  typhography: {
    color: '#121212',
    fontWeight: 700,
    fontFamily: 'Open Sans',
    padding: '13px',
    fontSize: '11px',
  },
}));
