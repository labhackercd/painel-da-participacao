import React from 'react';
import { mount } from 'enzyme';
import MockTheme from './mocks/mockTheme';
import Custom500 from '../500';

test('Snapshot 500 page should not have changes', () => {
  const component = mount(<MockTheme><Custom500 /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
