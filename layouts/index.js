import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../src/components/Footer';
import PageNavbar from './navbar';

const useStyles = makeStyles((theme) => ({

  tab: {
    height: '92%',
    textTransform: 'capitalize',
    margin: '0.5rem 0 0 6rem',
  },
  menu: {
    '& .MuiPaper-root-16': {
      backgroundColor: theme.palette.mediumGrey.main,
    },
    '& div': {
      width: '14%',
    },
  },
  body: {
    backgroundColor: theme.palette.primary.main,
    height: 'auto',
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
