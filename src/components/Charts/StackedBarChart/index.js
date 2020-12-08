import React from 'react';
//import Plot from 'react-plotly.js';
import Chart from "react-google-charts";


export default function StackedBarChart(props) {
  return (
      <Chart
        width={'100%'}
        height={"115px"}
        chartType="BarChart"
        loader={<div>Carregando Gráfico</div>}
        data={props.data}
        options={props.options}
      />
   );
}