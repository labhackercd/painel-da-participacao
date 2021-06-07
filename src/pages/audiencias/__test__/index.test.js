/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import { screen, fireEvent } from '@testing-library/react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { apiInstance } from '../../../services/api/apiInstance';
import MockTheme from '../../../mocks/theme/mockTheme';
import AudienciasPage, { getStaticProps } from '../index';
import * as apisMock from '../../../mocks/audiencias';

const yearlySearchQuery = '?period=yearly&ordering=start_date';
const defaultPropsData = {
  defaultApisData: {
    audienciasRankingData: apisMock.rankingApiMock,
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

let dateNowSpy;
beforeAll(() => {
  dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);
});

afterAll(() => {
  dateNowSpy.mockRestore();
});

test('Audiencias page snapshot should not have changes', () => {
  let component;
  act(() => {
    component = mount(
      <MockTheme>
        <AudienciasPage
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

test('Test page render get data from getStaticProps', async () => {
  const mockInstance = new MockAdapter(apiInstance);

  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_REPORT_RANKING_URL}?limit=500`)
    .reply(200, apisMock.rankingApiResponseMock)
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
    .reply(200, apisMock.newUsersApiMock.YEARLY);

  const response = await getStaticProps();
  expect(response).not.toBe(null);
  expect(response).not.toBe(undefined);
  expect(response.props.defaultApisData.audienceParticipantUsersAPIData.count).toBe(6);
  expect((response.props.defaultApisData.audienciasRankingData).length).not.toBe(0);
});

test('Test page render get data from getStaticProps with error in getRoomsData', async () => {
  const mockInstance = new MockAdapter(apiInstance);

  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_AUDIENCIAS_REPORT_RANKING_URL}?limit=500`)
    .reply(400, apisMock.rankingApiResponseMock)
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
    .reply(200, apisMock.newUsersApiMock.YEARLY);

  const response = await getStaticProps();
  expect(response).not.toBe(null);
  expect(response).not.toBe(undefined);
  expect((response.props.defaultApisData.audienciasRankingData).length).toBe(0);
});
