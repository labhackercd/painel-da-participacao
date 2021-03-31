/* eslint-disable react/prop-types */
import React from 'react';
import {
  Grid, Box, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { CSVLink } from 'react-csv';

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
    backgroundColor: '#252525',
  },
  container: {
    backgroundColor: '#000',
    borderRadius: '0 0 0 0',
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
    color: '#FFF',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '2rem',
    padding: '0 0 0 2rem',
  },
  updateLegend: {
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
  },
}));

export default function ChartDataFrame(props) {
  const classes = useStyles();

  const {
    // eslint-disable-next-line react/prop-types
    height, children, title, download, exportData, align, apiUrl, apiLastUpdate,
  } = props;

  return (
    <Grid container className={classes.root}>
      <Box className={classes.box}>
        <Box className={classes.header}>
          <Box marginLeft={2} flexGrow={1}>
            <Typography variant="h4" className={classes.text}>
              <Box fontWeight="fontWeightBold" display="flex" justifyContent={align}>
                {title}
              </Box>
            </Typography>
          </Box>
          <Box marginRight={2} alignSelf="center" marginTop={1}>
            {download && (exportData !== undefined && exportData !== null)
              ? (
                <CSVLink data={exportData} filename={`${title}.csv`} aria-label="Baixar arquivo CSV">
                  <CloudDownloadIcon className={classes.downloadIcon} />
                </CSVLink>
              )
              : ''}
          </Box>
        </Box>
      </Box>
      <div className={classes.container} style={{ height: 'auto', minHeight: height, width: '100%' }}>
        {children}
      </div>
      <Typography className={classes.updateLegend} variant="h5">
        <Box m={1}>
          {'Fonte: '}
          <a
            href={apiUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            API Audiências
          </a>

          {`  Atualizado em: ${apiLastUpdate}`}
        </Box>
      </Typography>
    </Grid>
  );
}
