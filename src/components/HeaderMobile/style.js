/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
  selectMobile: {
    fontWeight: 700,
    padding: '10px',
    border: '2px solid',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  selectMobileEnabled: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    borderColor: (props) => props.colors.borderColor,
  },
  selectMobileDisabled: {
    backgroundColor: theme.palette.gray.tundora,
    color: 'gray',
    borderColor: 'gray',
  },
}));
