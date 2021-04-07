import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Tabs, Toolbar, Tab, Grid, IconButton,
} from '@material-ui/core';
import Footer from '../src/components/Footer';
import PageNavbar from './navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.black.main,
    height: '5vh',
  },
  tab: {
    height: '92%',
    textTransform: 'capitalize',
    margin: '0.5rem 0 0 6rem',
  },
  menu: {
    '& .MuiPaper-root-16': {
      backgroundColor: theme.palette.mediumGrey.main,
    },
    '& div': {
      width: '14%',
    },
  },
  body: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    marginTop: '5vh',
  },
}));

function LinkTab(parans) {
  const classes = useStyles();
  const { url, ...props } = parans;

  return (
    <Link href={{ pathname: url }}>
      <Tab
        className={classes.tab}
        component="a"
        {...props}
      />
    </Link>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
  };
}

export default function Layout(props) {
  const classes = useStyles();
  const { value, children } = props;

  return (
    <div className={classes.body}>
      <PageNavbar value={value} />
      <div className={classes.container}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  value: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
