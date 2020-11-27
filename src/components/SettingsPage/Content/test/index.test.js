import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from '../../../mockTheme'

import {shallow, render, mount} from "enzyme";
import SettingsContent from './../index';

it("snapshot should not have changes", () => {
    const component = shallow(<SettingsContent/>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

test('Test if NavBar renders without crash', () => {
    const div = document.createElement("div")
    ReactDOM.render(<SettingsContent/>, div)
    ReactDOM.unmountComponentAtNode(div)
});

