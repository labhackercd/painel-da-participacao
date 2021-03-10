import React from 'react';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';

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
    maxWidth: '600px',
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
    maxWidth: '60px',
    center: true,
    cell: (row) => formatDate(row.date),
  },
  {
    name: 'Votos',
    selector: 'votes_count',
    sortable: true,
    maxWidth: '60px',
    center: true,
  },
  {
    name: 'Perguntas',
    selector: 'questions_count',
    sortable: true,
    maxWidth: '60px',
    center: true,
  },
  {
    name: 'Mensagens',
    selector: 'messages_count',
    sortable: true,
    maxWidth: '60px',
    center: true,
  },
  {
    name: 'Participantes',
    selector: 'participants_count',
    sortable: true,
    maxWidth: '60px',
    center: true,
  },
  {
    name: 'Comissão',
    selector: 'legislative_body_initials',
    sortable: true,
    maxWidth: '130px',
    center: true,
  },
];

export default function RankingTable(props) {
  const { data } = props;

  return (
    <DataTable
      columns={columns}
      data={data}
      theme="dark"
      highlightOnHover
      pointerOnHover
      pagination
      paginationRowsPerPageOptions={[10, 50, 100, 1000]}
    />
  );
}

RankingTable.propTypes = {
  data: PropTypes.array,
};

RankingTable.defaultProps = {
  data: {},
};