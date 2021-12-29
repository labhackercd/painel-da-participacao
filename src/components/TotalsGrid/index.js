/* eslint-disable react/prop-types */
/* eslint-disable no-confusing-arrow */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Box, Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Tooltips from '../ToolTip/index';
import InfoModal from '../InfoModal';
import { useStyles } from './style';
import useMobile from '../../hooks/useMobile';

function ToolTip(props) {
  const {
    // eslint-disable-next-line react/prop-types
    itens, index,
  } = props;
  const [open, setOpen] = useState(false);
  const { mobileView, tabletView } = useMobile();
  const handleOpen = () => (mobileView || tabletView) && setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {(itens[index].toolTipText !== null && itens[index].toolTipText !== undefined)
      && (
        <>
          <Box onClick={handleOpen} flexGrow={1} display="flex" alignItems="center" style={{ margin: 0 }}>
            <Tooltips
              toolTipText={itens[index].toolTipText}
              toolTipColor={itens[index].toolTipColor}
              toolTipAriaLabel={itens[index].toolTipAriaLabel}
            />
          </Box>
          <InfoModal
            open={open}
            handleClose={handleClose}
            title={itens[index].title}
            toolTipText={itens[index].toolTipText}
            toolTipColor={itens[index].toolTipColor}
          />
        </>
      )}
    </>
  );
}

export default function TotalsGrid(props) {
  const classes = useStyles();
  const {
    itens, className,
  } = props;

  return (
    <Box className={`${classes.root} ${className}`}>
      {itens.map((item, index) => (
        <>
          {item.isLoaded ? (
            <>
              <Box key={item.title} display="flex" flexDirection="column" flex={1} flexBasis="45%">
                <Box display="flex">
                  <Typography variant="h5" className={classes.text}>
                    <Box display="flex">
                      {item.title}
                    </Box>
                  </Typography>
                  <ToolTip itens={itens} index={index} />
                </Box>
                <Box paddingBottom={(index === 2 || index === 3) ? '16px' : '0px'}>
                  <Typography className={classes.info} noWrap>
                    {item.info}
                  </Typography>
                  { item.subInformation && item.subInformation.length !== 0 && (
                    <Box width="100%" display="flex" alignItems="center" paddingLeft="16px" paddingTop="8px" paddingBottom="8px">
                      <Box marginRight="10px">
                        <CheckCircleIcon fontSize="small" style={{ color: item.toolTipColor }} />
                      </Box>
                      <Box display="flex" alignItems="center" marginBottom="4px">
                        <Typography style={{ color: '#FFF', fontSize: '13px' }} noWrap>
                          {item.subInformation}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
              { index % 2 === 0 && (
                <hr flexBasis="10%" flexShrink={0} color="#363636" />
              )}
              { index === 1 && (
                <hr flexBasis="100%" flexShrink={0} color="#363636" width="100%" height="1px" />
              )}
            </>
          ) : (
            <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
              <CircularProgress />
            </Box>
          )}
        </>
      ))}
    </Box>
  );
}

TotalsGrid.propTypes = {
  itens: PropTypes.array,
  className: PropTypes.object,
};

TotalsGrid.defaultProps = {
  itens: [],
  className: {},
};
