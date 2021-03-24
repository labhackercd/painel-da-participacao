import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import PropTypes from 'prop-types';

createTheme('darkLAB', {
  text: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    disabled: '#FFFFFF',
  },
  background: {
    default: '#000000',
  },
  context: {
    text: '#FFFFFF',
    background: '#FFFFFF',
  },
  divider: {
    default: '#2F2F2F',
  },
  button: {
    default: '#FFFFFF',
    focus: 'rgba(255, 255, 255, .12)',
    hover: 'rgba(255, 255, 255, .12)',
    disabled: 'rgba(255, 255, 255, .18)',
  },
  selected: {
    default: '#9e5e0d',
    text: '#9e5e0d',
  },
  sortFocus: {
    default: '#9e5e0d',
    text: '#9e5e0d',
  },
  highlightOnHover: {
    default: '#9e5e0d',
    text: '#ffffff',
  },
  striped: {
    default: '#9e5e0d',
    text: '#9e5e0d',
  },
});

function formatDate(input) {
  const datePart = input.match(/\d+/g);
  const year = datePart[0].substring(2);
  const month = datePart[1];
  const day = datePart[2];

  return `${day}/${month}/${year}`;
}

const columns = [
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

export default function RankingTable(props) {
  const { data } = props;

  return (
    <DataTable
      columns={columns}
      data={data}
      theme="darkLAB"
      highlightOnHover
      pointerOnHover
      pagination
      paginationRowsPerPageOptions={[10, 50, 100, 1000]}
      defaultSortField="participants_count"
      defaultSortAsc={false}
    />
  );
}

RankingTable.propTypes = {
  data: PropTypes.array,
};

RankingTable.defaultProps = {
  data: {},
};
