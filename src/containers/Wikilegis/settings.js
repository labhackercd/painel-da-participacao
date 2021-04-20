/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { formatDate } from '../../services/format/date';

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
    cell: (row) => (`${row.document.responsible.name} (${row.document.responsible.party_initials}-${row.document.responsible.uf})`),
  },
];
