import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import MockTheme from '../../mockTheme';
import HomeMenu from '../index';
import MenuItens from '../menuItens';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

it('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><HomeMenu /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if HomeMenu renders without crash', () => {
  let wrapper;
  act(() => {
    useRouter.mockImplementationOnce(() => ({
      query: { ferramenta: 'audiencias' },
    }));
    wrapper = mount(<MockTheme><HomeMenu open /></MockTheme>);
  });
  expect(wrapper.exists()).toEqual(true);
});

/*
test('Test if clicking close drawer button doesnt break page', () => {

  // const wrapper = mount(<MockTheme><HomeMenu /></MockTheme>);
  // const closeDrawerButton = wrapper.find('#drawer-close').last();
  // closeDrawerButton.simulate('click');
  // const openDrawerButton = wrapper.find('#drawer-open').last();
  // openDrawerButton.simulate('click');

  let wrapper;
  act(() => {
    useRouter.mockImplementationOnce(() => ({
      query: { ferramenta: 'audiencias' },
    }));
    wrapper = mount(<MockTheme><HomeMenu /></MockTheme>);
    const closeDrawerButton = wrapper.find('#drawer-close').last();
    console.log(closeDrawerButton.debug())
    closeDrawerButton.simulate('click');
  });
  expect(wrapper.exists()).toEqual(true);
});

test('Test if clicking on list item button doesnt break page', () => {
  const wrapper = mount(<MockTheme><HomeMenu open={false} /></MockTheme>);
  const menuItens = wrapper.findWhere((node) => node.is(MenuItens));
  const listItemButton = menuItens.find('#general-view').last();
  listItemButton.simulate('click');
});
*/
