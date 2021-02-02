import React from 'react';
import { shallow } from 'enzyme';
import MockTheme from '../../mockTheme';
import ContentBox from '../index';

it('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><ContentBox /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
