import React from 'react';
import { mount } from 'enzyme';
import { AlertCachedData } from '../index';

test('snapshot should not have changes', () => {
  const component = mount(<AlertCachedData apiLastCacheMade="Test" />);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
