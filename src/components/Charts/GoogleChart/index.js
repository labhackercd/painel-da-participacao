import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';

/*
Type Charts
 - LineChart
 - BarChart
 - ColumnChart (same as barchart but vertical)
 - Calendar -> CalendarHeatChart
 - LineChart -> CurveLineChart with props options
 - PieChart
 - BarChart -> StackedBar with props options
 - TreeMap
*/
// export default function GoogleChart(chartType, data, options) {
export default function GoogleChart(props) {
  const { chartType, data, options } = props;
  return (
    <Chart
      width="100%"
      height="100%"
      chartType={chartType}
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
      rootProps={{ 'data-testid': '3' }}
    />
  );
}

GoogleChart.propTypes = {
  chartType: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
};
