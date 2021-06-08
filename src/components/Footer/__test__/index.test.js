import React from 'react';
import { shallow } from 'enzyme';
import MockTheme from '../../../mocks/theme/mockTheme';
import Footer from '../index';

test('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><Footer /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
