import { filterRankingWikilegis } from '../filterRanking';
import * as apiMock from '../../../../mocks/wikilegis/index';

describe('Test filterRankingWikilegis function', () => {
  test('filterRankingWikilegis return data searching by title', async () => {
    const resultArray = await filterRankingWikilegis(apiMock.rankingApiMock.data, 'formulação');
    expect(resultArray.length).toBe(1);
  });
});
