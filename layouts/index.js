import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link"
import { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  AppBar, Tabs, Toolbar, Tab, Grid, IconButton,
} from '@material-ui/core';
import NavBar from '../src/components/NavBar';
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

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
      <>{children}</>
      )}
    </div>
  );
}
/*
      <TabPanel id="tabTools" value={value} index={0}>
        <ToolContent page={props.page}> </ToolContent>
      </TabPanel>
*/

const CustomTab = withStyles({
  root: {
    textTransform: 'capitalize',
  },
})(Tab);

function LinkTab(props) {
  return (
    <Link href={{ pathname: props.url, query: { tab: props.index } }}>
      <Tab component="a" {...props}/>
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
      {/* <NavBar value={value} handleTabPanelChange={handleTabPanelChange} /> */}
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
                  <LinkTab label="Dashboard" url={process.env.NEXT_PUBLIC_TESTE_PAGE_URL} index="0" {...a11yProps(0)} />
                  <LinkTab label="Documentação" url={process.env.NEXT_PUBLIC_TESTE2_PAGE_URL} index="1" {...a11yProps(1)} />
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
/*
Layout.defaultProps = {
  children: React.createElement('div'),
  value: 0,
};
*/

Layout.propTypes = {
  value: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
