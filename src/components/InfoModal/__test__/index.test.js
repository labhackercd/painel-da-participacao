/* eslint-disable no-unused-expressions */

import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import { screen, render } from '@testing-library/react';
import InfoModal from '../index';
import customTheme from '../../../styles/theme';
import MockTheme from '../../../mocks/theme/mockTheme';

describe('Info Modal Component', () => {
  test('should render text', () => {
    const onClose = jest.fn();
    const text = 'Sample Text';
    render(
      <MockTheme>
        <InfoModal
          title={text}
          handleClose={onClose}
          open
          toolTipColor={customTheme.palette.audiencias.seabuckthorn}
          toolTipText={text}
        />
      </MockTheme>,
    );

    expect(screen.getAllByText(text)).toBeVisible;
  });

  test('should click close button', () => {
    const onClose = jest.fn();
    const text = 'Sample Text';
    render(
      <MockTheme>
        <InfoModal
          title={text}
          handleClose={onClose}
          open
          toolTipColor={customTheme.palette.audiencias.seabuckthorn}
          toolTipText={text}
        />
      </MockTheme>,
    );

    const closeButton = screen.getByTestId('close-icon');

    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled;
  });
});
