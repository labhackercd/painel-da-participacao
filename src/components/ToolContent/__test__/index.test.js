import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import {shallow, render, mount} from "enzyme";
import Audiencias from '../../Audiencias/index'
import { act } from 'react-dom/test-utils';
import Header from './../../Header';
import ToolContent from '../index'

import {waitForElementToBeRemoved} from '@testing-library/react';
/*
act(() => {

});

await waitFor(() => {

});
*/
it("snapshot should not have changes", () => {
  let component;
  act(() => {
    component = shallow(<MockTheme><ToolContent><Audiencias></Audiencias></ToolContent></MockTheme>);
  })
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

it('tests clicking in header doesnt break page', async () => {
  
  const wrapper = mount(<MockTheme><ToolContent><Audiencias></Audiencias></ToolContent></MockTheme>)

  const header = wrapper.findWhere(node => node.is(Header)).last();
  await act(async () => {
    const sessionType = header.find('select').at(0)
    sessionType.instance().value = "Ano";
    sessionType.simulate("change");
  });

})

it('tests clicking in header doesnt break page', async() => {
  const wrapper = mount(<MockTheme><ToolContent><Audiencias></Audiencias></ToolContent></MockTheme>)
  const header = wrapper.findWhere(node => node.is(Header)).last()
  await act(async () => {
    const sessionType = header.find('select').at(1)
    sessionType.instance().value = "Semestre";
    sessionType.simulate("change");
  });
})

it('tests clicking in header doesnt break page', async() => {
  const wrapper = mount(<MockTheme><ToolContent><Audiencias></Audiencias></ToolContent></MockTheme>)
  const header = wrapper.findWhere(node => node.is(Header)).last();
  await act(async () => {
    const sessionType = header.find('select').at(2)
    sessionType.instance().value = "Mês";
    sessionType.simulate("change");
  });
  
})
