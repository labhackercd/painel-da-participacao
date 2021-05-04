/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { formatDate } from '../../services/format/date';

export const rankingAudienciaColumns = [
  {
    name: 'Título da audiência',
    selector: 'title',
    sortable: true,
    maxWidth: '500px',
    cell: (row) => (
      <a
        href={`${process.env.NEXT_PUBLIC_EDEMOCRACIA_BASE_URL}${row.get_absolute_url}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#ffffff', textDecoration: 'none' }}
      >
        {((row.reunion_theme === null || row.reunion_theme === '') ? row.title_reunion : row.reunion_theme)}
      </a>
    ),
  },
  {
    name: 'Data',
    selector: 'date',
    sortable: true,
    maxWidth: '50px',
    center: true,
    cell: (row) => formatDate(row.date),
  },
  {
    name: 'Participantes',
    selector: 'participants_count',
    sortable: true,
    maxWidth: '50px',
    center: true,
  },
  {
    name: 'Perguntas',
    selector: 'questions_count',
    sortable: true,
    maxWidth: '50px',
    center: true,
  },
  {
    name: 'Votos',
    selector: 'votes_count',
    sortable: true,
    maxWidth: '50px',
    center: true,
  },
  {
    name: 'Mensagens',
    selector: 'messages_count',
    sortable: true,
    maxWidth: '50px',
    center: true,
  },
  {
    name: 'Comissão',
    selector: 'legislative_body_initials',
    sortable: true,
    maxWidth: '120px',
    center: true,
  },
  {
    name: 'Tipo da Reunião',
    selector: 'reunion_type',
    sortable: true,
    maxWidth: '160px',
    center: true,
  },
];

export function filterRankingAudiencias(data, searchedText) {
  const filter = data.filter(
    (item) => (
      item.date.toLowerCase().includes(searchedText.toLowerCase())
      || (((item.reunion_theme === null || item.reunion_theme === '') ? item.title_reunion : item.reunion_theme) ? ((item.reunion_theme === null || item.reunion_theme === '') ? item.title_reunion : item.reunion_theme).toLowerCase() : '').includes(searchedText.toLowerCase())
      || (item.legislative_body_initials ? item.legislative_body_initials.toLowerCase() : '').includes(searchedText.toLowerCase())
      || (item.messages_count ? item.messages_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.participants_count ? item.participants_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.questions_count ? item.questions_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.reunion_type ? item.reunion_type.toLowerCase() : '').includes(searchedText.toLowerCase())
      || (item.votes_count ? item.votes_count.toString() : '').includes(searchedText.toLowerCase())
      || (item.date ? formatDate(item.date) : '').includes(searchedText.toLowerCase())
    ),
  );
  return filter;
}
