import React from 'react';
import Chart from "react-google-charts";


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

export default function GoogleChart(props) {
  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType={props.chartType}
      loader={<div>Carregando Gráfico</div>}
      data={props.data}
      options={props.options}
      rootProps={{ 'data-testid': '2' }}
    />
   );
}
