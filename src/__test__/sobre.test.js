import React from 'react';
import { mount } from 'enzyme';
import MockTheme from './mocks/mockTheme';
import Sobre from '../pages/sobre';

test('Snapshot Sobre page should not have changes', () => {
  const component = mount(<MockTheme><Sobre /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
