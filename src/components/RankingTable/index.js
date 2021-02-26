import React from 'react';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';

const columns = [
  {
    name: 'Título da audiência',
    selector: 'reunion_theme',
    sortable: true,
    maxWidth: '800px',
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
    />
  );
}

RankingTable.propTypes = {
  data: PropTypes.array,
};

RankingTable.defaultProps = {
  data: {},
};
