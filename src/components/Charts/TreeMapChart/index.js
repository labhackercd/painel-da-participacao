import React from 'react';
import Chart from "react-google-charts";

export default function TreeMapChart(props) {
  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="TreeMap"
      loader={<div>Loading Chart</div>}
      data={props.data}
      options={props.options}
      rootProps={{ 'data-testid': 'tree-map' }}
    />
   );
}
