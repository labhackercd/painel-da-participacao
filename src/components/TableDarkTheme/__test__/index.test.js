import React from 'react';
import { mount } from 'enzyme';
import TableDarkTheme from '../index';

test('Test if TableDarkTheme renders without crash whole lifecycle', async () => {
  const columns = [
    {
      name: 'Ano',
      selector: 'Ano',
      sortable: true,
      center: true,
    },
    {
      name: 'Total de Usuários Cadastrados',
      selector: 'Total de Usuários Cadastrados',
      sortable: true,
      center: true,
    },
  ];
  const convertDataToJson = [
    {
      Ano: '2019',
      'Total de Usuários Cadastrados': 2907,
    },
    {
      Ano: '2020',
      'Total de Usuários Cadastrados': 8347,
    },
    {
      Ano: '2021',
      'Total de Usuários Cadastrados': 9239,
    },
  ];

  const wrapper = await mount(
    <TableDarkTheme
      data={convertDataToJson}
      columns={columns}
      theme="darkLAB"
      highlightOnHover
      pointerOnHover
      pagination
      paginationRowsPerPageOptions={[5, 10, (convertDataToJson.length - 1)]}
      defaultSortAsc={false}
    />,
  );

  expect(wrapper.exists()).toEqual(true);
});
