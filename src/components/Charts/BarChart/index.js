import React from 'react';
import Chart from "react-google-charts";

export default function BarChart(props) {
  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={props.data}
      options={props.options}
      rootProps={{ 'data-testid': 'bar-chart' }}
    />
   );
}
