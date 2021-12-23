import React from 'react';
import { mount } from 'enzyme';
import RankingTable from '../index';
import { rankingAudienciaColumns } from '../../../containers/Audiencias/settings/rankingSettings';
import filterRankingAudiencias from '../../../containers/Audiencias/auxFunctions/filterRanking';
import { dataMock } from './mocks/data_mock';
import MockTheme from '../../../mocks/theme/mockTheme';

test('Test if Audiencias renders without crash whole lifecycle', async () => {
  const wrapper = await mount(
    <MockTheme>
      <RankingTable
        data={dataMock}
        columns={rankingAudienciaColumns}
        filterRanking={filterRankingAudiencias}
      />
    </MockTheme>,
  );

  expect(wrapper.exists()).toEqual(true);
});

test('Audiencia page lifecycle is getting informations of days of specific month', async () => {
  const wrapper = mount(
    <MockTheme>
      <RankingTable
        data={dataMock}
        columns={rankingAudienciaColumns}
        filterRanking={filterRankingAudiencias}
      />
    </MockTheme>,
  );

  const searchField = wrapper.find('input').at(0);
  searchField.instance().value = 'Epidemias';
  searchField.simulate('change');
  await wrapper.update();

  const button = wrapper.find('#rankingSearchButton').at(0);
  button.simulate('click');

  // Return to default state
  searchField.instance().value = '';
  searchField.simulate('change');
  await wrapper.update();
  button.simulate('click');

  setImmediate(async () => {
    await wrapper.update();
  });
});

test('message of not finding results should be that it was not found within the period', async () => {
  const wrapper = mount(
    <MockTheme>
      <RankingTable
        data={dataMock}
        columns={rankingAudienciaColumns}
        filterRanking={filterRankingAudiencias}
        period="daily"
        month="10"
        year="2020"
        tool="audiences"
      />
    </MockTheme>,
  );

  const searchField = wrapper.find('input').at(0);
  searchField.instance().value = '03/10/2020';
  searchField.simulate('change');
  wrapper.update();

  const button = wrapper.find('#rankingSearchButton').at(0);
  button.simulate('click');

  expect(wrapper.text()).toBe('BuscarNão há registros com este termo no período definido');
});

test('message of not finding results should be that it was not found outside the period', async () => {
  const wrapper = mount(
    <MockTheme>
      <RankingTable
        data={dataMock}
        columns={rankingAudienciaColumns}
        filterRanking={filterRankingAudiencias}
        period="daily"
        month="10"
        year="2020"
        tool="audiences"
      />
    </MockTheme>,
  );

  const searchField = wrapper.find('input').at(0);
  searchField.instance().value = '03/11/2020';
  searchField.simulate('change');
  wrapper.update();

  const button = wrapper.find('#rankingSearchButton').at(0);
  button.simulate('click');

  expect(wrapper.text()).toBe('BuscarA data buscada deve estar dentro do período definido');
});
