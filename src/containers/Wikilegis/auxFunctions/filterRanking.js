/* eslint-disable import/prefer-default-export */
import { formatDate } from '../../../utils/format/date';

export function filterRankingWikilegis(data, searchedText) {
  const filter = data.filter(
    (item) => (
      (item.document.title ? item.document.title.toLowerCase() : '').includes(searchedText.toLowerCase())
      || (item.openning_date ? formatDate(item.openning_date) : '').includes(searchedText.toLowerCase())
      || (item.closing_date ? formatDate(item.closing_date) : '').includes(searchedText.toLowerCase())
      || (item.suggestions_count ? item.suggestions_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.vote_count ? item.vote_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.participants_count ? item.participants_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.votes_count ? item.votes_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.document.responsible.name.toLowerCase() ? item.document.responsible.name.toLowerCase() : '').includes(searchedText.toLowerCase())
      || (item.document.responsible.party_initials.toLowerCase() ? item.document.responsible.party_initials.toLowerCase() : '').includes(searchedText.toLowerCase())
      || (item.document.responsible.uf.toLowerCase() ? item.document.responsible.uf.toLowerCase() : '').includes(searchedText.toLowerCase())
    ),
  );
  return filter;
}
