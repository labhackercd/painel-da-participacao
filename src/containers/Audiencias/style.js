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
    borderColor: theme.palette.audiencias.divider,
    background: theme.palette.audiencias.divider,
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
    color: theme.palette.audiencias.toolTip,
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
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
  totalFrameDesktop: {
    [theme.breakpoints.up('md')]: {
      padding: '0px 0px',
    },
  },
  desktop: {
    display: 'none',

    '@media (min-width: 1025px)': {
      display: 'block',
    },
  },
  mobile: {
    display: 'block',

    '@media (min-width: 1025px)': {
      display: 'none',
    },
  },
  caroulselBox: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    padding: '2px 0px 16px 0px',

    [theme.breakpoints.up('sm')]: {
      padding: '0px 0px 19px 0px',
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  caroulselInsideBox: {
    width: '100%',
  },
}));
