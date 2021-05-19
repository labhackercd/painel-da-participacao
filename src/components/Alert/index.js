/* eslint-disable import/prefer-default-export */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  gridItem: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    background: '#F5632A',
    color: 'black',
    '@media (max-width: 600px)': {
      width: '90%',
    },
    width: '50%',
    height: '4rem',
  },
  iconBox: {
    width: '10%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    height: '100%',
    width: '80%',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '10px',
  },
  textTypography: {
    fontFamily: 'Open Sans',
    fontSize: '0.813rem',
    fontWeight: 600,
  },
}));

export function AlertCachedData({ apiLastCacheMade }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.gridItem}>
      <Paper className={classes.paper}>
        <Box className={classes.iconBox}>
          <WarningIcon fontSize="large" style={{ color: '#212121' }} />
        </Box>
        <Box className={classes.textBox}>
          <Typography className={classes.textTypography}>
            Erro ao tentar obter os dados solicitados. Os dados exibidos são de cache referentes a
            {' '}
            {apiLastCacheMade}
            .
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
