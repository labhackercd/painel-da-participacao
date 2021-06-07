import React from 'react';
import { mount } from 'enzyme';
import MockTheme from '../../mocks/theme/mockTheme';
import Api from '../../pages/apis';

test('Snapshot Api page should not have changes', () => {
  const component = mount(<MockTheme><Api /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
