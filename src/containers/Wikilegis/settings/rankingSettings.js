/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { formatDate } from '../../../utils/format/date';

export const rankingWikilegisColumns = [
  {
    name: 'Proposta Legilastiva',
    selector: 'document.title',
    sortable: true,
    maxWidth: '500px',
    fixedHeader: true,
    cell: (row) => (
      <a
        href={`${process.env.NEXT_PUBLIC_EDEMOCRACIA_BASE_URL}${row.get_absolute_url}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#ffffff' }}
      >
        {row.document.title}
      </a>
    ),
  },
  {
    name: 'Data de Abertura',
    maxWidth: '80px',
    selector: 'openning_date',
    sortable: true,
    cell: (row) => formatDate(row.openning_date),
  },
  {
    name: 'Data de Encerramento',
    selector: 'closing_date',
    maxWidth: '80px',
    sortable: true,
    cell: (row) => formatDate(row.closing_date),
  },
  {
    name: 'Participantes',
    selector: 'participants_count',
    maxWidth: '50px',
    sortable: true,
    center: true,
  },
  {
    name: 'Opiniões',
    selector: 'suggestions_count',
    maxWidth: '50px',
    sortable: true,
    center: true,
  },
  {
    name: 'Votos',
    selector: 'vote_count',
    maxWidth: '50px',
    sortable: true,
    center: true,
  },
  {
    name: 'Parlamentar Responsável',
    maxWidth: '150px',
    selector: 'document.responsible.name',
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
