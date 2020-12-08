import React from 'react';
//import Plot from 'react-plotly.js';
import Chart from "react-google-charts";


export default function PieChart(props) {
  return (
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Carregando Gráfico</div>}
        data={props.data}
        options={props.options}
        rootProps={{ 'data-testid': '1' }}
    />
   );
}

/*
export default function PieChart(props) {
  return (
        <Plot
        data={[
          {
            values: props.data.values,
            labels: props.data.labels,
            type: 'pie',
            marker: {
                colors: ['#855CF8', '#503795', '#E289F2']
            },
          },
        ]}
        layout={ { paper_bgcolor:"#000000", font: {color: '#ffffff'}} }
      />
   );
}*/
