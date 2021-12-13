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
  },
  contentBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  spacing: {},
  spacingContainer: {
    marginTop: theme.spacing(3),
  },
  divider: {
    height: '2px',
    borderColor: theme.palette.wikilegis.jade,
    background: theme.palette.wikilegis.jade,
    width: '87px',

    [theme.breakpoints.up('sm')]: {
      height: '4px',
      width: '105px',
    },
    '@media (min-width: 1025px)': {
      width: '367px',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  toolTipIcon: {
    color: theme.palette.wikilegis.jade,
  },
  typographyHeaderSection: {
    fontSize: '16px',
    paddingBottom: '16px',
    paddingTop: '16px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
      paddingTop: '24px',
      paddingBottom: '24px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '31px',
      paddingBottom: '48px',
      paddingTop: '48px',
    },
  },
  totalFrame: {
    padding: '0px 16px 0px 0px',

    [theme.breakpoints.up('sm')]: {
      padding: '0px 35px 0px 0px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 20px 0px 0px',
    },
  },
  totalFrameDesktop: {
    [theme.breakpoints.up('md')]: {
      padding: '0px 0px',
    },
  },
}));
