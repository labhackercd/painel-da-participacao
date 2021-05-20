/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Box, Typography, Icon,
} from '@material-ui/core';
import { CSVLink } from 'react-csv';
import { useStyles } from './style';

import downloadReportCSVIcon from '../../assets/icons/download_report_csv.svg';
import downloadChartAndReportCSVIcon from '../../assets/icons/download_report_chart_csv.svg';

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
                <CSVLink
                  headers={downloadHeaders}
                  data={formatedData}
                  filename={`${tool}-${title}.csv`}
                  aria-label="Baixar arquivo CSV"
                  title="Baixar dados em um arquivo CSV"
                  style={{ textDecoration: 'none' }}
                >
                  <Box display="flex" alignItems="center">
                    <Icon style={{ width: '100%' }}>
                      <img
                        src={
                          (section === 'Report')
                            ? downloadReportCSVIcon
                            : downloadChartAndReportCSVIcon
                        }
                        alt=""
                        aria-hidden="true"
                      />
                    </Icon>
                  </Box>
                </CSVLink>
              )
              : ''}
          </Box>
        </Box>
      </Box>
      <div className={classes.container} style={{ minHeight: height, width: '100%' }}>
        {children}
      </div>
      <Box className={classes.updateLegend} paddingLeft={1} paddingBottom={1}>
        <Typography className={classes.updateLegendText}>
          {'Fonte: '}
          <a
            href={apiUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2BE6FF' }}
          >
            {`API ${tool}`}
          </a>

          {`  Atualizado em: ${apiLastUpdate}`}
        </Typography>
      </Box>
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
