import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Tabs, Toolbar, Tab, Grid, IconButton,
} from '@material-ui/core';
import Footer from '../src/components/Footer';

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
}));

function LinkTab(parans) {
  const classes = useStyles();
  const { url, ...props } = parans;

  return (
    <Link href={{ pathname: url }}>
      <Tab className={classes.tab} component="a" {...props} />
    </Link>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Layout(props) {
  const classes = useStyles();
  const { value, children } = props;

  return (
    <div className={classes.body}>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Grid container>
            <Grid item md={2}>
              <div className={classes.logo}>
                <IconButton>{/* <Logo /> */}</IconButton>
              </div>
            </Grid>
            <Grid item md={9}>
              {value !== undefined
                && (
                <Tabs value={value} TabIndicatorProps={{ style: { background: '#00C354' } }} className={classes.tab}>
                  <LinkTab label="Dashboard" url={process.env.NEXT_PUBLIC_DASHBOARD_PAGE_URL} index="0" {...a11yProps(0)} />
                  <LinkTab label="Documentação" url={process.env.NEXT_PUBLIC_DOCUMENTS_PAGE_URL} index="1" {...a11yProps(1)} />
                </Tabs>
                )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div>
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
