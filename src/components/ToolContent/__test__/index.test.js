import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import {shallow, render, mount} from "enzyme";
import DashboardInitial from './../index';
import { act } from 'react-dom/test-utils';
import Header from './../../Header';

it("snapshot should not have changes", () => {
  let component;
  act(() => {
    component = shallow(<MockTheme><DashboardInitial page={"testPage"}></DashboardInitial></MockTheme>);
  })
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

it('tests clicking in header doesnt break page', () => {
  const wrapper = mount(<MockTheme><DashboardInitial page={"testPage"}/></MockTheme>)
  const header = wrapper.findWhere(node => node.is(Header)).last()
  const sessionType = header.find('select').at(0)
  sessionType.instance().value = "Ano";
  sessionType.simulate("change");
})

it('tests clicking in header doesnt break page', () => {
  const wrapper = mount(<MockTheme><DashboardInitial page={"testPage"}/></MockTheme>)
  const header = wrapper.findWhere(node => node.is(Header)).last()
  const sessionType = header.find('select').at(1)
  sessionType.instance().value = "Semestre";
  sessionType.simulate("change");
})

it('tests clicking in header doesnt break page', () => {
  const wrapper = mount(<MockTheme><DashboardInitial page={"testPage"}/></MockTheme>)
  const header = wrapper.findWhere(node => node.is(Header)).last()
  const sessionType = header.find('select').at(2)
  sessionType.instance().value = "Mês";
  sessionType.simulate("change");
})
