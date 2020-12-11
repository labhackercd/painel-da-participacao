import React from 'react';
import Chart from "react-google-charts";


export default function CurveLineChart(props) {
  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="LineChart"
      loader={<div>Carregando Gráfico</div>}
      data={props.data}
      options={props.options}
      rootProps={{ 'data-testid': '2' }}
    />
   );
}
