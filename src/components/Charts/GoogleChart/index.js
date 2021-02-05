import React from 'react';
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
export default function GoogleChart() {
  return (
    <Chart
      width="100%"
      height="100%"
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Data', 'Perguntas', 'Votos nas Perguntas', 'Mensagens do chat'],
        ['01/12', 300, 800, 231],
        ['02/12', 345, 545, 265],
        ['03/12', 240, 865, 212],
        ['04/12', 256, 870, 234],
        ['05/12', 210, 856, 275],
        ['06/12', 323, 822, 276],
        ['07/12', 356, 762, 212],
        ['08/12', 121, 542, 434],
        ['09/12', 130, 232, 234],
        ['10/12', 213, 212, 954],
        ['11/12', 365, 309, 545],
        ['12/12', 313, 312, 576],
        ['13/12', 376, 376, 603],
        ['14/12', 309, 354, 565],
        ['15/12', 354, 323, 732],
      ]}
      options={{
        bars: 'vertical',
        legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
        isStacked: 'true',
        colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
        bar: { groupWidth: '40%' },
        hAxis: { textStyle: { color: '#FFFFFF' } },
        vAxis: { minValue: 0, gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' } },
        backgroundColor: '#000000',
      }}
      rootProps={{ 'data-testid': '3' }}
    />
  );
}
