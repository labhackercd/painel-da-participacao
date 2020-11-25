import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from "react-router";
import { Grid,Box, Container, Typography } from '@material-ui/core';
import NavBar from './../../components/NavBar';
import Footer from './../../components/Footer';
import HomeMenu from './../../components/HomeMenu';
import Header from './../../components/Header';
import { withStyles, makeStyles } from '@material-ui/core/styles';

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

export default function Dashboard() {
  const classes = useStyles();
    return (
      <div className={classes.body}>
        <NavBar></NavBar>
        <Grid container className={classes.root}>
          <HomeMenu></HomeMenu>
          <main className={classes.content}>
            <Container className={classes.container}>
              <Header></Header>
            </Container>
          </main>
        </Grid>
        <Footer className={classes.footer}></Footer>
      </div>
    )
}
