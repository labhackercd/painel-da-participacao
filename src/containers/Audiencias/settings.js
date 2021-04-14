/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import { formatDate } from '../../services/format/date';

export const rankingAudienciaColumns = [
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
