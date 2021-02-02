import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockTheme from '../../mockTheme';
// import Audiencias from '../../Audiencias/index';
// import Header from '../../Header';
import ToolContent from '../index';

/*
act(() => {

});

await waitFor(() => {

});
*/
it('snapshot should not have changes', () => {
  const divReact = React.createElement('div');
  let component;
  act(() => {
    component = shallow(<MockTheme><ToolContent>{divReact}</ToolContent></MockTheme>);
  });
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

/*
it('tests clicking in header doesnt break page', async () => {
  const wrapper = mount(<MockTheme><ToolContent><Audiencias /></ToolContent></MockTheme>);
  const header = wrapper.findWhere((node) => node.is(Header)).last();
  await act(async () => {
    const sessionType = header.find('select').at(0);
    sessionType.instance().value = 'Ano';
    sessionType.simulate('change');
  });
});

it('tests clicking in header doesnt break page', async () => {
  const wrapper = mount(<MockTheme><ToolContent><Audiencias /></ToolContent></MockTheme>);
  const header = wrapper.findWhere((node) => node.is(Header)).last();
  await act(async () => {
    const sessionType = header.find('select').at(1);
    sessionType.instance().value = 'Semestre';
    sessionType.simulate('change');
  });
});

it('tests clicking in header doesnt break page', async () => {
  const wrapper = mount(<MockTheme><ToolContent><Audiencias /></ToolContent></MockTheme>);
  const header = wrapper.findWhere((node) => node.is(Header)).last();
  await act(async () => {
    const sessionType = header.find('select').at(2);
    sessionType.instance().value = 'Mês';
    sessionType.simulate('change');
  });
});
*/
