import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChartDataFrame from '../../components/ChartDataFrame/index';
import GoogleChart from '../../components/Charts/GoogleChart';

export default function GoogleChartFrame(props) {
  const {
    isLoaded, title, classes, data, chartType, chartOptions, exportData, apiLastUpdate, tool,
  } = props;

  return (
    <>
      <ChartDataFrame
        height="35vh"
        title={title}
        listView
        exportData={exportData}
        download
        align="center"
        apiUrl={process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}
        apiLastUpdate={apiLastUpdate}
        tool={tool}
      >
        {isLoaded ? (
          <div className={classes.contentBox}>
            <GoogleChart
              chartType={chartType}
              data={data}
              options={chartOptions}
            />
          </div>
        ) : (
          <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
            <CircularProgress color="secondary" />
          </Box>
        )}
      </ChartDataFrame>
    </>
  );
}

GoogleChartFrame.propTypes = {
  isLoaded: PropTypes.bool,
  classes: PropTypes.object,
  title: PropTypes.string,
  data: PropTypes.node,
  chartType: PropTypes.string,
  chartOptions: PropTypes.object,
  exportData: PropTypes.array,
  apiLastUpdate: PropTypes.string,
  tool: PropTypes.string,
};

GoogleChartFrame.defaultProps = {
  isLoaded: false,
  classes: '',
  title: 'Title',
  data: {},
  chartType: '',
  chartOptions: {},
  exportData: [],
  apiLastUpdate: 'Carregando',
  tool: 'e-Democracia',
};
