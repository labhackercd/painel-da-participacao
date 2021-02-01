import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import { shallow, configure } from 'enzyme';
import Audiencias from './../index';
import { act } from 'react-dom/test-utils';

test("snapshot should not have changes", () => {
  let component;
  act(() => {
    component = shallow(<MockTheme><Audiencias data="mockdata"></Audiencias></MockTheme>);
  })
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
