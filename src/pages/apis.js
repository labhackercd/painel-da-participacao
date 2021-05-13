/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
import Image from 'next/image';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import PageNavbar from '../layouts/navbar';
import Footer from '../components/Footer/index';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
  },
  box: {
    display: 'flex',
    height: '100%',
    width: 'auto',
    flexFlow: 'column',
    backgroundColor: theme.palette.primary.main,
  },
  boxHeader: {
    flex: '0 1 auto',
  },
  boxContent: {
    flex: '1 1 auto',
  },
  textBoxMargin: {
    margin: '5vh',
    '@media (min-width: 1100px)': {
      /* topo | direita | inferior | esquerda */
      margin: '7vh 30vh 7vh 30vh',
    },
    '@media (max-width: 600px)': {
      paddingBottom: '3vh',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    letterSpacing: '0.05em',
  },
  typograhyTitle: {
    fontSize: '2.938rem',
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: '2rem',
    },
  },
  typograhyH2: {
    fontSize: '2.438rem',
    fontWeight: 'bold',
    paddingTop: '15px',
    paddingBottom: '10px',
    '@media (max-width: 600px)': {
      fontSize: '1.9rem',
    },
  },
  typograhyH3: {
    fontSize: '2rem',
    fontWeight: '600',
    paddingTop: '5px',
    paddingBottom: '10px',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
  typographyParagraph: {
    fontSize: '1.1rem',
    paddingBottom: '10px',
    textAlign: 'justify',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
    },
  },
  bannerBox: {
    width: '100%',
    display: 'flex',
    height: '370px',
    '@media (max-width: 600px)': {
      height: '250px',
    },
    background: ' linear-gradient(90deg, rgba(228, 56, 180, 0.3) 0%, rgba(245, 157, 42, 0.3) 32.29%, rgba(17, 129, 233, 0.3) 63.54%, rgba(20, 215, 104, 0.3) 100%);',
  },
  bannerBoxText: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    paddingLeft: '2vh',
    '@media (min-width: 1100px)': {
      paddingLeft: '30vh',
    },
  },
  bannerBoxParticipaLogo: {
    width: '10%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '30vh',
  },
  apiCard: {
    height: '329px',
    width: '100%',
    backgroundColor: '#0D0D0D',
    borderRadius: '15px',
  },
  apiCardHead: {
    height: '25px',
    /* topo | direita | inferior | esquerda */
    borderRadius: '15px 15px 0 0',
  },
  apiCardBody: {
    height: '100%',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  apiCardBodyTypographyTitle: {
    fontFamily: 'Open Sans',
    fontSize: '1.563rem',
    letterSpacing: '0.05rem',
    '@media (max-width: 1100px)': {
      fontSize: '1.2rem',
    },
  },
  apiCardBodyTypographyParagraph: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    letterSpacing: '0.1rem',
    paddingTop: '10px',
    color: '#BFBFBF',
    '@media (max-width: 1100px)': {
      fontSize: '1rem',
    },
  },
  apiCardText: {
    margin: '0px 5px 0px 5px',
  },
  apiCardButtons: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingBottom: '15px',
  },
  cardsContainer: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  anchorLink: {
    marginLeft: '10px',
    marginRight: '10px',
  },
}));

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
  const siteIconHelpText = `Ir para o repositório do ${title}`;

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
                desenvolvedores da
                {' '}
                <br />
                {' '}
                Câmara dos Deputados.
              </Typography>
            </Box>
            <Hidden mdDown>
              <Box className={classes.bannerBoxParticipaLogo}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/logo/logo_lab.svg`}
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
