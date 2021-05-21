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

  setImmediate(async () => {
    await wrapper.update();
  });
});
