import fetchDataFromAPI from '../index';

it('fetches data from the API', () => {
  const monthSemesterYear = { year: '2020', semester: '1/2020', month: 'February' };
  expect(fetchDataFromAPI(monthSemesterYear)).not.toBeNull();
});
