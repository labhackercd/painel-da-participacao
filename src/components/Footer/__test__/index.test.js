import React from 'react';
import { shallow, mount } from 'enzyme';
import MockTheme from '../../mockTheme';
import Footer from '../index';

test('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><Footer /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('snapshot should not have changes', () => {
  const component = mount(<MockTheme><Footer /></MockTheme>);
  const wrapper = component.find('#title').at(0);
  expect(wrapper.text().includes('Coordenação')).toBe(true);
  // expect(component.exists()).toEqual(true);
  // expect(component).toMatchSnapshot();
});
