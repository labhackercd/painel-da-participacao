import React from 'react';
import { shallow, mount } from 'enzyme';
import MockTheme from '../../mockTheme';
import ChartDataFrame from '../index';

it('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><ChartDataFrame /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

it('snapshot should not have changes', () => {
  const component = mount(
    <MockTheme>
      <ChartDataFrame height="15vh" paddingRight="0.5rem" listView={false} download={false} title="Total usuários" className="">
        <div />
      </ChartDataFrame>
    </MockTheme>,
  );
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
