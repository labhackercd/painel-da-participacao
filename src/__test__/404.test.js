import React from 'react';
import { mount } from 'enzyme';
import MockTheme from './mocks/mockTheme';
import Custom404 from '../pages/404';

test('Snapshot 404 page should not have changes', () => {
  const component = mount(<MockTheme><Custom404 /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
