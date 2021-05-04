/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { formatDate } from '../../services/format/date';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const rankingWikilegisColumns = [
  {
    name: 'Proposta Legilastiva',
    selector: 'document.title',
    sortable: true,
    minWidth: '550px',
    cell: (row) => (
      <a
        href={`${process.env.NEXT_PUBLIC_EDEMOCRACIA_BASE_URL}${row.get_absolute_url}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#ffffff', textDecoration: 'none' }}
      >
        {row.document.title}
      </a>
    ),
  },
  {
    name: 'Data de Abertura',
    sortable: true,
    cell: (row) => formatDate(row.openning_date),
  },
  {
    name: 'Data de Encerramento',
    sortable: true,
    cell: (row) => formatDate(row.closing_date),
  },
  {
    name: 'Participantes',
    selector: 'participants_count',
    sortable: true,
    center: true,
  },
  {
    name: 'Opiniões',
    selector: 'suggestions_count',
    sortable: true,
    center: true,
  },
  {
    name: 'Votos',
    selector: 'vote_count',
    sortable: true,
    center: true,
  },
  {
    name: 'Parlamentar Responsável',
    selector: 'document.responsible',
    sortable: true,
    center: true,
    cell: (row) => (`${(row.document.responsible.name.toLowerCase()).replace(/(^|\s)\S/g, (l) => l.toUpperCase())} (${row.document.responsible.party_initials}-${row.document.responsible.uf})`),
  },
];

export const rankingWikilegisHeaders = [
  { label: 'Título', key: 'document.title' },
  { label: 'Descrição', key: 'document.description' },
  { label: 'Tipo da Proposta Legislativa', key: 'document.document_type.initials' },
  { label: 'Número Proposta Legislativa', key: 'document.number' },
  { label: 'Ano da Proposta Legislativa', key: 'document.year' },
  { label: 'Tema', key: 'document.themes[0].name' },
  { label: 'Data de Abertura', key: 'openning_date' },
  { label: 'Data de Encerramento', key: 'closing_date' },
  { label: 'Parlamentar responsável', key: 'document.responsible.name' },
  { label: 'Partido do Parlamentar Responsável', key: 'document.responsible.party_initials' },
  { label: 'UF do Parlamentar Responsável', key: 'document.responsible.uf' },
  { label: 'Número de Opiniões', key: 'suggestions_count' },
  { label: 'Número de Votos', key: 'vote_count' },
  { label: 'Número de Participantes', key: 'participants_count' },
  { label: 'URL', key: 'get_absolute_url' },
];

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
