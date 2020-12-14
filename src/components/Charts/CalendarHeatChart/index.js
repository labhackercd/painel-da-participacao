import React from 'react';
//import Plot from 'react-plotly.js';
import Chart from "react-google-charts";


export default function CalendarHeatChart(props) {
  return (
      <Chart
        width={'1000px'}
        height={'350px'}
        chartType="Calendar"
        loader={<div>Carregando Gráfico</div>}
        data={props.data}
        options={props.options}
        rootProps={{ 'data-testid': '1' }}
    />
   );
}
