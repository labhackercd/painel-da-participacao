import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MockTheme from '../../../components/mockTheme';
import Audiencias from '../index';

import newUsersMock from './mocks/new_users_mock';
import dataRanking from './mocks/ranking_rooms_mock';

import messagesRankingMock from './mocks/messages_ranking_mock';
import participantesUsersMock from './mocks/participants_users_mock';
import questionsRankingMock from './mocks/questions_ranking_mock';
import roomsRankingMock from './mocks/rooms_ranking_mock';
import votesRankingMock from './mocks/votes_ranking_mock';

const defaultSearchQuery = '?period=monthly&start_date__year=2021&ordering=start_date';

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

test('Default page lifecycle is getting default informations of period by month and year 2021', () => {
  const mockInstance = new MockAdapter(axios);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${defaultSearchQuery}`)
    .reply(200, participantesUsersMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${defaultSearchQuery}`)
    .reply(200, roomsRankingMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${defaultSearchQuery}`)
    .reply(200, messagesRankingMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${defaultSearchQuery}`)
    .reply(200, questionsRankingMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${defaultSearchQuery}`)
    .reply(200, votesRankingMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${defaultSearchQuery}`)
    .reply(200, newUsersMock.MONTHLY);

  const wrapper = mount(
    <MockTheme><Audiencias responseDataRanking={dataRanking} /></MockTheme>,
  );
  wrapper.update();
});
