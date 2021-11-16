/* eslint-disable import/prefer-default-export */
import { APPLICATION_NAME } from '../../applicationOptions/index';

// Page Texts
export const pageToolTitle = 'Wikilegis';
export const pageHTMLTitle = `Wikilegis | ${APPLICATION_NAME}`;
export const pageTitle = 'Participação na Wikilegis';
export const pageSubTitle = 'Painel de estatísticas da participação dos cidadãos nas propostas legislativas da Câmara dos Deputados.';
export const pageColor = '#00C354';

// ==== Totals ====
export const wikilegisTotalsSectionTexts = {
  title: 'Totais no Período',
  toolTip: null,
  toolTipAriaLabel: null,

  subSectionParticipantsTotals: {
    title: 'Participantes',
    toolTip: 'Participantes são todos os usuários que enviaram suas opiniões ou votaram em outras opiniões.',
    toolTipAriaLabel: 'Informação sobre o termo participantes',
  },
  subSectionLegislativeProposalsTotals: {
    title: 'Propostas Legislativas',
    toolTip: 'Propostas legislativas, disponibilizadas para receber opiniões dos cidadãos, de todos os tipos, a exemplo de Projetos de Lei, Resoluções, Atos da Mesa, etc.',
    toolTipAriaLabel: 'Informação sobre o termo propostas legislativas.',
  },
  subSectionOpinionsTotals: {
    title: 'Opiniões',
    toolTip: 'Opiniões são contribuições em trechos da proposta legislativa enviadas pelos participantes. Podem ser um simples comentário ou uma sugestão mais elaborada de reformulação do texto.',
    toolTipAriaLabel: 'Informação sobre o termo Opiniões',
  },
  subSectionVotesTotals: {
    title: 'Votos nas Opiniões',
    toolTip: 'O total mostra a soma dos votos favoráveis, neutros e contrários.',
    toolTipAriaLabel: 'Informação sobre o termo votos',
  },
};

// ====  Distribution of participation in the period chart section ====
export const distributionOfParticipationSectionTexts = {
  title: 'Distribuição da participação no período',
  toolTip: null,
  toolTipAriaLabel: null,
};

// ====  Ranking section ====
export const rankingSectionTexts = {
  title: 'Ranking das propostas legislativas',
  toolTip: 'O tempo de abertura para participação é definido pelo parlamentar. Os totais são consolidados na data de encerramento.',
  toolTipAriaLabel: 'Seção Ranking das Propostas Legislativas',
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
  },

  // Accumulated Total of Registered Users SubSection
  subSectionAccumulatedRegisteredUsers: {
    title: 'Total Acumulado de Usuários Cadastrados',
    toolTip: '',
    toolTipAriaLabel: '',
  },
};
