import React from 'react';
import { mount } from 'enzyme';
import MockTheme from '../../../mocks/theme/mockTheme';
import Sobre from '../index';

test('Snapshot Sobre page should not have changes', () => {
  const component = mount(<MockTheme><Sobre /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
