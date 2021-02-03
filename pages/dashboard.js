import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import HomeMenu from '../src/components/HomeMenu';
import Layout from '../layouts/index';

import Audiencias from '../src/containers/Audiencias';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: '2.5rem 0 0 0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '0 0 2rem 0',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const router = useRouter();
  const queryTool = router.query.ferramenta;

  function renderToolContainer() {
    switch (queryTool) {
      case process.env.NEXT_PUBLIC_AUDIENCIAS_APP_PAGE_URL_QUERY:
        return <Audiencias />;
      default:
        return <div />;
    }
  }

  return (
    <Layout value={0}>
      <div className={classes.body}>
        <Grid container className={classes.root}>
          <HomeMenu open />
          <Container className={classes.container}>
            <main className={classes.content}>
              { renderToolContainer() }
            </main>
          </Container>
        </Grid>
      </div>
    </Layout>
  );
}

/*
  return (
    <Layout value={0}>
      <div className={classes.body}>
        <Grid container className={classes.root}>
          <HomeMenu open />
          <Container className={classes.container}>
            <main className={classes.content}>
              { renderToolContainer() }
            </main>
          </Container>
        </Grid>
      </div>
    </Layout>
  );

*/
/*
Dashboard.defaultProps = {
  children: React.createElement('div'),
};

Dashboard.propTypes = {
  children: PropTypes.elementType,
};
*/
