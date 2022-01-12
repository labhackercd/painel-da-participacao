/* eslint-disable no-unused-expressions */

import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import { screen, render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import HeaderMobile from '../index';
import MockTheme from '../../../mocks/theme/mockTheme';

const headerColors = {
  borderColor: '#DA7F0B',
  button: {
    main: '#DA7F0B',
    hover: '#C47209',
  },
  toolTipBackground: '14D768',
};

it('snapshot should not have changes', () => {
  const component = shallow(
    <MockTheme>
      <HeaderMobile
        initialYear="2021"
        headerColors={headerColors}
      />
    </MockTheme>,
  );
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if Header Mobile renders without crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MockTheme>
      <HeaderMobile
        initialYear="2021"
        headerColors={headerColors}
      />
    </MockTheme>, div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

test('test period button', () => {
  const text = 'Todo Período';
  render(
    <MockTheme>
      <HeaderMobile
        initialYear="2021"
        headerColors={headerColors}
      />
    </MockTheme>,
  );

  const button = screen.getByText(text);

  fireEvent.click(button);

  expect(screen.getAllByText(text)).toBeVisible;
});

test('test months button', () => {
  const text = 'Todos os meses';
  render(
    <MockTheme>
      <HeaderMobile
        initialYear="2021"
        headerColors={headerColors}
      />
    </MockTheme>,
  );

  const button = screen.getByText(text);

  fireEvent.click(button);

  expect(screen.getAllByText(text)).toBeVisible;
});
