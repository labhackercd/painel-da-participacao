import React from 'react';
import { Grid} from '@material-ui/core';
import NavBar from './../../components/NavBar';
import SettingsSideBar from '../../components/SettingsPage/SideBar/index'
import SettingsContent from '../../components/SettingsPage/Content/index'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.black.main,
  },
  root: {
    display: 'flex',
    maxHeight:'100%'
  },
  container: {
    width: '100%',
    display: 'flex',
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.background.main,
  },
  appBarSpacer: theme.mixins.toolbar,

}));

export default function SettingsPage() {
  const classes = useStyles();
    return (
      <div className={classes.body}>
        <AppBar position="static">
            <NavBar></NavBar>
        </AppBar>
        <Grid container className={classes.root}>
            <Grid item xs={3}>
                <SettingsSideBar></SettingsSideBar>
            </Grid>
            <Grid item xs={7} >
                <SettingsContent></SettingsContent>
            </Grid>
        </Grid>

      </div>
    );
}