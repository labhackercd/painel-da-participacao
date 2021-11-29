import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core/';
import Footer from '../components/Footer';
import PageNavbar from './Navbar/index';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    minWidth: '98vw',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    alignItems: 'stretch',
  },
  headerBox: {
    flexShrink: '0',
  },
  pageContentBox: {
    flexGrow: '1',
    flexShrink: '0',
  },
  footerBox: {
    flexShrink: '0',
    paddingTop: '140px',
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  const { value, children } = props;

  return (
    <div className={classes.body}>
      <Box className={classes.headerBox}>
        <PageNavbar value={value} />
      </Box>
      <Box className={classes.pageContentBox}>
        {children}
      </Box>
      <Box className={classes.footerBox}>
        <Footer />
      </Box>
    </div>
  );
}

Layout.propTypes = {
  value: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
