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
    height, children, title, toolTipText, toolTipColor, toolTipAriaLabel,
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
              && (
              <Tooltips
                toolTipText={toolTipText}
                toolTipColor={toolTipColor}
                toolTipAriaLabel={toolTipAriaLabel}
              />
              )}
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
    isLoaded, info, title, toolTipText, toolTipColor, toolTipAriaLabel,
    subInformation,
  } = props;
  const hasSubInformation = (subInformation !== '');

  // <Box display="flex" alignItems="center" justifyContent="center" width="100%" height={hasSubInformation ? 'auto' : '100%'} >


  return (
    <TotalsDataFrame height="15vh" paddingLeft="0.5rem" title={title} download={false} align="left" toolTipAriaLabel={toolTipAriaLabel} toolTipText={toolTipText} toolTipColor={toolTipColor}>
      {isLoaded ? (
        <Box style={{ width: '100%', height: '100%' }} display="flex" alignItems="center" justifyContent="center" width="100%" flexDirection="column">
          <Box paddingTop={hasSubInformation ? '1vh' : ''}>
            <Typography align="center" variant="h2" style={{ color: '#FFF', alignSelf: 'center' }} noWrap>
              {info}
            </Typography>
          </Box>
          { subInformation !== '' && (
            <Box>
              <Typography align="center" variant="h5" style={{ color: '#FFF', alignSelf: 'center' }} noWrap>
                {subInformation}
              </Typography>
            </Box>
          )}

        </Box>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
          <CircularProgress />
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
  toolTipColor: PropTypes.string,
  toolTipAriaLabel: PropTypes.string,
  subInformation: PropTypes.string,
};

TotalFrame.defaultProps = {
  isLoaded: false,
  info: 'info',
  title: 'Title',
  toolTipText: null,
  toolTipColor: '',
  toolTipAriaLabel: '',
  subInformation: '',
};
