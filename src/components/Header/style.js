/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  inputOptions: {
    display: 'flex',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  filterButton: {
    backgroundColor: (props) => props.colors.button.main,
    '&:hover': {
      backgroundColor: (props) => props.colors.button.hover,
    },
    color: '#212121',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },

  formControl: {
    marginRight: '20px',
  },
  select: {
    padding: '5px 13px 5px 6px',
    color: theme.palette.white.main,
    '&:not([multiple]) option': {
      backgroundColor: '#404040',
    },
    '&.Mui-disabled': {
      color: 'gray',
    },
  },
  inputBase: {
    position: 'relative',
    fontWeight: 'bold',

    backgroundColor: '#404040',
    padding: '5px 13px 5px 6px',
    border: '2px solid',
    borderColor: (props) => props.colors.borderColor,
    borderRadius: 6,
    '&:focus': {
      borderRadius: 4,
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: '#404040',
    },
    '&.Mui-disabled': {
      borderColor: 'gray',
    },
  },
  icon: {
    fill: 'white',
  },
  iconDisabled: {
    fill: 'gray',
  },

}));
