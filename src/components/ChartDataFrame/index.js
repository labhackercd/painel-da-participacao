/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
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
    height, children, title, download, exportData,
    align, apiUrl, apiLastUpdate, tool, downloadHeaders,
    section,
  } = props;
  let formatedData = exportData;

  // The CSVLink can't handle null objects so the function convert it
  if (tool === 'Wikilegis' && section === 'Report') {
    formatedData = exportData.map((data) => {
      if (data.document.document_type === null) {
        // eslint-disable-next-line no-param-reassign
        data.document.document_type = { id: '', title: '', initials: '' };
      }
      return data;
    });
  }

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
                <CSVLink headers={downloadHeaders} data={formatedData} filename={`${title}.csv`} aria-label="Baixar arquivo CSV" title="Baixar arquivo CSV">
                  <CloudDownloadIcon className={classes.downloadIcon} />
                </CSVLink>
              )
              : ''}
          </Box>
        </Box>
      </Box>
      <div className={classes.container} style={{ minHeight: height, width: '100%' }}>
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
            {`API ${tool}`}
          </a>

          {`  Atualizado em: ${apiLastUpdate}`}
        </Box>
      </Typography>
    </Grid>
  );
}

ChartDataFrame.propTypes = {
  height: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.string,
  download: PropTypes.bool,
  exportData: PropTypes.array,
  align: PropTypes.string,
  apiUrl: PropTypes.string,
  apiLastUpdate: PropTypes.string,
  tool: PropTypes.string,
  downloadHeaders: PropTypes.array,
  section: PropTypes.string,
};

ChartDataFrame.defaultProps = {
  height: '',
  children: '',
  title: '',
  download: false,
  exportData: [],
  align: '',
  apiUrl: '',
  apiLastUpdate: 'PropTypes.string',
  tool: PropTypes.string,
  downloadHeaders: [],
  section: '',
};
