import React from 'react';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';

const columns = [
  {
    name: 'Título da audiência',
    selector: 'title',
    sortable: true,
    maxWidth: '600px',
  },
  {
    name: 'Data',
    selector: 'date',
    sortable: true,
    maxWidth: '60px',
    center: true,
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
  {
    name: 'Link',
    button: true,
    cell: (row) => <a href={`https://edemocracia.camara.leg.br${row.get_absolute_url}`} target="_blank" rel="noopener noreferrer">Ir para Audiencia</a>,
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
