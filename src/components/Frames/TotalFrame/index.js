import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Grid, Box, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tooltips from '../../ToolTip/index';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem',
  },
  box: {
    height: '4vh',
    borderRadius: '15px 15px 0 0',
    width: '100%',
    backgroundColor: '#252525',
  },
  container: {
    backgroundColor: '#000',
    borderRadius: '0 0 15px 15px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: theme.palette.white.main,
    marginTop: '1vh',
  },
  header: {
    height: '3vh',
    display: 'flex',
    width: '100%',
  },
}));

function TotalsDataFrame(props) {
  const classes = useStyles();

  const {
    // eslint-disable-next-line react/prop-types
    height, children, title, toolTipText,
  } = props;

  return (
    <Grid container className={classes.root}>
      <Box className={classes.box}>
        <Box className={classes.header}>
          <Box marginLeft={2}>
            <Typography variant="h5" className={classes.text}>
              <Box fontWeight="fontWeightBold" display="flex">
                {title}
              </Box>
            </Typography>
          </Box>
          <Box flexGrow={1} display="flex" alignItems="center" marginTop={1}>
            {(toolTipText !== null && toolTipText !== undefined)
              && <Tooltips toolTipText={toolTipText} />}
          </Box>
        </Box>
      </Box>
      <div className={classes.container} style={{ height: 'auto', minHeight: height }}>
        {children}
      </div>
    </Grid>
  );
}

export default function TotalFrame(props) {
  const {
    isLoaded, info, title, toolTipText,
  } = props;

  return (
    <TotalsDataFrame height="15vh" paddingLeft="0.5rem" title={title} download={false} align="left" toolTipText={toolTipText}>
      {isLoaded ? (
        <Typography variant="h2" style={{ color: '#FFF', alignSelf: 'center' }}>
          {info}
        </Typography>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
          <CircularProgress color="secondary" />
        </Box>
      )}
    </TotalsDataFrame>
  );
}

TotalFrame.propTypes = {
  isLoaded: PropTypes.bool,
  info: PropTypes.node,
  title: PropTypes.string,
  toolTipText: PropTypes.string,
};

TotalFrame.defaultProps = {
  isLoaded: false,
  info: 'info',
  title: 'Title',
  toolTipText: null,
};
