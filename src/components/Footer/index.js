import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Grid, Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.black.main,
    height: '5rem',
    width: '100%',
    bottom: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.root}>
      <Grid container>
        <Grid item md={2} />
        <Grid item md={4}>
          <Typography id="footerLab" variant="h5"> LABHacker Câmara dos Deputados </Typography>
        </Grid>
        <Grid item md={4} />
        <Grid item md={2}>
          <Typography variant="h5">
            { `${currentYear} - Dashboard da Participação` }
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
