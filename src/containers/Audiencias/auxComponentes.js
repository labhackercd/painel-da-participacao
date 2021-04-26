import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DataTable, { createTheme } from 'react-data-table-component';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChartDataFrame from '../../components/ChartDataFrame/index';
import GoogleChart from '../../components/Charts/GoogleChart';

createTheme('darkLAB', {
  text: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    disabled: '#FFFFFF',
  },
  background: {
    default: '#000000',
  },
  context: {
    text: '#FFFFFF',
    background: '#FFFFFF',
  },
  divider: {
    default: '#2F2F2F',
  },
  button: {
    default: '#FFFFFF',
    focus: 'rgba(255, 255, 255, .12)',
    hover: 'rgba(255, 255, 255, .12)',
    disabled: 'rgba(255, 255, 255, .18)',
  },
  selected: {
    default: '#9e5e0d',
    text: '#9e5e0d',
  },
  sortFocus: {
    default: '#c9c9c9',
    text: '#252525',
  },
  highlightOnHover: {
    default: '#252525',
    text: '#ffffff',
  },
  striped: {
    default: '#9e5e0d',
    text: '#9e5e0d',
  },
});
function arrayToJSONObject(arr) {
  // header
  const keys = arr[0];

  // vacate keys from main array
  const newArr = arr.slice(1, arr.length);

  const formatted = [];
  const data = newArr;
  const cols = keys;
  const l = cols.length;
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const o = {};
    for (let j = 0; j < l; j++) o[cols[j]] = d[j];
    formatted.push(o);
  }
  return formatted;
}

export function FormControlLabelPlacement(props) {
  const { handleChange, currentValue } = props;

  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="chart" onChange={handleChange} value={currentValue}>
        <FormControlLabel value="chart" control={<Radio color="primary" />} label="Visualizar Gráfico" />
        <FormControlLabel value="table" control={<Radio color="primary" />} label="Visualizar Tabela" />
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

export function GoogleChartFrame(props) {
  const {
    isLoaded, title, classes, data, chartType, chartOptions, exportData,
    apiLastUpdate, tool, height,
  } = props;
  const [wayOfVisualizeData, setWayOfVisualizeData] = useState('chart');
  const convertDataToJson = arrayToJSONObject(data);

  const columns = getColumns(data);

  function handleWayOfVisualizeDataChange(e) {
    if (e.target.value === 'table') {
      setWayOfVisualizeData('table');
    } else {
      setWayOfVisualizeData('chart');
    }
  }

  return (
    <>
      <ChartDataFrame
        height={height}
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
            <Box display="flex" width={1} paddingTop={2} justifyContent="flex-end">
              <FormControlLabelPlacement
                handleChange={handleWayOfVisualizeDataChange}
                value={wayOfVisualizeData}
              />
            </Box>
            <Box width={1}>
              {(wayOfVisualizeData === 'chart') ? (
                <GoogleChart
                  chartType={chartType}
                  data={data}
                  options={chartOptions}
                />
              ) : (
                <DataTable
                  data={convertDataToJson}
                  columns={columns}
                  theme="darkLAB"
                  highlightOnHover
                  pointerOnHover
                  pagination
                  paginationRowsPerPageOptions={[5, 10, (data.length - 1)]}
                  defaultSortAsc={false}
                />
              )}
            </Box>
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
  height: PropTypes.string,
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
  tool: '',
  height: '35vh'
};
