import React from 'react';
import fetchDataFromAPI from './../index';

it('fetches data from the API', () => {
  let monthSemesterYear = {year: '2020', semester: '1/2020', month: 'February'}
  expect(fetchDataFromAPI(monthSemesterYear)).not.toBeNull()
})
