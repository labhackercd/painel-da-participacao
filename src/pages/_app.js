import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import 'nprogress/nprogress.css'; // styles of nprogress
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as gtag from '../../lib/googleAnalytics/gtag';

import theme from '../styles/theme';

const useStyles = makeStyles((themeDOM) => ({
  backdrop: {
    zIndex: themeDOM.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function MyApp(props) {
  const classes = useStyles();
  const { Component, pageProps } = props;
  const [loadingPage, setLoadingPage] = useState(false);
  const router = useRouter();

  Router.events.on('routeChangeStart', () => setLoadingPage(true));
  Router.events.on('routeChangeComplete', () => {
    setLoadingPage(false);
  });
  Router.events.on('routeChangeError', () => setLoadingPage(false));

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta NAME="language" content="pt-br" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/favicon.ico`}
        />
        <link
          rel="alternate icon"
          href={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/favicon.ico`}
        />

        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:url"
          content="https://edemocracia.camara.leg.br/emonitor/"
        />
        <meta property="og:title" content="Página Inicial E-Monitor" />
        <meta property="og:site_name" content="E-Monitor" />

        <meta
          property="og:description"
          content="O eMonitor foi desenvolvido para mostrar o histórico de utilização de dois dos canais de participação da Câmara dos Deputados, que estão disponíveis na plataforma eDemocracia."
        />
        <meta property="og:type" content="website" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <Backdrop className={classes.backdrop} open={loadingPage}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
