/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  content: {
    overflow: 'auto',
    flexGrow: 1,
    padding: '2.5rem 0 0 0',
  },
  contentBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  spacingContainer: {
    marginTop: theme.spacing(3),
  },
  divider: {
    borderColor: theme.palette.audiencias.divider,
  },
  appBarSpacer: theme.mixins.toolbar,
  toolTipIcon: {
    color: theme.palette.audiencias.toolTip,
  },
}));
