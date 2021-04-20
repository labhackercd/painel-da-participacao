/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MockTheme from '../../../components/mockTheme';
import Wikilegis from '../index';

import newUsersMock from './__mocks__/new_users_mock';

import participantesUsersMock from './__mocks__/participants_users_mock';
import legislativeProposalsMock from './__mocks__/legislative_proposals_mock';
import votesRankingMock from './__mocks__/votes_ranking_mock';
import opinionsRankingMock from './__mocks__/opinions_ranking_mock';
import documentsRanking from './__mocks__/documents_ranking';

const defaultSearchQuery = '?period=monthly&start_date__year=2021&ordering=start_date';
const yearlySearchQuery = '?period=yearly&ordering=start_date';
const dailySearchQuery = '?period=daily&start_date__year=2021&start_date__month=4&ordering=start_date';

const responseDataRanking = { data: documentsRanking, lastUpdate: '15/03/2021 15:05' };

test('snapshot should not have changes', () => {
  let component;
  act(() => {
    component = shallow(
      <MockTheme><Wikilegis responseDataRanking={responseDataRanking} /></MockTheme>,
    );
  });
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if Wikilegis renders without crash whole lifecycle', async () => {
  const wrapper = mount(
    <MockTheme><Wikilegis responseDataRanking={responseDataRanking} /></MockTheme>,
  );
  await act(async () => wrapper);

  expect(wrapper.exists()).toEqual(true);
});

test('Default page lifecycle is getting default informations of period by month of year 2021 and getting all years information ', async () => {
  const mockInstance = new MockAdapter(axios);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${defaultSearchQuery}`)
    .reply(200, participantesUsersMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${defaultSearchQuery}`)
    .reply(200, legislativeProposalsMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${defaultSearchQuery}`)
    .reply(200, opinionsRankingMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${defaultSearchQuery}`)
    .reply(200, votesRankingMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${defaultSearchQuery}`)
    .reply(200, newUsersMock.MONTHLY)

    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${yearlySearchQuery}`)
    .reply(200, participantesUsersMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${yearlySearchQuery}`)
    .reply(200, legislativeProposalsMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${yearlySearchQuery}`)
    .reply(200, opinionsRankingMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${yearlySearchQuery}`)
    .reply(200, votesRankingMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${yearlySearchQuery}`)
    .reply(200, newUsersMock.YEARLY)

    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${dailySearchQuery}`)
    .reply(200, participantesUsersMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${dailySearchQuery}`)
    .reply(200, legislativeProposalsMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${dailySearchQuery}`)
    .reply(200, opinionsRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${dailySearchQuery}`)
    .reply(200, votesRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${dailySearchQuery}`)
    .reply(200, newUsersMock.DAILY);

  const wrapper = mount(
    <MockTheme><Wikilegis responseDataRanking={responseDataRanking} /></MockTheme>,
  );
  await act(async () => wrapper);

  // Get informations of whole period
  const yearPeriodSelect = wrapper.find('select').at(0);
  yearPeriodSelect.instance().value = '0';
  await yearPeriodSelect.simulate('change');
  expect(await wrapper.find('select').at(0).prop('value')).toEqual('0');

  const filterButton = await wrapper.find('button').at(0);
  await filterButton.simulate('click');
  await wrapper.update();

  setImmediate(async () => {
    await wrapper.update();

    // Get informations of january in 2020 (Daily)

    yearPeriodSelect.instance().value = '2020';
    yearPeriodSelect.simulate('change');
    expect(wrapper.find('select').at(0).prop('value')).toEqual('2020');

    const monthPeriodSelect = wrapper.find('select').at(1);
    monthPeriodSelect.instance().value = '1';
    monthPeriodSelect.simulate('change');
    expect(wrapper.find('select').at(1).prop('value')).toEqual('1');

    filterButton.simulate('click');
    await wrapper.update();

    setImmediate(async () => {
      await wrapper.update();
    });
  });
});

test('Wikilegis page lifecycle is getting informations of days of specific month', async () => {
  const mockInstance = new MockAdapter(axios);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${defaultSearchQuery}`)
    .reply(200, participantesUsersMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${defaultSearchQuery}`)
    .reply(200, legislativeProposalsMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${defaultSearchQuery}`)
    .reply(200, opinionsRankingMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${defaultSearchQuery}`)
    .reply(200, votesRankingMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${defaultSearchQuery}`)
    .reply(200, newUsersMock.MONTHLY)

    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${dailySearchQuery}`)
    .reply(200, participantesUsersMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${dailySearchQuery}`)
    .reply(200, legislativeProposalsMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${dailySearchQuery}`)
    .reply(200, opinionsRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${dailySearchQuery}`)
    .reply(200, votesRankingMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${dailySearchQuery}`)
    .reply(200, newUsersMock.DAILY);

  const wrapper = mount(
    <MockTheme><Wikilegis responseDataRanking={responseDataRanking} /></MockTheme>,
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

test('Wikilegis page lifecycle is getting informations with no values', async () => {
  const mockInstance = new MockAdapter(axios);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${defaultSearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${defaultSearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${defaultSearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${defaultSearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${defaultSearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${dailySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${dailySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${dailySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${dailySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${dailySearchQuery}`)
    .reply(200, []);

  const wrapper = await mount(
    <MockTheme><Wikilegis responseDataRanking={responseDataRanking} /></MockTheme>,
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
