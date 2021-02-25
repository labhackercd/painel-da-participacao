import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MockTheme from '../../../components/mockTheme';
import Audiencias from '../index';

import newUsersMockResponse from './mocks/new_users_mock';

test('snapshot should not have changes', () => {
  let component;
  act(() => {
    component = shallow(<MockTheme><Audiencias data="mockdata" /></MockTheme>);
  });
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if Audiencias renders without crash whole lifecycle', () => {
  let wrapper;
  act(() => {
    wrapper = mount(<MockTheme><Audiencias /></MockTheme>);
  });
  expect(wrapper.exists()).toEqual(true);
});

test('Test audiencias default page lifecycle with requests', async (done) => {
  const mockInstance = new MockAdapter(axios);
  const period = 'yearly';
  const urlNewUsersByYear = `${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}?period=${period}&ordering=start_date`;
  await mockInstance.onGet(process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL)
    .reply(200, newUsersMockResponse)
    .onGet(urlNewUsersByYear).reply(200, newUsersMockResponse);

  const wrapper = await mount(<MockTheme><Audiencias /></MockTheme>);
  wrapper.update();
  done();
});
