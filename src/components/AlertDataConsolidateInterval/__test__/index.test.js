import React from 'react';
import { mount } from 'enzyme';
import AlertDataConsolidateInterval from '../index';
import MockTheme from '../../../mocks/theme/mockTheme';

// The default application consolidation range is locatted at aplication options;
// You can generate the timestamp time in calculators like https://rogertakemiya.com.br/converter-data-para-timestamp/

test('snapshot should not have changes', () => {
  const component = mount(<MockTheme><AlertDataConsolidateInterval /></MockTheme>);
  expect(component.exists()).toEqual(true);
});

test('Test AlertDataConsolidate component during consolidation range', () => {
  // Corresponds to 'Mon, 07 Jun 2021 01:45:00 GMT'
  const mockDate = new Date(2021, 6, 7, 1, 45, 0, 0);
  const dateNowSpy = jest
    .spyOn(global, 'Date')
    .mockImplementation(() => mockDate);

  const component = mount(<MockTheme><AlertDataConsolidateInterval /></MockTheme>);
  expect(component.exists()).toEqual(true);

  dateNowSpy.mockRestore();
});

test('Test AlertDataConsolidate component out of consolidation range', () => {
  // Corresponds to 'Mon, 07 Jun 2021 09:00:00 GMT'
  const mockDate = new Date(2021, 6, 7, 9, 0, 0, 0);
  const dateNowSpy = jest
    .spyOn(global, 'Date')
    .mockImplementation(() => mockDate);

  const component = mount(<MockTheme><AlertDataConsolidateInterval /></MockTheme>);
  expect(component.exists()).toEqual(true);

  dateNowSpy.mockRestore();
});
