import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import {shallow, render, mount} from "enzyme";
import DashboardInitial from './../index';

it("snapshot should not have changes", () => {
    const component = shallow(<MockTheme><DashboardInitial></DashboardInitial></MockTheme>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});
