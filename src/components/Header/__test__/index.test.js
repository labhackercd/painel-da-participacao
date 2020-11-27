import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import {shallow, render, mount} from "enzyme";
import Header from './../index';

it("snapshot should not have changes", () => {
    const component = shallow(<MockTheme><Header></Header></MockTheme>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});
