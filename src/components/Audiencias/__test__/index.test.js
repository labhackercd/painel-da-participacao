import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import {shallow, render, mount} from "enzyme";
import Audiencias from './../index';
import { act } from 'react-dom/test-utils';

it("snapshot should not have changes", () => {
  let component;
  act(() => {
    component = shallow(<MockTheme><Audiencias data="mockdata"></Audiencias></MockTheme>);
  })
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
