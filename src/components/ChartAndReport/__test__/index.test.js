import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';
import MockTheme from '../../mockTheme';
import ChartAndReport from '../index';
import { participationChartDataMock } from './mocks/participationChartData.mock';

const TOOLNAME = 'Tool';
const participantionChartData = participationChartDataMock;
const periodSubTitle = '2021';
const audiencesWithMoreParticipation = {
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
const participantionChartDataLastUpdate = '11/03/2021 14:34';

test('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><ChartAndReport /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test ChardAndReport change option', async () => {
  const wrapper = await render(
    <MockTheme>
      <ChartAndReport
        height="60vh"
        download
        exportData={participantionChartData}
        title={periodSubTitle}
        data={participantionChartData}
        chartType={audiencesWithMoreParticipation.chartType}
        chartOptions={audiencesWithMoreParticipation.options}
        apiLastUpdate={participantionChartDataLastUpdate}
        tool={TOOLNAME}
        isLoaded
      />
    </MockTheme>,
  );

  const radio = wrapper.getByLabelText('Ver como Tabela');
  fireEvent.change(radio, { target: { value: 'table' } });
  expect(radio.value).toBe('table');
});
