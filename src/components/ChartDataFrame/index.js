import React from 'react';
import {
  Grid, Box, Typography, IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  box: {
    height: '3vh',
    borderRadius: '15px 15px 0 0',
    width: '100%',
  },
  container: {
    backgroundColor: '#000',
    borderRadius: '0 0 15px 15px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: theme.palette.white.main,
  },
  header: {
    padding: '0.1rem 1rem 0 0.5rem',
    height: '3vh',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    alignSelf: 'center',
    padding: '-0.2rem 1rem 0 0',
  },
  listViewIcon: {
    opacity: '0.5',
  },
  downloadIcon: {
    opacity: '0.5',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '2rem',
    padding: '0 0 0 2rem',
  },
}));

export default function ChartDataFrame(
  height, paddingRight, paddingLeft, title, download, children,
) {
  const classes = useStyles();

  /*
  function handleDownload() {
    console.log("handleDownload")
    console.log(props.export_data[0]);
  }

  function formatData() {
    return JSON.stringify(export_data)
  }
  */

  return (
    <Grid container className={classes.root} style={{ paddingRight, paddingLeft }}>
      <Box className={classes.box} color="#252525" bgcolor="#252525">
        <Grid container className={classes.header}>
          <Grid item md={10}>
            <Typography variant="h5" className={classes.text}>
              {title}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Grid container className={classes.iconContainer}>
              <Grid item md={1}>
                {download
                  ? (
                    <IconButton style={{ color: '#FFF' }} className={classes.downloadIcon}>
                      <CloudDownloadIcon />
                    </IconButton>
                  )
                  : ''}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <div className={classes.container} style={{ height }}>
        {children}
      </div>
    </Grid>
  );
}
