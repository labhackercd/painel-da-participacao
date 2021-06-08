/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  headerBox: {
    backgroundColor: theme.palette.primary.main,
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
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
  positionStats: {
    display: 'flex',
  },
  divider: {
    borderColor: theme.palette.wikilegis.jade,
  },
  appBarSpacer: theme.mixins.toolbar,
}));
