/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import TableDarkTheme from '../TableDarkTheme/index';
import ChartDataFrame from '../ChartDataFrame/index';
import GoogleChart from '../Charts/GoogleChart';
import convertArrayToJSON from '../../utils/format/convertArrayToJson/index';

const CustomRadio = withStyles({
  root: {
    color: 'white',
    borderColor: 'blue',
    '&$checked': {
      color: 'white',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

function FormControlRadioOptions(props) {
  const { handleChange, currentValue } = props;

  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" role="radio" name="position" defaultValue="chart" onChange={handleChange} value={currentValue}>
        <FormControlLabel
          value="chart"
          control={<CustomRadio tabIndex="0" value="chart" color="primary" inputProps={{ 'aria-label': 'Botão de Seleção visualizar dados em gráfico' }} />}
          label="Ver como Gráfico"
        />
        <FormControlLabel
          value="table"
          control={<CustomRadio tabIndex="-1" value="table" color="primary" inputProps={{ 'aria-label': 'Botão de Seleção visualizar dados em tabela' }} />}
          label="Ver como Tabela"
        />
      </RadioGroup>
    </FormControl>
  );
}

function getColumns(data) {
  return Object(data[0]).map((key) => ({
    name: key,
    selector: key,
    sortable: true,
    center: true,
  }));
}

export default function ChartAndReport(props) {
  const {
    isLoaded, title, data, chartType, chartOptions, exportData,
    apiLastUpdate, tool, height, apiUrl,
  } = props;
  const [wayOfVisualizeData, setWayOfVisualizeData] = useState('chart');
  const convertDataToJson = convertArrayToJSON(data);

  const columns = getColumns(data);

  function handleWayOfVisualizeDataChange(e) {
    if (e.target.value === 'table') {
      setWayOfVisualizeData('table');
    } else {
      setWayOfVisualizeData('chart');
    }
  }

  return (
    <ChartDataFrame
      height={height}
      title={title}
      listView
      exportData={exportData}
      download
      align="center"
      apiUrl={apiUrl}
      apiLastUpdate={apiLastUpdate}
      tool={tool}
    >
      <div style={{ width: '100%' }}>
        {isLoaded ? (
          <>
            <Box display="flex" flexDirection="row-reverse">
              <FormControlRadioOptions
                handleChange={() => handleWayOfVisualizeDataChange()}
                value={wayOfVisualizeData}
              />
            </Box>
            <>
              {(wayOfVisualizeData === 'chart') ? (
                <Box height={height}>
                  <GoogleChart
                    chartType={chartType}
                    data={data}
                    options={chartOptions}
                  />
                </Box>
              ) : (
                <Box width="100%">
                  <TableDarkTheme
                    data={convertDataToJson}
                    columns={columns}
                    theme="darkLAB"
                    highlightOnHover
                    pointerOnHover
                    pagination
                    paginationRowsPerPageOptions={[5, 10, (data.length - 1)]}
                    defaultSortAsc={false}
                  />
                </Box>
              )}
            </>
          </>
        ) : (
          <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
            <CircularProgress color="secondary" />
          </Box>
        )}
      </div>
    </ChartDataFrame>
  );
}

FormControlRadioOptions.propTypes = {
  handleChange: PropTypes.func,
  currentValue: PropTypes.string,
};

ChartAndReport.propTypes = {
  isLoaded: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.node,
  chartType: PropTypes.string,
  chartOptions: PropTypes.object,
  exportData: PropTypes.array,
  apiLastUpdate: PropTypes.string,
  tool: PropTypes.string,
  height: PropTypes.string,
  apiUrl: PropTypes.string,
};

ChartAndReport.defaultProps = {
  isLoaded: false,
  title: 'Title',
  data: {},
  chartType: '',
  chartOptions: {},
  exportData: [],
  apiLastUpdate: 'Carregando',
  tool: '',
  height: '35vh',
  apiUrl: process.env.NEXT_PUBLIC_EDEMOCRACIA_SWAGGER_URL,
};
