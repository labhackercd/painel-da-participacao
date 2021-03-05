import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
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

function AudienciasPage({ dados }) {
  const classes = useStyles();
  return (
    <Layout value={0}>
      <div className={classes.body}>
        <Grid container className={classes.root}>
          <HomeMenu />
          <Container className={classes.container}>
            <main className={classes.content}>
              <Audiencias responseDataRanking={dados} />
            </main>
          </Container>
        </Grid>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const baseUrl = 'https://tes.edemocracia.camara.leg.br/audiencias/reports/api/ranking/?limit=1000&offset=1000';
  const resp = await axios.get(`${baseUrl}`);
  const dados = resp.data.results;

  return {
    props: {
      dados,
    },
    revalidate: 600, // Update data every 10 minutes (600 seconds)
  };
}

/*
export async function getStaticProps() {
  let dados = [];
  async function getData() {
    const baseUrl = 'https://edemocracia.camara.leg.br/audiencias/api/room/?is_visible=true&ordering=-created&page=';
    // const baseUrl = 'https://tes.edemocracia.camara.leg.br/audiencias/reports/api/ranking/?limit=1000&offset=1000';
    let page = 1;
    const rooms = [];
    // create a lastResult array which is going to be used to check if there is a next page
    let lastResult = [];
    do {
      try {
        // eslint-disable-next-line no-await-in-loop
        const resp = await axios.get(`${baseUrl}${page}`);

        lastResult = resp.data;
        resp.data.results.forEach((room) => {
          rooms.push(room);
        });
        page += 1;
      } catch (err) {
        return [];
      }
    } while (lastResult.next !== null);
    return rooms;
  }

  try {
    // const url = 'https://edemocracia.camara.leg.br/audiencias/api/ranking/room';
    // let url = 'https://edemocracia.camara.leg.br/audiencias/api/room/?ordering=-created&is_visible=true';
    // const response = await axios.get(url);
    // const dados = response.data.data;
    dados = await getData();
  } catch (e) {
    console.log(e);
    console.log('Deu ruim');
  }

  return {
    props: {
      dados,
    },
    revalidate: 600, // Update data every 10 minutes (600 seconds)
  };
}
*/

export default AudienciasPage;
