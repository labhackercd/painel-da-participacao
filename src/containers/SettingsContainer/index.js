import React from 'react';
import { Grid} from '@material-ui/core';
import NavBar from './../../components/NavBar';
import SettingsSideBar from '../../components/SettingsPage/SideBar/index'
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.main,
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
  },
  containerBackup: {
    display: 'flex',
    flexGrow: 150,
  },
  container: {
    overflow: 'auto',
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.background.main,
  },
  content: {
    height: '80vh',
    overflow: 'auto',
    flexGrow: 1,
    padding: '2.5rem 0 0 0',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

export default function SettingsPage() {
  const classes = useStyles();
    return (
      <div className={classes.body}>
        
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <NavBar></NavBar>
            </Grid>
            <Grid item xs={3}>
                <SettingsSideBar></SettingsSideBar>
            </Grid>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={3}>

            </Grid>
        </Grid>

      </div>
    );
}