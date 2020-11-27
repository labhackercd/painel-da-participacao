import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import {shallow, render, mount} from "enzyme";
import Footer from './../index';

it("snapshot should not have changes", () => {
    const component = shallow(<MockTheme><Footer></Footer></MockTheme>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});
