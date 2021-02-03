import React from 'react';
// import { useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import HomeMenu from '../HomeMenu';
// import Header from '../Header';

const useStyles = makeStyles(() => ({
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
    height: '100%',
    padding: '0 0 2rem 0',
  },
}));

export default function ToolContent(props) {
  const classes = useStyles();
  // const page = props.page;
  /* const [datePeriodSelectData, setDatePeriodSelectData]
      = useState({ year: '', semester: '', month: '' });*
  */

  const {
    children,
  } = props;
  // const [data, setData] = useState({});
  // const [audienciasData, setAudienciasData] = useState({})

  return (
    <Grid container className={classes.root}>
      <HomeMenu open />
      <Container className={classes.container}>
        <main className={classes.content}>
          {
            /*
            <Header setDatePeriodSelectData={setDatePeriodSelectData}
            title="Audiências Interativas" />
            */
          }
          <>
            { children }
          </>
        </main>
      </Container>
    </Grid>
  );
}

ToolContent.defaultProps = {
  children: React.createElement('div'),
  open: true,
};

ToolContent.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};
