import { filterRankingWikilegis } from '../filterRanking';
import documentsRanking from './mocks/documentsRanking.mock';

describe('Test filterRankingWikilegis function', () => {
  test('filterRankingWikilegis return data searching by title', async () => {
    const resultArray = await filterRankingWikilegis(documentsRanking, 'formulação');
    expect(resultArray.length).toBe(1);
  });
});
