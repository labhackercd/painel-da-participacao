import React from 'react';
import { mount } from 'enzyme';
import RankingTable from '../index';
import { rankingAudienciaColumns, filterRankingAudiencias } from '../../../containers/Audiencias/settings';
import { dataMock } from './mocks/data_mock';

test('Test if Audiencias renders without crash whole lifecycle', async () => {
  const wrapper = await mount(
    <RankingTable
      data={dataMock}
      columns={rankingAudienciaColumns}
      filterRanking={filterRankingAudiencias}
    />,
  );

  expect(wrapper.exists()).toEqual(true);
});

test('Audiencia page lifecycle is getting informations of days of specific month', async () => {
  const wrapper = mount(
    <RankingTable
      data={dataMock}
      columns={rankingAudienciaColumns}
      filterRanking={filterRankingAudiencias}
    />,
  );

  const searchField = wrapper.find('input').at(0);
  searchField.instance().value = 'Epidemias';
  searchField.simulate('change');
  await wrapper.update();

  const button = wrapper.find('#rankingSearchButton').at(0);
  button.simulate('click');

  setImmediate(async () => {
    await wrapper.update();
  });
});
