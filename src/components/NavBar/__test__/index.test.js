import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import MockTheme from '../../mockTheme';
import NavBar from '../index';

it('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><NavBar /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if NavBar renders without crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MockTheme><NavBar /></MockTheme>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Test if clicking on tab button doesnt break page', () => {
  // const wrapper = mount(<MockTheme><NavBar /></MockTheme>);
  // console.log(wrapper.debug())
  // const tabButton = wrapper.find("#simple-tab-0").last();
  // tabButton.simulate('click');
});

function mockHandleTabPanelChange() {
}

test('Test if clicking on logout menu doesnt break page', () => {
  const wrapper = mount(<MockTheme><NavBar value={1} onChange={mockHandleTabPanelChange} TabIndicatorProps={{ style: { background: '#00C354' } }} /></MockTheme>);
  const menuButton = wrapper.find('#logoutMenu').last();
  menuButton.simulate('click');
  wrapper.update();
  const logoutButton = wrapper.find('#logoutButtonItem').last();
  logoutButton.simulate('click');
});
