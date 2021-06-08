/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from 'polished';

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
    backgroundColor: (props) => props.colors.borderColor,
    '&:hover': {
      backgroundColor: (props) => (lighten(0.2, props.colors.borderColor)),
    },
    color: theme.palette.black.primary,
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
      backgroundColor: theme.palette.gray.tundora,
    },
    '&.Mui-disabled': {
      color: 'gray',
    },
  },
  inputBase: {
    position: 'relative',
    fontWeight: 'bold',

    backgroundColor: theme.palette.gray.tundora,
    padding: '5px 13px 5px 6px',
    border: '2px solid',
    borderColor: (props) => props.colors.borderColor,
    borderRadius: 6,
    '&:focus': {
      borderRadius: 4,
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: theme.palette.gray.tundora,
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
