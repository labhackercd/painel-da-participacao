/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MockAdapter from 'axios-mock-adapter';
import { screen, fireEvent } from '@testing-library/react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { apiInstance } from '../../services/api/apiInstance';
import MockTheme from '../../mocks/theme/mockTheme';
import HomePage, { getStaticProps } from '../../pages/index';
import rankingUsersMock from '../../mocks/edemocracia/rankingUsersMock';

const yearlySearchQuery = '?period=yearly&ordering=start_date';

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
        <HomePage
          usersTotal={1000}
          apiLastCacheMade="01/01/2021"
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
    .onGet(`${process.env.NEXT_PUBLIC_EDEMOCRACIA_REPORT_RANKING_USERS_URL}?period=yearly`)
    .reply(200, rankingUsersMock);

  const response = await getStaticProps();
  expect(response).not.toBe(null);
  expect(response).not.toBe(undefined);
  expect(response.props.usersTotal).toBe(83458);
});

test('Test page render get data from getStaticProps with error in getDocumentsData', async () => {
  const mockInstance = new MockAdapter(apiInstance);

  mockInstance
    .onGet(`${process.env.NEXT_PUBLIC_EDEMOCRACIA_REPORT_RANKING_USERS_URL}?period=yearly`)
    .reply(400, rankingUsersMock);

  const response = await getStaticProps();
  expect(response).not.toBe(null);
  expect(response).not.toBe(undefined);
  expect(response.props.usersTotal).toBe('-');
});
