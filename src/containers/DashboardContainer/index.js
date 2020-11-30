import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from "react-router";
import { Grid,Box, Container, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import NavBar from './../../components/NavBar';
import Footer from './../../components/Footer';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
  }
}));

export default function Dashboard() {
  const classes = useStyles();
    return (
      <div className={classes.body}>
        <NavBar></NavBar>
        <Footer></Footer>
      </div>
    )
}
