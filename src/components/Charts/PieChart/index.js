import React from 'react';
import Plot from 'react-plotly.js';


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
}
