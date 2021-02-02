import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import MockTheme from '../../mockTheme';
import HomeMenu from '../index';
import MenuItens from '../menuItens';

it('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><HomeMenu /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if HomeMenu renders without crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MockTheme><HomeMenu /></MockTheme>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Test if clicking close drawer button doesnt break page', () => {
  const wrapper = mount(<MockTheme><HomeMenu open /></MockTheme>);
  const closeDrawerButton = wrapper.find('#drawer-close').last();
  closeDrawerButton.simulate('click');
  const openDrawerButton = wrapper.find('#drawer-open').last();
  openDrawerButton.simulate('click');
});

test('Test if clicking on list item button doesnt break page', () => {
  const wrapper = mount(<MockTheme><HomeMenu open={false} /></MockTheme>);
  const menuItens = wrapper.findWhere((node) => node.is(MenuItens));
  const listItemButton = menuItens.find('#general-view').last();
  listItemButton.simulate('click');
});
