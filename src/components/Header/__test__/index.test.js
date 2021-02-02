import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Header from '../index';
import MockTheme from '../../mockTheme';

it('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><Header /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if Header renders without crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MockTheme><Header /></MockTheme>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('test onchange of year select input field', () => {
  const wrapper = mount(<MockTheme><Header /></MockTheme>);
  const sessionType = wrapper.find('select').at(0);
  // console.log(sessionType.debug())
  sessionType.instance().value = '3';
  sessionType.simulate('change');
  expect(wrapper.find('select').at(0).prop('value')).toEqual('3');
});

test('test onchange of semester select input field', () => {
  const wrapper = mount(<MockTheme><Header /></MockTheme>);
  const sessionType = wrapper.find('select').at(1);
  sessionType.instance().value = '3';
  sessionType.simulate('change');
  expect(wrapper.find('select').at(1).prop('value')).toEqual('3');
});

test('test onchange of month select input field', () => {
  const wrapper = mount(<MockTheme><Header /></MockTheme>);
  const sessionType = wrapper.find('select').at(2);
  sessionType.instance().value = '3';
  sessionType.simulate('change');
  expect(wrapper.find('select').at(2).prop('value')).toEqual('3');
});
