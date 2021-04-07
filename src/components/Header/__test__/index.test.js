import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Header from '../index';
import MockTheme from '../../mockTheme';

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
      <Header
        title="Audiências Interativas"
        year="2021"
        monthPeriod="1"
        headerColors={headerColors}
      />
    </MockTheme>,
  );
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if Header renders without crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MockTheme>
      <Header
        title="Audiências Interativas"
        year="2021"
        monthPeriod="1"
        headerColors={headerColors}
      />
    </MockTheme>, div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

test('test onchange of year select input field', () => {
  const wrapper = mount(
    <MockTheme>
      <Header
        title="Audiências Interativas"
        year="2021"
        monthPeriod="1"
        headerColors={headerColors}
      />
    </MockTheme>,
  );
  const sessionType = wrapper.find('select').at(0);
  sessionType.instance().value = '2021';
  sessionType.simulate('change');
  expect(wrapper.find('select').at(0).prop('value')).toEqual('2021');
});

test('Test onchange of Year Period select input field', () => {
  const wrapper = mount(
    <MockTheme>
      <Header
        title="Audiências Interativas"
        year="2021"
        monthPeriod="1"
        headerColors={headerColors}
      />
    </MockTheme>,
  );
  const sessionType = wrapper.find('select').at(1);
  sessionType.instance().value = '3';
  sessionType.simulate('change');
  expect(wrapper.find('select').at(1).prop('value')).toEqual('3');
});
