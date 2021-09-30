import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer';
import PageNavbar from './navbar';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  const { value, children } = props;

  return (
    <div className={classes.body}>
      <PageNavbar value={value} />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  value: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
