import React from 'react';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';

const columns = [
  {
    name: 'Título da audiência',
    selector: 'title',
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
  const dataResult = data.map(
    (value) => (
      {
        ...value,
        title: ((value.reunion_theme === null || value.reunion_theme === '') ? value.title_reunion : value.reunion_theme),
      }
    ),
  );

  return (
    <DataTable
      columns={columns}
      data={dataResult}
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
