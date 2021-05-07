/* eslint-disable no-nested-ternary */
import React from 'react';
import { formatDate } from '../../services/format/date';

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

export const audiencesChartsUsersSettings = {
  chartType: 'LineChart',
  options: {
    legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
    colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
    lineWidth: 5,
    pointSize: 15,
    hAxis: {
      textStyle: { color: '#FFFFFF' },
      gridlines: { color: 'transparent' },
      titleTextStyle: { color: 'white' },
    },
    vAxis: { gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' }, format: '##.##' },
    series: {
      1: { curveType: 'function' },
    },
    backgroundColor: '#000000',
  },
};

export const audiencesWithMoreParticipation = {
  chartType: 'ColumnChart',
  options: {
    bars: 'vertical',
    legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
    isStacked: 'true',
    colors: ['#744600', '#EBE23B', '#DA7F0B'],
    bar: { groupWidth: '80%' },
    hAxis: { textStyle: { color: 'white' }, titleTextStyle: { color: 'white' } },
    vAxis: {
      minValue: 0,
      gridlines: { color: 'transparent' },
      textStyle: { color: '#FFFFFF' },
      format: '###.##',
    },
    backgroundColor: '#000000',
  },
};
