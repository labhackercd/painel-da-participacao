import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import MockTheme from '../../mocks/theme/mockTheme';
import Custom404 from '../../pages/404';

test('404 Snapshot page should render and not have changes', () => {
  let component;
  act(() => {
    component = mount(
      <MockTheme>
        <Custom404 />
      </MockTheme>,
    );
  });
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
