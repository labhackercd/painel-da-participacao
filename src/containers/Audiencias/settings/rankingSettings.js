/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { formatDate } from '../../../utils/format/date';

export const rankingAudienciaColumns = [
  {
    name: 'Título da audiência',
    selector: (row) => ((row.reunion_theme === null || row.reunion_theme === '') ? row.title_reunion : row.reunion_theme),
    sortable: true,
    maxWidth: '500px',
    cell: (row) => (
      (row.is_active)
        ? (
          <a
            href={`${process.env.NEXT_PUBLIC_EDEMOCRACIA_BASE_URL}${row.get_absolute_url}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff' }}
          >
            {((row.reunion_theme === null || row.reunion_theme === '') ? row.title_reunion : row.reunion_theme)}
          </a>
        )
        : ((row.reunion_theme === null || row.reunion_theme === '') ? row.title_reunion : row.reunion_theme)
    ),
  },
  {
    name: 'Status',
    selector: (row) => (row.is_active ? 'Realizada' : 'Cancelada'),
    sortable: true,
    maxWidth: '100px',
    center: true,
    cell: (row) => (row.is_active ? 'Realizada' : 'Cancelada'),
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

export const rankingAudienciasHeaders = [
  { label: 'Título da Reunião', key: 'title_reunion' },
  { label: 'Tema da Reunião', key: 'reunion_theme' },
  { label: 'Proposta Legislativa', key: 'legislative_body_initials' },
  { label: 'Data', key: 'date' },
  { label: 'Número de Mensagens', key: 'messages_count' },
  { label: 'Número de Perguntas', key: 'questions_count' },
  { label: 'Número de Votos', key: 'votes_count' },
  { label: 'Número de Participantes', key: 'participants_count' },
  { label: 'Número de Perguntas', key: 'questions_count' },
  { label: 'URL', key: 'get_absolute_url' },
  { label: 'Audiência Aconteceu', key: 'is_active' },
];
