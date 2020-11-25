import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from "react-router";
import { Grid,Box, Container, Typography } from '@material-ui/core';
import NavBar from './../../components/NavBar';
import Footer from './../../components/Footer';
import HomeMenu from './../../components/HomeMenu';
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
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.background.main,
  },
  menuGrid: {
  },
  content: {
    backgroundColor: 'red',
    height: '100vh',
    overflow: 'auto',
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
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                  <Typography> teste </Typography>
                </Grid>
              </Grid>
            </Container>
          </main>
        </Grid>
        <Footer className={classes.footer}></Footer>
      </div>
    )
}
