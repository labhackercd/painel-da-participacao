/* eslint-disable react/prop-types */
/* eslint-disable no-confusing-arrow */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Grid, Box, Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Tooltips from '../../ToolTip/index';
import InfoModal from '../../InfoModal';
import { useStyles } from './style';

function TotalsDataFrame(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const handleOpen = () => mobileView && setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const setResponsiveness = () => window.innerWidth < 1024
      ? setMobileView(true)
      : setMobileView(false);

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const {
    // eslint-disable-next-line react/prop-types
    height, children, title, toolTipText, toolTipColor, toolTipAriaLabel, className,
  } = props;

  return (
    <Grid container className={`${classes.root} ${className}`} style={{ height: 'auto', minHeight: '130px' }}>
      <Box className={classes.box}>
        <Box className={classes.header}>
          <Box marginLeft={2}>
            <Typography variant="h5" className={classes.text}>
              <Box fontWeight="fontWeightBold" display="flex">
                {title}
              </Box>
            </Typography>
          </Box>
          <Box onClick={handleOpen} flexGrow={1} display="flex" alignItems="center" style={{ margin: 0 }}>
            {(toolTipText !== null && toolTipText !== undefined)
              && (
              <Tooltips
                toolTipText={toolTipText}
                toolTipColor={toolTipColor}
                toolTipAriaLabel={toolTipAriaLabel}
              />
              )}
          </Box>
          <InfoModal
            open={open}
            handleClose={handleClose}
            title={title}
            toolTipText={toolTipText}
            toolTipColor={toolTipColor}
          />
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
    subInformation, className,
  } = props;
  const hasSubInformation = (subInformation !== '');

  return (
    <TotalsDataFrame className={className} height="15vh" paddingLeft="0.5rem" title={title} download={false} align="left" toolTipAriaLabel={toolTipAriaLabel} toolTipText={toolTipText} toolTipColor={toolTipColor}>
      {isLoaded ? (
        <Box style={{ width: '100%', height: '100%' }} display="flex" alignItems="center" justifyContent="center" width="100%" flexDirection="column">
          <Box paddingTop={hasSubInformation ? '1vh' : ''}>
            <Typography align="center" variant="h2" style={{ color: '#FFF', alignSelf: 'center' }} noWrap>
              {info}
            </Typography>
          </Box>
          { subInformation !== '' && (
            <Box width="100%" display="flex" alignItems="center" justifyContent="center">
              <Box marginRight="10px">
                <CheckCircleIcon fontSize="small" style={{ color: toolTipColor }} />
              </Box>
              <Box>
                <Typography align="center" style={{ color: '#FFF', alignSelf: 'center', fontSize: '1rem' }} noWrap>
                  {subInformation}
                </Typography>
              </Box>

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
  className: PropTypes.object,
};

TotalFrame.defaultProps = {
  isLoaded: false,
  info: 'info',
  title: 'Title',
  toolTipText: null,
  toolTipColor: '',
  toolTipAriaLabel: '',
  subInformation: '',
  className: {},
};
