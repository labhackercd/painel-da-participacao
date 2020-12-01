import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import {shallow, render, mount} from "enzyme";
import NavBar from './../index';

it("snapshot should not have changes", () => {
    const component = shallow(<MockTheme><NavBar></NavBar></MockTheme>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

test('Test if NavBar renders without crash', () => {
    const div = document.createElement("div")
    ReactDOM.render(<MockTheme><NavBar></NavBar></MockTheme>, div)
    ReactDOM.unmountComponentAtNode(div)
});

test('Test if clicking on tab button doesnt break page', () => {
    const wrapper = mount(<MockTheme><NavBar/></MockTheme>);
    const tabButton = wrapper.find("#simple-tab-0").last();
    tabButton.simulate('click');
});


test('Test if clicking on logout menu doesnt break page', () => {
    const wrapper = mount(<MockTheme><NavBar/></MockTheme>);
    const menuButton = wrapper.find("#logoutMenu").last();
    //console.log(menuButton.debug())
    menuButton.simulate('click');
    wrapper.update();
    //console.log(wrapper.debug())
    const logoutButton = wrapper.find("#logoutButtonItem").last();
    //console.log(logoutButton.debug())
    logoutButton.simulate('click');
});