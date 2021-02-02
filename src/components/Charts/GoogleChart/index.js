import React from 'react';
import Chart from 'react-google-charts';

/*
Type Charts
 - LineChart
 - BarChart
 - Calendar -> CalendarHeatChart
 - LineChart -> CurveLineChart with props options
 - PieChart
 - BarChart -> StackedBar with props options
 - TreeMap
*/

export default function GoogleChart(chartType, data, options) {
  return (
    <Chart
      width="500px"
      height="300px"
      chartType={chartType}
      loader={<div>Carregando Gráfico</div>}
      data={data}
      options={options}
      rootProps={{ 'data-testid': '2' }}
    />
  );
}
