import React from 'react';
import { mount } from 'enzyme';
import AlertDataConsolidateInterval from '../index';
import MockTheme from '../../../mocks/theme/mockTheme';

test('snapshot should not have changes', () => {
  const component = mount(<MockTheme><AlertDataConsolidateInterval /></MockTheme>);
  expect(component.exists()).toEqual(true);
});
