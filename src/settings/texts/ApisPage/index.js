/* eslint-disable import/prefer-default-export */

export const apiCardsInfo = [
  {
    title: 'e-Democracia',
    infoText: 'A plataforma e-Democracia é um portal que reúne ferramentas de participação online no processo legislativo da Câmara dos Deputados. Acesse os dados e contribua para o código-fonte.',
    toolColor: '#1181E9',
    urls: {
      github: `${process.env.NEXT_PUBLIC_EDEMOCRACIA_GITHUB_URL}`,
      api: `${process.env.NEXT_PUBLIC_EDEMOCRACIA_SWAGGER_URL}`,
      site: `${process.env.NEXT_PUBLIC_EDEMOCRACIA_BASE_URL}`,
    },
  },
  {
    title: 'Audiências Interativas',
    infoText: 'A ferramenta permite a participação em audiências públicas - e outros tipos de eventos - por meio do envio de perguntas e mensagens.',
    toolColor: '#F59D2A',
    urls: {
      github: `${process.env.NEXT_PUBLIC_AUDIENCIAS_GITHUB_URL}`,
      api: `${process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}`,
      site: `${process.env.NEXT_PUBLIC_AUDIENCIAS_SITE_URL}`,
    },
  },
  {
    title: 'Wikilegis',
    infoText: 'Disponibiliza propostas legislativas para análise dos cidadãos que opinam  em trechos do texto e avaliam as opiniões uns dos outros.',
    toolColor: '#14D768',
    urls: {
      github: `${process.env.NEXT_PUBLIC_WIKILEGIS_GITHUB_URL}`,
      api: `${process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}`,
      site: `${process.env.NEXT_PUBLIC_WIKILEGIS_SITE_URL}`,
    },
  },
  {
    title: 'E-Monitor',
    infoText: 'Mostra o histórico de utilização de ferramentas na plataforma e-Democracia por meio de gráficos, totais e tabelas.',
    toolColor: '#E438B4',
    urls: {
      github: `${process.env.NEXT_PUBLIC_PARTICIPATION_GITHUB_URL}`,
      api: null,
      site: `${process.env.NEXT_PUBLIC_PARTICIPATION_SITE_URL}`,
    },
  },
];

export const moreCardsInfo = [
  {
    title: 'eDemocracia aberto',
    infoText: 'Disponibiliza as ferramentas do e-Democracia com guias para a instalação, administração e utilização. Cada organização pode escolher quais ferramentas baixar e adotar.',
    toolColor: '#CE242E',
    urls: {
      github: null,
      api: null,
      site: `${process.env.NEXT_PUBLIC_EDEMOCRACIA_ABERTO_SITE_URL}`,
    },
  },
  {
    title: 'Portal de Dados Abertos',
    infoText: 'Na página você encontra um conjunto amplo de dados públicos sobre a Câmara dos Deputados e os trabalhos desenvolvidos. Há dados sobre votações, deputados, legislaturas, etc.',
    toolColor: '#7F69EE',
    urls: {
      github: null,
      api: null,
      site: `${process.env.NEXT_PUBLIC_DADOS_ABERTOS_SITE_URL}`,
    },
  },
];
