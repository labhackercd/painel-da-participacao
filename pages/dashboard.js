import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import HomeMenu from '../src/components/HomeMenu';
import Layout from '../layouts/index';

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
    overflow: 'auto',
    flexGrow: 1,
    padding: '2.5rem 0 0 0',
  },
  container: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '0 0 2rem 0',
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const { children } = props;
  const router = useRouter();
  console.log(router.query)

  return (
    <Layout value={0}>
      <div className={classes.body}>
        <Grid container className={classes.root}>
          <HomeMenu open />
          <Container className={classes.container}>
            <main className={classes.content}>
              { children }
            </main>
          </Container>
        </Grid>
      </div>
    </Layout>
  );
}

Dashboard.defaultProps = {
  children: React.createElement('div'),
};

Dashboard.propTypes = {
  children: PropTypes.elementType,
};
