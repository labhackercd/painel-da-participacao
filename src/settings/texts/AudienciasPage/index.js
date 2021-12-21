/* eslint-disable import/prefer-default-export */
import { APPLICATION_NAME } from '../../applicationOptions/index';

// Page Texts
export const pageToolTitle = 'Audiências Interativas';
export const pageHTMLTitle = `Audiências Interativas | ${APPLICATION_NAME}`;
export const pageTitle = 'A Participação em Audiências Interativas';
export const pageSubTitle = 'Painel de estatísticas de participação dos cidadãos em audiências públicas e eventos interativos da Câmara dos Deputados.';
export const pageColor = '#DA7F0B';

// ==== Totals ====
export const audiencesTotalsTexts = {
  title: 'Totais no Período',
  toolTip: null,
  toolTipAriaLabel: '',

  subSectionParticipantsTotals: {
    title: 'Participantes',
    toolTip: 'Participantes são todos os usuários que enviaram mensagens, perguntas ou votos em perguntas de outros participantes.',
    toolTipAriaLabel: 'Informação sobre o termo participantes',
  },
  subSectionAudiencesTotals: {
    title: 'Audiências Interativas',
    toolTip: 'O número refere-se a audiências canceladas e realizadas, mas também inclui outros tipos de eventos - seminários, reuniões, etc.',
    toolTipAriaLabel: 'Informação sobre o termo audiências interativas',
  },
  subSectionMessagesTotals: {
    title: 'Mensagens',
    toolTip: 'Mensagens enviadas na seção de Bate-papo.',
    toolTipAriaLabel: 'Informação sobre o termo mensagens',
  },
  subSectionQuestionsTotals: {
    title: 'Perguntas',
    toolTip: null,
    toolTipAriaLabel: null,
  },
};

// ====  Distribution of participation in the period chart section ====
export const distributionOfParticipationSectionTexts = {
  title: 'Distribuição da participação no período',
  toolTip: null,
  toolTipAriaLabel: null,
};

// ====  Distribution of participation in the period chart section ====
export const totalRoomsSectionTexts = {
  title: 'Total de audiências no período',
  toolTip: null,
  toolTipAriaLabel: null,
};

// ====  Ranking section ====
export const rankingSectionTexts = {
  title: 'Ranking das audiências',
  toolTip: 'O ranking das audiências também inclui todos os demais tipos de eventos com interatividade online, a exemplo de Seminários e Comissões Gerais.',
  toolTipAriaLabel: 'Seção Ranking das Audiências',
};

// ====  Users Section ====
export const usersSectionTexts = {
  title: 'Usuários',
  toolTip: null,
  toolTipAriaLabel: null,

  // New Users SubSection
  subSectionNewUsers: {
    title: 'Novos cadastros de usuários',
    toolTip: null,
    toolTipAriaLabel: null,
    observation: '* Em 2017 houve migração do cadastro de usuários da versão antiga para a atual. ',
    observationAnchor: `${process.env.NEXT_PUBLIC_EDEMOCRACIA_BASE_URL}/emonitor/sobre`,
    observationAnchorString: 'Mais detalhes.',
  },

  // Accumulated Total of Registered Users SubSection
  subSectionAccumulatedRegisteredUsers: {
    title: 'Total Acumulado de Usuários Cadastrados',
    toolTip: null,
    toolTipAriaLabel: null,
  },
};
