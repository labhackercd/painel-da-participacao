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
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem',
  },
  box: {
    height: '4vh',
    borderRadius: '15px 15px 0 0',
    width: '100%',
    backgroundColor:'#252525',
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
    marginTop: '1vh',
  },
  header: {
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

export default function ChartDataFrame(props) {
  const classes = useStyles();
  const {paddingRight, paddingLeft, height, children, title, download } = props;

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
    <Grid container className={classes.root}>
      <Box className={classes.box}>
        <Grid container className={classes.header}>
          <Grid item xs={10}>
            <Typography variant="h5" className={classes.text}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {download
              ? (
                <IconButton style={{ color: '#FFF' }} className={classes.downloadIcon}>
                  <CloudDownloadIcon />
                </IconButton>
              )
              : ''}
          </Grid>
        </Grid>
      </Box>
      <div className={classes.container} style={{ height }}>
          {children}
      </div>
    </Grid>
  );
}
