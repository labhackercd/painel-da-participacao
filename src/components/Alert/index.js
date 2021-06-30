/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Box, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './style';

export function AlertCachedData({ apiLastCacheMade }) {
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      document.location.reload(true);
    }, 35000);
  }, []);

  return (
    <Grid item xs={12} className={classes.gridItem}>
      <Paper className={classes.paper}>
        <Box className={classes.iconBox}>
          <WarningIcon fontSize="large" style={{ color: '#212121' }} />
        </Box>
        <Box className={classes.textBox}>
          <Typography className={classes.textTypography}>
            Os dados exibidos são de cache referentes a
            {' '}
            {apiLastCacheMade}
            . Os dados mais recentes estão sendo obtidos e a página será atualizada automaticamente quando concluído.
          </Typography>
        </Box>
        <Box className={classes.spinnerBox}>
          <CircularProgress />
        </Box>
      </Paper>
    </Grid>
  );
}
