import React from 'react';
import { Grid,Box, Container, Typography } from '@material-ui/core';
import NavBar from './../NavBar';
import Footer from './../Footer';
import HomeMenu from './../HomeMenu';
import Header from './../Header';
import ContentBox from './../ContentBox';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    overflow: 'auto',
    flexGrow: 1,
    padding: '2.5rem 0 0 0',
  },
  spacing: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  appBarSpacer: theme.mixins.toolbar,
}));


export default function DashboardInitial() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <HomeMenu></HomeMenu>
      <main className={classes.content}>
        <Container className={classes.container}>
          <Header></Header>
          <Grid item md={12} className={classes.spacing}>
            <ContentBox height="30vh"
                        listView={true}
                        download={true}></ContentBox>
          </Grid>
          <Grid item md={12} className={classes.spacing}>
            <ContentBox height="20vh" listView={true} download={true}></ContentBox>
          </Grid>
          <Grid item md={12} className={classes.spacing}>
            <ContentBox height="60vh" listView={true} download={true}></ContentBox>
          </Grid>
          <Grid container>
            <Grid item md={6} className={classes.spacing}>
              <ContentBox height="30vh"
                          paddingRight="0.5rem"
                          listView={true}
                          download={true}></ContentBox>
            </Grid>
            <Grid item md={6} className={classes.spacing}>
              <ContentBox height="30vh"
                          paddingLeft="0.5rem"
                          listView={true}
                          download={true}></ContentBox>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Grid>
  )
}
