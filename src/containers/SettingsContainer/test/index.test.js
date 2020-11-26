import React from 'react';
import ReactDOM from 'react-dom';
import {customTheme} from '../../../theme';
import {shallow, render, mount} from "enzyme";
import SettingsPage from './../index';
import { BrowserRouter as Router } from 'react-router-dom';
import {ThemeProvider } from '@material-ui/core/styles';

it("snapshot should not have changes", () => {
    const component = shallow(<ThemeProvider theme={customTheme}><SettingsPage/></ThemeProvider>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

test('Test if SettingsPage renders without crash', () => {
    const div = document.createElement("div")
    ReactDOM.render(<ThemeProvider theme={customTheme}><SettingsPage/></ThemeProvider>, div)
    ReactDOM.unmountComponentAtNode(div)
});

test("It renders SettingsPage", async () => {
    const  wrapper = mount(<ThemeProvider theme={customTheme}><SettingsPage/></ThemeProvider>);

});