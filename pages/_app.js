import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress'; // nprogress module
import 'nprogress/nprogress.css'; // styles of nprogress
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import theme from '../styles/theme';

const useStyles = makeStyles((themeDOM) => ({
  backdrop: {
    zIndex: themeDOM.zIndex.drawer + 1,
    color: '#fff',
  },
}));

// Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp(props) {
  const classes = useStyles();
  const { Component, pageProps } = props;
  const [loadingPage, setLoadingPage] = useState(false);

  Router.events.on('routeChangeStart', () => setLoadingPage(true));
  Router.events.on('routeChangeComplete', () => setLoadingPage(false));
  Router.events.on('routeChangeError', () => setLoadingPage(false));

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
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
