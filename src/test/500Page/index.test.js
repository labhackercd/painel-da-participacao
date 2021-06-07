import React from 'react';
import { mount } from 'enzyme';
import MockTheme from '../../mocks/theme/mockTheme';
import Custom500 from '../../pages/500';

test('Snapshot 500 page should not have changes and should mount', () => {
  const component = mount(<MockTheme><Custom500 /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
