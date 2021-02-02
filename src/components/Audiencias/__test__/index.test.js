import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockTheme from '../../mockTheme';
import Audiencias from '../index';

test('snapshot should not have changes', () => {
  let component;
  act(() => {
    component = shallow(<MockTheme><Audiencias data="mockdata" /></MockTheme>);
  });
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
