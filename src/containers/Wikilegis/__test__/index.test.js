import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MockTheme from '../../../components/mockTheme';
import Wikilegis from '../index';

import newUsersMock from './mocks/new_users_mock';
import dataRanking from './mocks/ranking_rooms_mock';

import messagesRankingMock from './mocks/messages_ranking_mock';
import participantesUsersMock from './mocks/participants_users_mock';
import questionsRankingMock from './mocks/questions_ranking_mock';
import roomsRankingMock from './mocks/rooms_ranking_mock';
import votesRankingMock from './mocks/votes_ranking_mock';

const defaultSearchQuery = '?period=monthly&start_date__year=2021&ordering=start_date';
const yearlySearchQuery = '?period=yearly&ordering=start_date';
const dailySearchQuery = '?period=daily&start_date__year=2021&start_date__month=4&ordering=start_date';

test('snapshot should not have changes', () => {
  let component;
  act(() => {
    component = shallow(<MockTheme><Wikilegis data="mockdata" /></MockTheme>);
  });
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if Audiencias renders without crash whole lifecycle', () => {
  let wrapper;
  act(() => {
    wrapper = mount(<MockTheme><Wikilegis /></MockTheme>);
  });
  expect(wrapper.exists()).toEqual(true);
});

test('Default page lifecycle is getting default informations of period by month of year 2021 and getting all years information ', async () => {
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
    .reply(200, newUsersMock.MONTHLY)

    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${yearlySearchQuery}`)
    .reply(200, participantesUsersMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, roomsRankingMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, messagesRankingMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, questionsRankingMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, votesRankingMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${yearlySearchQuery}`)
    .reply(200, newUsersMock.YEARLY)

    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${dailySearchQuery}`)
    .reply(200, participantesUsersMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${dailySearchQuery}`)
    .reply(200, roomsRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${dailySearchQuery}`)
    .reply(200, messagesRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${dailySearchQuery}`)
    .reply(200, questionsRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${dailySearchQuery}`)
    .reply(200, votesRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${dailySearchQuery}`)
    .reply(200, newUsersMock.DAILY);

  const wrapper = mount(
    <MockTheme><Wikilegis responseDataRanking={dataRanking} /></MockTheme>,
  );
  wrapper.update();

  const yearPeriodSelect = wrapper.find('select').at(0);
  yearPeriodSelect.instance().value = '0';
  yearPeriodSelect.simulate('change');
  expect(wrapper.find('select').at(0).prop('value')).toEqual('0');

  const filterButton = wrapper.find('button').at(0);
  filterButton.simulate('click');
  await wrapper.update();

  setImmediate(async () => {
    await wrapper.update();

    yearPeriodSelect.instance().value = '2021';
    yearPeriodSelect.simulate('change');
    expect(wrapper.find('select').at(0).prop('value')).toEqual('2021');

    const monthPeriodSelect = wrapper.find('select').at(1);
    monthPeriodSelect.instance().value = '4';
    monthPeriodSelect.simulate('change');
    expect(wrapper.find('select').at(1).prop('value')).toEqual('4');

    filterButton.simulate('click');
    await wrapper.update();

    setImmediate(async () => {
      await wrapper.update();
    });
  });
});

test('Audiencia page lifecycle is getting informations of days of specific month', async () => {
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
    .reply(200, newUsersMock.MONTHLY)

    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${dailySearchQuery}`)
    .reply(200, participantesUsersMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${dailySearchQuery}`)
    .reply(200, roomsRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${dailySearchQuery}`)
    .reply(200, messagesRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${dailySearchQuery}`)
    .reply(200, questionsRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${dailySearchQuery}`)
    .reply(200, votesRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${dailySearchQuery}`)
    .reply(200, newUsersMock.DAILY);

  const wrapper = mount(
    <MockTheme><Wikilegis responseDataRanking={dataRanking} /></MockTheme>,
  );
  wrapper.update();

  const yearPeriodSelect = wrapper.find('select').at(0);
  yearPeriodSelect.instance().value = '2021';
  yearPeriodSelect.simulate('change');
  expect(wrapper.find('select').at(0).prop('value')).toEqual('2021');

  const monthPeriodSelect = wrapper.find('select').at(1);
  monthPeriodSelect.instance().value = '4';
  monthPeriodSelect.simulate('change');
  expect(wrapper.find('select').at(1).prop('value')).toEqual('4');

  const filterButton = wrapper.find('button').at(0);
  filterButton.simulate('click');
  await wrapper.update();

  setImmediate(async () => {
    await wrapper.update();
  });
});

test('Audiencia page lifecycle is getting informations with no values', async () => {
  const mockInstance = new MockAdapter(axios);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${defaultSearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${defaultSearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${defaultSearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${defaultSearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${defaultSearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${defaultSearchQuery}`)
    .reply(200, [])

    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${dailySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${dailySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${dailySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${dailySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${dailySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${dailySearchQuery}`)
    .reply(200, []);

  const wrapper = await mount(
    <MockTheme><Wikilegis responseDataRanking={[]} /></MockTheme>,
  );
  await wrapper.update();

  const yearPeriodSelect = wrapper.find('select').at(0);
  yearPeriodSelect.instance().value = '2021';
  yearPeriodSelect.simulate('change');
  expect(wrapper.find('select').at(0).prop('value')).toEqual('2021');

  const monthPeriodSelect = wrapper.find('select').at(1);
  monthPeriodSelect.instance().value = '4';
  monthPeriodSelect.simulate('change');
  expect(wrapper.find('select').at(1).prop('value')).toEqual('4');

  const filterButton = wrapper.find('button').at(0);
  filterButton.simulate('click');
  await wrapper.update();

  setImmediate(async () => {
    await wrapper.update();
  });
});
