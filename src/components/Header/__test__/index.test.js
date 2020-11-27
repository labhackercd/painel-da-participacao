import React from 'react';
import ReactDOM from 'react-dom';
import MockTheme from './../../mockTheme';
import {shallow, mount} from "enzyme";
import {render, fireEvent, within } from '@testing-library/react';
import Header from './../index';
import { Select, MenuItem, Typography } from '@material-ui/core';

it("snapshot should not have changes", () => {
    const component = shallow(<MockTheme><Header></Header></MockTheme>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

test('Test if Header renders without crash', () => {
    const div = document.createElement("div")
    ReactDOM.render(<MockTheme><Header></Header></MockTheme>, div)
    ReactDOM.unmountComponentAtNode(div)
});

it('selects the correct option', () => {
  const mockCallback = jest.fn();
  const { getByTestId } = render(
    <div>
      <Select
        native={true}
        onChange={mockCallback}
        data-testid="my-wrapper"
        defaultValue="1"
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </div>
  );
  const wrapperNode = getByTestId("my-wrapper")
  const selectNode = wrapperNode.childNodes[0].childNodes[0];
  console.log(wrapperNode.debug())
  fireEvent.change(selectNode, { target: { value: "3" } });
  expect(mockCallback.mock.calls).toHaveLength(1);
});
