import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import {shallow, render, mount} from "enzyme";
import HomeMenu from './../index';
import MenuItens from './../menuItens';

it("snapshot should not have changes", () => {
    const component = shallow(<MockTheme><HomeMenu></HomeMenu></MockTheme>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

test('Test if HomeMenu renders without crash', () => {
    const div = document.createElement("div")
    ReactDOM.render(<MockTheme><HomeMenu></HomeMenu></MockTheme>, div)
    ReactDOM.unmountComponentAtNode(div)
});

test('Test if clicking close drawer button doesnt break page', () => {
    const wrapper = mount(<MockTheme><HomeMenu open={true}></HomeMenu></MockTheme>);
    const closeDrawerButton = wrapper.find('#drawer-close').last();
    closeDrawerButton.simulate('click');
})

test('Test if clicking open drawer button doesnt break page', () => {
    const wrapper = mount(<MockTheme><HomeMenu open={false}></HomeMenu></MockTheme>);
    const openDrawerButton = wrapper.find('#drawer-open').last();
    openDrawerButton.simulate('click');
})
test('Test if clicking on list item button doesnt break page', () => {
    const wrapper = mount(<MockTheme><HomeMenu></HomeMenu></MockTheme>);
    const menuItens = wrapper.findWhere(node => node.is(MenuItens))
    const listItemButton = menuItens.find("#general-view").last();
    listItemButton.simulate('click');
});
