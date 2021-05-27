/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import { apiInstance } from '../../../services/api/apiInstance';
import MockTheme from '../../../mocks/theme/mockTheme';
import Wikilegis from '../index';
import * as apisMock from '../../../mocks/wikilegis';

const defaultSearchQuery = '?period=yearly&ordering=start_date';
const monthlySearchQuery = '?period=monthly&start_date__year=2021&ordering=start_date';
const yearlySearchQuery = '?period=yearly&ordering=start_date';
const dailySearchQuery = '?period=daily&start_date__year=2021&start_date__month=4&ordering=start_date';

const defaultPropsData = {
  defaultApisData: {
    wikilegisRankingData: apisMock.rankingApiMock.YEARLY,
    wikilegisParticipantUsersAPIData: apisMock.participantsApiMock.YEARLY,
    wikilegisLegislativeProposalsAPIData: apisMock.legislativeProposalsMock.YEARLY,
    wikilegisOpinionsAPIData: apisMock.opinionsApiMock.YEARLY,
    wikilegisVotesAPIData: apisMock.votesApiMock.YEARLY,
    wikilegisNewUsersAPIData: apisMock.newUsersApiMock.YEARLY,
  },
  apiLastCacheMade: '01/01/2021, 12:00',
  apiLastCacheMadeHour: (new Date()).toString(),
};

test('snapshot should not have changes', () => {
  let component;
  act(() => {
    component = shallow(
      <MockTheme>
        <Wikilegis
          defaultApisData={defaultPropsData.defaultApisData}
          apiLastCacheMade={defaultPropsData.apiLastCacheMade}
          apiLastCacheMadeHour={defaultPropsData.apiLastCacheMadeHour}
        />
      </MockTheme>,
    );
  });
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

test('Test if Wikilegis renders without crash whole lifecycle', async () => {
  const wrapper = mount(
    <MockTheme>
      <Wikilegis
        defaultApisData={defaultPropsData.defaultApisData}
        apiLastCacheMade={defaultPropsData.apiLastCacheMade}
        apiLastCacheMadeHour={defaultPropsData.apiLastCacheMadeHour}
      />
    </MockTheme>,
  );
  await act(async () => wrapper);

  expect(wrapper.exists()).toEqual(true);
});

test('Default page lifecycle is getting default informations of period by month of year 2021 and getting all years information ', async () => {
  const mockInstance = new MockAdapter(apiInstance);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.legislativeProposalsMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.opinionsApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.votesApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.MONTHLY)

    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.legislativeProposalsMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.opinionsApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.votesApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.MONTHLY)

    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.legislativeProposalsMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.opinionsApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${dailySearchQuery}`)
    .reply(200, apisMock.votesApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.DAILY);

  const wrapper = mount(
    <MockTheme>
      <Wikilegis
        defaultApisData={defaultPropsData.defaultApisData}
        apiLastCacheMade={defaultPropsData.apiLastCacheMade}
        apiLastCacheMadeHour={defaultPropsData.apiLastCacheMadeHour}
      />
    </MockTheme>,
  );
  await act(async () => wrapper);

  // Get informations of whole period
  const yearPeriodSelect = wrapper.find('select').at(0);
  yearPeriodSelect.instance().value = '2021';
  await yearPeriodSelect.simulate('change');
  expect(await wrapper.find('select').at(0).prop('value')).toEqual('2021');

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
  const mockInstance = new MockAdapter(apiInstance);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.legislativeProposalsMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.opinionsApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.votesApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.MONTHLY)

    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.legislativeProposalsMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.opinionsApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${dailySearchQuery}`)
    .reply(200, apisMock.votesApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.DAILY);

  const wrapper = mount(
    <MockTheme>
      <Wikilegis
        defaultApisData={defaultPropsData.defaultApisData}
        apiLastCacheMade={defaultPropsData.apiLastCacheMade}
        apiLastCacheMadeHour={defaultPropsData.apiLastCacheMadeHour}
      />
    </MockTheme>,
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
  const mockInstance = new MockAdapter(apiInstance);
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
    <MockTheme>
      <Wikilegis
        defaultApisData={defaultPropsData.defaultApisData}
        apiLastCacheMade={defaultPropsData.apiLastCacheMade}
        apiLastCacheMadeHour={defaultPropsData.apiLastCacheMadeHour}
      />
    </MockTheme>,
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
