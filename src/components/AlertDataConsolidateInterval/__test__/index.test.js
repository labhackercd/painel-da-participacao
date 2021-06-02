import React from 'react';
import { mount } from 'enzyme';
import { AlertCachedData } from '../index';
import MockTheme from '../../../mocks/theme/mockTheme';

test('snapshot should not have changes', () => {
  const component = mount(<MockTheme><AlertCachedData apiLastCacheMade="Test" /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
