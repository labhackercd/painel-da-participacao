/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import { formatDate } from '../../services/format/date';

export const rankingWikilegisColumns = [
  {
    name: 'Proposta Legilastiva',
    selector: 'document.title',
    sortable: true,
    minWidth: '550px',
  },
  {
    name: 'Data',
    sortable: true,
    center: true,
    cell: (row) => formatDate(row.openning_date),
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
    cell: (row) => (`${row.document.responsible.name} (${row.document.responsible.party_initials}-)`),
  },
];
