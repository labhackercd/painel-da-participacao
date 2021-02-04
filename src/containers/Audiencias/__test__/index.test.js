import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockTheme from '../../../components/mockTheme';
import Audiencias from '../index';

test('snapshot should not have changes', () => {
  let component;
  act(() => {
    component = shallow(<MockTheme><Audiencias data="mockdata" /></MockTheme>);
  });
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if Audiencias renders without crash whole lifecycle', () => {
  let wrapper;
  act(() => {
    wrapper = mount(<MockTheme><Audiencias /></MockTheme>);
  });
  expect(wrapper.exists()).toEqual(true);
});
