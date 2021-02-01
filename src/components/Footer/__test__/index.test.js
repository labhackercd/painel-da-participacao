import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import {shallow, render, mount} from "enzyme";
import Footer from './../index';

test("snapshot should not have changes", () => {
    const component = shallow(<MockTheme><Footer></Footer></MockTheme>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

test("snapshot should not have changes", () => {
    const component = mount(<MockTheme><Footer></Footer></MockTheme>);
    const wrapper = component.find('#title').at(0)
    expect(wrapper.text().includes('Coordenação')).toBe(true);
    //expect(component.exists()).toEqual(true);
    //expect(component).toMatchSnapshot();
});
