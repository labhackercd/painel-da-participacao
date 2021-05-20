/* eslint-disable import/prefer-default-export */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './style';

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
