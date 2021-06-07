import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import { apiInstance } from '../../../services/api/apiInstance';
import MockTheme from '../../../mocks/theme/mockTheme';
import Audiencias from '../index';
import * as apisMock from '../../../mocks/audiencias';

const monthlySearchQuery = '?period=monthly&start_date__year=2021&ordering=start_date';
const yearlySearchQuery = '?period=yearly&ordering=start_date';
const dailySearchQuery = '?period=daily&start_date__year=2021&start_date__month=4&ordering=start_date';

const defaultPropsData = {
  defaultApisData: {
    audienciasRankingData: apisMock.rankingApiMock.data,
    audienceParticipantUsersAPIData: apisMock.participantsApiMock.YEARLY,
    audiencesRoomsAPIData: apisMock.roomsApiMock.YEARLY,
    audienceMessagesAPIData: apisMock.messagesApiMock.YEARLY,
    audienceQuestionsAPIData: apisMock.questionsApiMock.YEARLY,
    audienceNewUsersAPIData: apisMock.newUsersApiMock.YEARLY,
    audienceVotesAPIData: apisMock.votesApiMock.YEARLY,
  },
  apiLastCacheMade: '01/01/2021, 12:00',
  apiLastCacheMadeHour: (new Date()).toString(),
};

test('snapshot should not have changes', () => {
  let component;
  act(() => {
    component = shallow(
      <MockTheme>
        <Audiencias
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

test('Test if Audiencias renders without crash whole lifecycle', () => {
  let wrapper;
  act(() => {
    wrapper = mount(
      <MockTheme>
        <Audiencias
          defaultApisData={defaultPropsData.defaultApisData}
          apiLastCacheMade={defaultPropsData.apiLastCacheMade}
          apiLastCacheMadeHour={defaultPropsData.apiLastCacheMadeHour}
        />
      </MockTheme>,
    );
  });
  expect(wrapper.exists()).toEqual(true);
});

test('Default page lifecycle is getting default informations of period by month of year 2021 and getting all years information ', async () => {
  const mockInstance = new MockAdapter(apiInstance);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.roomsApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.messagesApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.questionsApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.votesApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.YEARLY)

    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.roomsApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.messagesApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.questionsApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.votesApiMock.MONTHLY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${monthlySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.MONTHLY)

    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${dailySearchQuery}`)
    .reply(200, apisMock.roomsApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${dailySearchQuery}`)
    .reply(200, apisMock.messagesApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${dailySearchQuery}`)
    .reply(200, apisMock.questionsApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${dailySearchQuery}`)
    .reply(200, apisMock.votesApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.DAILY);

  const wrapper = await mount(
    <MockTheme>
      <Audiencias
        defaultApisData={defaultPropsData.defaultApisData}
        apiLastCacheMade={defaultPropsData.apiLastCacheMade}
        apiLastCacheMadeHour={defaultPropsData.apiLastCacheMadeHour}
      />
    </MockTheme>,
  );
  wrapper.update();

  const yearPeriodSelect = wrapper.find('select').at(0);
  yearPeriodSelect.instance().value = '2020';
  yearPeriodSelect.simulate('change');
  expect(wrapper.find('select').at(0).prop('value')).toEqual('2020');

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
  const mockInstance = new MockAdapter(apiInstance);
  mockInstance

    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${dailySearchQuery}`)
    .reply(200, apisMock.roomsApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${dailySearchQuery}`)
    .reply(200, apisMock.messagesApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${dailySearchQuery}`)
    .reply(200, apisMock.questionsApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${dailySearchQuery}`)
    .reply(200, apisMock.votesApiMock.DAILY)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${dailySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.DAILY);

  const wrapper = mount(
    <MockTheme>
      <Audiencias
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

test('Audiencia page lifecycle is getting informations with no values', async () => {
  const mockInstance = new MockAdapter(apiInstance);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${yearlySearchQuery}`)
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
    <MockTheme>
      <Audiencias
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

test('Audiencia page lifecycle returning error at totals', async () => {
  const mockInstance = new MockAdapter(apiInstance);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${yearlySearchQuery}`)
    .reply(400, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${yearlySearchQuery}`)
    .reply(400, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${yearlySearchQuery}`)
    .reply(400, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${yearlySearchQuery}`)
    .reply(200, []);

  const wrapper = await mount(
    <MockTheme>
      <Audiencias
        defaultApisData={defaultPropsData.defaultApisData}
        apiLastCacheMade={defaultPropsData.apiLastCacheMade}
        apiLastCacheMadeHour={defaultPropsData.apiLastCacheMadeHour}
      />
    </MockTheme>,
  );
  await wrapper.update();
});

test('Audiencia page lifecycle test to get last update from questions', async () => {
  const mockInstance = new MockAdapter(apiInstance);
  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_PARTICIPANT_USERS_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_ROOMS_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_MESSAGES_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_QUESTIONS_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, defaultPropsData.defaultApisData.audienciasRankingData)
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_VOTES_RANKING_URL}${yearlySearchQuery}`)
    .reply(200, [])
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}${yearlySearchQuery}`)
    .reply(200, []);

  const wrapper = await mount(
    <MockTheme>
      <Audiencias
        defaultApisData={defaultPropsData.defaultApisData}
        apiLastCacheMade={defaultPropsData.apiLastCacheMade}
        apiLastCacheMadeHour={defaultPropsData.apiLastCacheMadeHour}
      />
    </MockTheme>,
  );
  await wrapper.update();
});
