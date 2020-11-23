import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {AppBar, Tabs, Tab, Typography, Box, Grid, IconButton} from '@material-ui/core';
import { ReactComponent as Logo }from './../../../assets/logo.svg';
import { ReactComponent as LogoutIcon } from './../../../assets/user_logout_icon.svg';

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
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
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    height: '100%',
    textTransform: 'capitalize',
  },
  logo: {
    marginLeft: theme.spacing(2),
  }
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
     <div className={classes.root}>
       <AppBar position="static">
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
              <CustomTab label="Dashboard" {...a11yProps(0)} />
              <CustomTab label="Configurações" {...a11yProps(1)} />
              <CustomTab label="Documentação" {...a11yProps(2)} />
            </Tabs>
          </Grid>
          <Grid item md={1}>
            <div className={classes.logout}>
              <IconButton>
                <LogoutIcon />
              </IconButton>
            </div>
          </Grid>
       </Grid>
       </AppBar>
     </div>
   );
}
