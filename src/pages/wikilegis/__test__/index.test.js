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
import WikilegisPage, { getStaticProps } from '../index';
import * as apisMock from '../../../mocks/wikilegis';

const yearlySearchQuery = '?period=yearly&ordering=start_date';
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
  apiLastCacheMadeHour: 'Mon Jun 07 2021 11:13:14 GMT-0300 (Brasilia Standard Time)',
};

let dateNowSpy;
beforeAll(() => {
  dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);
});

afterAll(() => {
  dateNowSpy.mockRestore();
});

test('Wikilegis page snapshot should not have changes', () => {
  let component;
  act(() => {
    component = mount(
      <MockTheme>
        <WikilegisPage
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
  const formatedQueryDate = await format(new Date(), 'yyyy-LL-dd', { locale: ptBR });

  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_DOCUMENTS_RANKING_URL}?limit=500&closing_date__lt=${formatedQueryDate}`)
    .reply(200, apisMock.rankingApiResponseMock)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.legislativeProposalsMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.opinionsApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.votesApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.YEARLY);

  const response = await getStaticProps();
  expect(response).not.toBe(null);
  expect(response).not.toBe(undefined);
  expect(response.props.defaultApisData.wikilegisParticipantUsersAPIData.count).toBe(2);
  expect((response.props.defaultApisData.wikilegisRankingData).length).not.toBe(0);
});

test('Test page render get data from getStaticProps with error in getDocumentsData', async () => {
  const mockInstance = new MockAdapter(apiInstance);
  const formatedQueryDate = await format(new Date(), 'yyyy-LL-dd', { locale: ptBR });

  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_DOCUMENTS_RANKING_URL}?limit=500&closing_date__lt=${formatedQueryDate}`)
    .reply(400, apisMock.rankingApiResponseMock)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_PARTICIPANT_USERS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.participantsApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_LEGISLATIVE_PROPOSALS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.legislativeProposalsMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_OPINIONS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.opinionsApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_VOTES_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.votesApiMock.YEARLY)
    .onGet(`${process.env.NEXT_PUBLIC_WIKILEGIS_NEW_USERS_URL}${yearlySearchQuery}`)
    .reply(200, apisMock.newUsersApiMock.YEARLY);

  const response = await getStaticProps();
  expect(response).not.toBe(null);
  expect(response).not.toBe(undefined);
  expect(response.props.defaultApisData.wikilegisParticipantUsersAPIData.count).toBe(2);
  expect((response.props.defaultApisData.wikilegisRankingData).length).toBe(0);
});
