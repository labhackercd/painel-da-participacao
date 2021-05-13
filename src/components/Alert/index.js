/* eslint-disable import/prefer-default-export */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

export function AlertCachedData({ apiLastCacheMade }) {
  return (
    <Grid item xs={12}>
      <Alert severity="warning">
        <AlertTitle>Alerta</AlertTitle>
        Um erro ocorreu ao obter dados do servidor,
        <strong>estão sendo utilizados dados de cache referentes ao período total.</strong>
        Os dados são referentes ao dia
        {' '}
        {apiLastCacheMade}
      </Alert>
    </Grid>
  );
}
