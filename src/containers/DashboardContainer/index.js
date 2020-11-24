import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from "react-router";
import { Box, Container, Typography } from '@material-ui/core';
import NavBar from './../../components/NavBar';
import Footer from './../../components/Footer';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.main,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.background.main,
  }
}));

export default function Dashboard() {
  const classes = useStyles();
    return (
      <div className={classes.body}>
        <NavBar></NavBar>
        <Container component="main" className={classes.main}>
        </Container>
        <footer className={classes.footer}>
          <Footer></Footer>
        </footer>
      </div>
    )
}
