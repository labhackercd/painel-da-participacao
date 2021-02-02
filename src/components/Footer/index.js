import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.black.main,
    height: '5vh',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Grid container>
          <Grid item md={2} />
          <Grid item md={4}>
            <Typography id="title"> Coordenação de Participação Popular da Câmara dos Deputados </Typography>
          </Grid>
          <Grid item md={4} />
          <Grid item md={2}>
            <Typography>2020 - Dashboard da Participação </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
