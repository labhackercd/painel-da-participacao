import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {AppBar, Tabs, Toolbar, Tab, Grid, IconButton} from '@material-ui/core';
import { ReactComponent as Logo }from './../../assets/logo.svg';
import { ReactComponent as LogoutIcon } from './../../assets/user_logout_icon.svg';
import DashboardInitial from './../DashboardInitial'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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


const CustomTab = withStyles({
  root: {
    textTransform: 'capitalize',
  }
})(Tab);

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
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
   setValue(newValue);
 };

  return (
    <>
       <AppBar position="static">
        <Toolbar className={classes.root}>
           <Grid container>
              <Grid item md={2}>
                <div className={classes.logo}>
                  <IconButton>
                    <Logo />
                  </IconButton>
                </div>
              </Grid>
              <Grid item md={9}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{style: {background: '#00C354'}}}
                    className={classes.tab}>
                  <CustomTab id="tabs-1" label="Dashboard" {...a11yProps(0)} />
                  <CustomTab id="tabs-2" label="Configurações" {...a11yProps(1)} />
                  <CustomTab id="tabs-3" label="Documentação" {...a11yProps(2)} />
                </Tabs>
              </Grid>
              <Grid item md={1}>
                <div className={classes.logout}>
                  <IconButton >
                    <LogoutIcon />
                  </IconButton>
                </div>
              </Grid>
           </Grid>
        </Toolbar>
       </AppBar>
         <TabPanel value={value} index={0}>
            <DashboardInitial></DashboardInitial>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </>
   );
}
