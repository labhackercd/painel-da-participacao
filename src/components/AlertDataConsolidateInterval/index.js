/* eslint-disable radix */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './style';
import { START_TIME_OF_DATA_CONSOLIDATION, END_TIME_OF_DATA_CONSOLIDATION } from '../../settings/applicationOptions/index';

export default function AlertDataConsolidateInterval() {
  const classes = useStyles();
  const [isInDataConsolidateInterval, setIsInDataConsolidateInterval] = useState(false);

  function checkIfHourIsInInterval() {
    const date = new Date();
    const currentTime = `${(date.getHours())}:${(date.getMinutes())}:00`;
    const regExp = /(\d{1,2}):(\d{1,2}):(\d{1,2})/;

    const isHourAfterBegginingOfConsolidation = parseInt(currentTime.replace(regExp, '$1$2$3')) > parseInt(START_TIME_OF_DATA_CONSOLIDATION.replace(regExp, '$1$2$3'));
    const isHourBeforeEndOfConsolidation = parseInt(END_TIME_OF_DATA_CONSOLIDATION.replace(regExp, '$1$2$3')) > parseInt(currentTime.replace(regExp, '$1$2$3'));

    if (isHourAfterBegginingOfConsolidation && isHourBeforeEndOfConsolidation) {
      setIsInDataConsolidateInterval(true);
    } else {
      setIsInDataConsolidateInterval(false);
    }
  }

  useEffect(() => {
    checkIfHourIsInInterval();
  });

  return (
    <>
      { (isInDataConsolidateInterval)
      && (
      <Grid item xs={12} className={classes.gridItem}>
        <Paper className={classes.paper}>
          <Box className={classes.iconBox}>
            <WarningIcon fontSize="large" style={{ color: '#212121' }} />
          </Box>
          <Box className={classes.textBox}>
            <Typography className={classes.textTypography}>
              ATENÇÃO: Consolidação de dados em andamento. Durante o processamento pode haver divergência ou inconsistência em alguns resultados. Previsão de conclusão:
              {' '}
              {END_TIME_OF_DATA_CONSOLIDATION}
              {' '}
              no horário de Brasília.
            </Typography>
          </Box>
        </Paper>
      </Grid>
      )}
    </>
  );
}
