import customTheme from '../../../../styles/theme';

export const audiencesChartsUsersSettings = {
  chartType: 'LineChart',
  options: {
    legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
    lineWidth: 5,
    pointSize: 15,
    colors: [
      customTheme.palette.wikilegis.salem,
      customTheme.palette.wikilegis.jade,
      customTheme.palette.wikilegis.camarone,
    ],
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
    colors: [
      customTheme.palette.wikilegis.salem,
      customTheme.palette.wikilegis.jade,
      customTheme.palette.wikilegis.camarone,
    ],
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
