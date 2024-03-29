/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import {
  Typography,
  Grid,
  Box,
  Paper,
} from '@material-ui/core';
import {
  SettingsEthernet as SettingsEthernetIcon,
  GitHub as GitHubIcon,
  Language as LanguageIcon,
} from '@material-ui/icons';
import PageNavbar from '../layouts/Navbar/index';
import Footer from '../components/Footer';
import bannerImg from '../assets/images/apiPage/bannerImg.png';
import { APPLICATION_NAME } from '../settings/applicationOptions/index';

import { apiCardsInfo, moreCardsInfo } from '../settings/texts/ApisPage/index';

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
    title,
    infoText,
    toolColor,
    urls,
  } = props;
  const githubIconHelpText = `Ir para página do Github do ${title} `;
  const apiIconHelpText = `Ir para página de API's do ${title}`;
  const siteIconHelpText = `Ir para o site do ${title}`;

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Paper className={classes.apiCard}>
        <Box
          className={classes.apiCardHead}
          style={{ backgroundColor: toolColor }}
        />
        <Box className={classes.apiCardBody}>
          <Box className={classes.apiCardText}>
            <Typography className={classes.apiCardBodyTypographyTitle}>
              {title}
            </Typography>
            <Typography className={classes.apiCardBodyTypographyParagraph}>
              {infoText}
            </Typography>
          </Box>
          <Box className={classes.apiCardButtons}>
            {urls.github !== null && (
              <IconLink
                icon={<GitHubIcon style={{ color: toolColor }} />}
                helpText={githubIconHelpText}
                url={urls.github}
              />
            )}
            {urls.api !== null && (
              <IconLink
                icon={<SettingsEthernetIcon style={{ color: toolColor }} />}
                helpText={apiIconHelpText}
                url={urls.api}
              />
            )}
            {urls.site !== null && (
              <IconLink
                icon={<LanguageIcon style={{ color: toolColor }} />}
                helpText={siteIconHelpText}
                url={urls.site}
              />
            )}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

function Api() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>{`API's | ${APPLICATION_NAME}`}</title>
      </Head>
      <Box className={classes.box}>
        <Box className={classes.boxHeader}>
          <PageNavbar value={4} />
        </Box>
        <Grid className={classes.container} container>
          <Grid item xs={12} sm={6} md={6}>
            <Box className={classes.headerText}>
              <Typography
                variant="h1"
                className={`${classes.typography} ${classes.typograhyTitle}`}
              >
                {'<eDEVVocracia/>'}
              </Typography>
              <Typography
                className={`${classes.typography} ${classes.typographyTitleCaption}`}
              >
                e-Democracia para desenvolvedores
              </Typography>
              <Typography
                className={`${classes.typography} ${classes.typographyTitleText}`}
              >
                Faça parte da comunidade de desenvolvedores e hackers cívicos.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              width="100%"
              height="100%"
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <img
                className={classes.initialPageBannerImg}
                src={bannerImg}
                alt="Imagem representativa banner"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              className={classes.lineBox}
              flexDirection="row-reverse"
            >
              <div className={classes.lineDividerGradientColor} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.textBoxMargin}>
              <Typography
                variant="h2"
                className={`${classes.typography} ${classes.typograhyH2}`}
                style={{ paddingTop: '0px', paddingBottom: '16px' }}
              >
                Ferramentas para desenvolvedores
              </Typography>
              <Typography
                component="p"
                className={`${classes.typography} ${classes.typographyParagraph}`}
              >
                Consuma os dados abertos e crie suas aplicações e análises de
                dados. Baixe e utilize o código fonte das ferramentas e
                contribua com a comunidade de desenvolvedores e hackers cívicos
              </Typography>
              <Grid
                container
                className={classes.apisCards}
                spacing={2}
              >
                {apiCardsInfo.map((tool) => (
                  <ApiCard
                    key={tool.title}
                    title={tool.title}
                    infoText={tool.infoText}
                    toolColor={tool.toolColor}
                    urls={tool.urls}
                  />
                ))}
              </Grid>
              <Typography
                variant="h2"
                className={`${classes.typography} ${classes.typograhyH2}`}
              >
                Veja também
              </Typography>
              <Grid container className={classes.cardsContainer} spacing={2}>
                {moreCardsInfo.map((tool) => (
                  <ApiCard
                    key={tool.title}
                    title={tool.title}
                    infoText={tool.infoText}
                    toolColor={tool.toolColor}
                    urls={tool.urls}
                  />
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.footerBox}>
          <Footer />
        </Box>
      </Box>
    </div>
  );
}

export default Api;
