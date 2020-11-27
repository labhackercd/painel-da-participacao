import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from '../../../mockTheme'

import {shallow, render, mount} from "enzyme";
import SettingsSideBar from './../index';

it("snapshot should not have changes", () => {
    const component = shallow(<SettingsSideBar/>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

test('Test if NavBar renders without crash', () => {
    const div = document.createElement("div")
    ReactDOM.render(<SettingsSideBar/>, div)
    ReactDOM.unmountComponentAtNode(div)
});

test('Test if clicking on item of sidebar ', () => {
    const wrapper = mount(<SettingsSideBar />);
    const itemButton = wrapper.find("#tools").last();
    itemButton.simulate('click');
});

