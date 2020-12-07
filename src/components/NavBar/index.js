import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {AppBar, Tabs, Toolbar, Tab, Grid, IconButton} from '@material-ui/core';
import { ReactComponent as Logo }from './../../assets/logo.svg';
import { ReactComponent as LogoutIcon } from './../../assets/user_logout_icon.svg';
import DashboardInitial from './../DashboardInitial'
import LogoutMenu from '../LogoutMenu/index'


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
  menu:{
    "& .MuiPaper-root-16": {
      backgroundColor: theme.palette.mediumGrey.main,
    },
    '& div': {
      width: "14%"
    }
  },

}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function NavBar(props) {
  const classes = useStyles();
  const [logoutMenuOpen, setLogoutMenuOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState()

  const recordButtonPosition = (event) => {
    setAnchorEl(event.currentTarget);
    setLogoutMenuOpen(true);
  }
  const handleLogoutMenuClose = () => {
    setLogoutMenuOpen(false);
  };

  useEffect(() => {
    
  },[props.value]);

  return (
  
       <AppBar position="static">
        <Toolbar className={classes.root}>
           <Grid container>
              <Grid item md={2}>
                <div className={classes.logo}>
                  <IconButton><Logo/></IconButton>
                </div>
              </Grid>
              <Grid item md={9}>
              {props.value != undefined &&
                <Tabs value={props.value} onChange={props.handleTabPanelChange} TabIndicatorProps={{style: {background: '#00C354'}}} className={classes.tab}>
                  <CustomTab  label="Dashboard" {...a11yProps(0)} />
                  <CustomTab  label="Configurações" {...a11yProps(1)} />
                  <CustomTab  label="Documentação" {...a11yProps(2)} />
                </Tabs>
                }
              </Grid>
              <Grid item md={1}>
                <div className={classes.logout}>
                  <IconButton id="logoutMenu" onClick={(e) => { recordButtonPosition(e) }} aria-haspopup="true"><LogoutIcon /></IconButton>
                  <LogoutMenu open={logoutMenuOpen} handleClose={handleLogoutMenuClose} classes={classes} anchorEl={anchorEl}></LogoutMenu>
                </div>
              </Grid>
           </Grid>
        </Toolbar>
       </AppBar>
   );
}
