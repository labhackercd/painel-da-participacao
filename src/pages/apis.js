/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
import Image from 'next/image';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import {
  Typography, Hidden, Grid, Box, Paper,
} from '@material-ui/core';
import {
  SettingsEthernet as SettingsEthernetIcon,
  GitHub as GitHubIcon,
  Language as LanguageIcon,
} from '@material-ui/icons';
import PageNavbar from '../layouts/Navbar/index';
import Footer from '../components/Footer';
import logoLABHacker from '../assets/images/logos/logo_lab.svg';

// CSS in JS file
import { useStyles } from '../styles/pages/apisPageStyle';

function IconLink(props) {
  const classes = useStyles();
  const { icon, url, helpText } = props;

  return (
    <a
      className={classes.anchorLink}
      target="_blank"
      href={url}
      rel="noopener noreferrer"
      title={helpText}
      aria-label={helpText}
    >
      {icon}
    </a>
  );
}

function ApiCard(props) {
  const classes = useStyles();
  const {
    title, infoText, toolColor, urls,
  } = props;
  const githubIconHelpText = `Ir para página do Github do ${title} `;
  const apiIconHelpText = `Ir para página de API's do ${title}`;
  const siteIconHelpText = `Ir para o site do ${title}`;

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Paper className={classes.apiCard}>
        <Box className={classes.apiCardHead} style={{ backgroundColor: toolColor }} />
        <Box className={classes.apiCardBody}>
          <Box className={classes.apiCardText}>
            <Typography className={classes.apiCardBodyTypographyTitle}>{title}</Typography>
            <Typography className={classes.apiCardBodyTypographyParagraph}>{infoText}</Typography>
          </Box>
          <Box className={classes.apiCardButtons}>
            {urls.github !== null
                && <IconLink icon={<GitHubIcon style={{ color: toolColor }} />} helpText={githubIconHelpText} url={urls.github} />}
            {urls.api !== null
                && <IconLink icon={<SettingsEthernetIcon style={{ color: toolColor }} />} helpText={apiIconHelpText} url={urls.api} />}
            {urls.site !== null
                && <IconLink icon={<LanguageIcon style={{ color: toolColor }} />} helpText={siteIconHelpText} url={urls.site} />}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

function Api() {
  const classes = useStyles();

  const apiCardsInfo = [
    {
      title: 'e-Democracia',
      infoText: 'A plataforma e-Democracia é um portal que reúne ferramentas de participação online no processo legislativo da Câmara dos Deputados.Acesse os dados e contribua para o código-fonte.',
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
      title: 'Painel da Participação',
      infoText: 'Mostra o histórico de utilização de ferramentas na plataforma e-Democracia por meio de gráficos, totais e tabelas.',
      toolColor: '#E438B4',
      urls: {
        github: `${process.env.NEXT_PUBLIC_PARTICIPATION_GITHUB_URL}`,
        api: null,
        site: `${process.env.NEXT_PUBLIC_PARTICIPATION_SITE_URL}`,
      },
    },
  ];

  const moreCardsInfo = [
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

  return (
    <div className={classes.root}>
      <Head>
        <title>Participacao Api&apos;s</title>
      </Head>
      <Box className={classes.box}>
        <Box className={classes.boxHeader}>
          <PageNavbar value={4} />
        </Box>
        <Box className={classes.boxContent}>
          <Box className={classes.textBoxMargin}>
            <Typography variant="h1" className={`${classes.typography} ${classes.typograhyTitle}`}>
              {'<eDEVVocracia/>'}
            </Typography>
            <Typography className={`${classes.typography} ${classes.typographyParagraph}`}>
              e-Democracia para desenvolvedores
            </Typography>
          </Box>
          <Box className={classes.bannerBox}>
            <Box className={classes.bannerBoxText}>
              <Typography className={`${classes.typography} ${classes.typograhyTitle}`}>
                Participe da comunidade de
                {' '}
                <br />
                desenvolvedores e
                {' '}
                <br />
                {' '}
                e hackers cívicos.
              </Typography>
            </Box>
            <Hidden mdDown>
              <Box className={classes.bannerBoxParticipaLogo}>
                <Image
                  src={logoLABHacker}
                  alt="Logotipo do LABHacker"
                  width={700}
                  height={700}
                />
              </Box>
            </Hidden>
          </Box>
          <Box className={classes.textBoxMargin}>
            <Typography variant="h2" className={`${classes.typography} ${classes.typograhyH2}`}>
              Ferramentas para desenvolvedores
            </Typography>
            <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
              Consuma os dados abertos e crie suas aplicações e análises de dados. Baixe e utilize o código fonte das ferramentas e contribua com a comunidade de desenvolvedores e hackers cívicos
            </Typography>
            <Grid container style={{ paddingTop: '20px', paddingBottom: '20px' }} spacing={2}>
              {apiCardsInfo.map((tool) => (
                <ApiCard key={tool.title} title={tool.title} infoText={tool.infoText} toolColor={tool.toolColor} urls={tool.urls} />
              ))}
            </Grid>
            <Typography variant="h2" className={`${classes.typography} ${classes.typograhyH2}`}>
              Veja também
            </Typography>
            <Grid container className={classes.cardsContainer} spacing={2}>
              {moreCardsInfo.map((tool) => (
                <ApiCard key={tool.title} title={tool.title} infoText={tool.infoText} toolColor={tool.toolColor} urls={tool.urls} />
              ))}
            </Grid>
          </Box>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </div>
  );
}

export default Api;
