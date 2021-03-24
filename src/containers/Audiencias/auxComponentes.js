import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChartDataFrame from '../../components/ChartDataFrame/index';
import TotalsDataFrame from '../../components/TotalsDataFrame/index';
import GoogleChart from '../../components/Charts/GoogleChart';
import Tooltip from '../../components/ToolTip/index';

export function TotalFrame(props) {
  const {
    isLoaded, info, title, toolTipText,
  } = props;

  return (
    <TotalsDataFrame height="15vh" paddingLeft="0.5rem" title={title} download={false} align="left" toolTipText={toolTipText}>
      {isLoaded ? (
        <Typography variant="h2" style={{ color: '#FFF', alignSelf: 'center' }}>
          {info}
        </Typography>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
          <CircularProgress color="secondary" />
        </Box>
      )}
    </TotalsDataFrame>
  );
}

export function GoogleChartFrame(props) {
  const {
    isLoaded, title, classes, data, chartType, chartOptions, exportData, apiLastUpdate,
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

export function NoDataForSelectedPeriod(props) {
  const { title } = props;

  return (
    <ChartDataFrame height="10vh" title={title} listView exportData={null} download={false}>
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%" margin={2}>
        <img
          src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/messages/no_data_find.svg`}
          alt="Não existem dados para o período selecionado"
        />
      </Box>
    </ChartDataFrame>
  );
}

export function Sectionheader(props) {
  const { title, toolTipText } = props;

  return (
    <Box display="flex" marginBottom={1}>
      <Box p={1}>
        <Typography component="div">
          <Box fontWeight="fontWeightBold" fontSize={39}>
            {title}
          </Box>
        </Typography>
      </Box>
      <Box alignSelf="center">
        {(toolTipText !== null && toolTipText !== undefined)
          && <Tooltip toolTipText={toolTipText} />}
      </Box>
      <Box p={1} flexGrow={1} alignSelf="center">
        <hr style={{ borderColor: '#DA7F0B' }} />
      </Box>
    </Box>
  );
}

export function SubSectionHeader(props) {
  const { title } = props;
  return (
    <Typography component="div">
      <Box fontWeight="fontWeightBold" fontSize={25} marginLeft={1} marginBottom={1}>
        {title}
      </Box>
    </Typography>
  );
}

TotalFrame.propTypes = {
  isLoaded: PropTypes.bool,
  info: PropTypes.node,
  title: PropTypes.string,
  toolTipText: PropTypes.string,
};

TotalFrame.defaultProps = {
  isLoaded: false,
  info: 'info',
  title: 'Title',
  toolTipText: null,
};

GoogleChartFrame.propTypes = {
  isLoaded: PropTypes.bool,
  classes: PropTypes.object,
  title: PropTypes.string,
  data: PropTypes.node,
  chartType: PropTypes.string,
  chartOptions: PropTypes.object,
  exportData: PropTypes.array,
  apiLastUpdate: PropTypes.string,
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
};

NoDataForSelectedPeriod.propTypes = {
  title: PropTypes.string,
};

NoDataForSelectedPeriod.defaultProps = {
  title: 'Titulo',
};

Sectionheader.propTypes = {
  title: PropTypes.string,
  toolTipText: PropTypes.string,
};

Sectionheader.defaultProps = {
  title: 'Titulo',
  toolTipText: null,
};

SubSectionHeader.propTypes = {
  title: PropTypes.string,
};

SubSectionHeader.defaultProps = {
  title: 'Titulo',
};
