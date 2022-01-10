/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000',
    justifyContent: 'space-between',
    overflow: 'hidden',
    left: 0,
  },
  text: {
    color: theme.palette.white.main,
    alignItems: 'center',
    padding: '4px 8px 0px 16px',
  },
  info: {
    color: '#FFF',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
    paddingLeft: '16px',
  },
}));
