export const audiencesChartsUsersSettings = {
  chartType: 'LineChart',
  options: {
    legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
    colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
    lineWidth: 5,
    pointSize: 15,
    hAxis: {
      textStyle: { color: '#FFFFFF' },
      gridlines: { color: 'transparent' },
      titleTextStyle: { color: 'white' },
    },
    vAxis: { gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' }, format: '##.##' },
    series: {
      1: { curveType: 'function' },
    },
    backgroundColor: '#000000',
  },
};

export const audiencesWithMoreParticipation = {
  chartType: 'ColumnChart',
  options: {
    bars: 'vertical',
    legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
    isStacked: 'true',
    colors: ['#744600', '#EBE23B', '#DA7F0B'],
    bar: { groupWidth: '80%' },
    hAxis: { textStyle: { color: 'white' }, titleTextStyle: { color: 'white' } },
    vAxis: {
      minValue: 0,
      gridlines: { color: 'transparent' },
      textStyle: { color: '#FFFFFF' },
      format: '###.##',
    },
    backgroundColor: '#000000',
  },
};

export const audiencesRoomsTotalsChart = {
  chartType: 'AreaChart',
  options: {
    legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
    isStacked: 'true',
    colors: ['#744600', '#EBE23B', '#DA7F0B'],
    pointSize: 15,
    hAxis: {
      textStyle: { color: 'white' }, titleTextStyle: { color: 'white' }, format: '#####', gridlines: { color: 'transparent' },
    },
    vAxis: {
      minValue: 0,
      gridlines: { color: 'transparent' },
      textStyle: { color: '#FFFFFF' },
      format: ' ',
    },
    backgroundColor: '#000000',
  },
};
