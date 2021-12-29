/* eslint-disable no-confusing-arrow */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Tooltip from '../../ToolTip/index';
import InfoModal from '../../InfoModal';
import useMobile from '../../../hooks/useMobile';

export default function SectionHeader(props) {
  const {
    title, toolTipText, classes, toolTipColor,
  } = props;
  const [open, setOpen] = useState(false);
  const { mobileView, tabletView } = useMobile();
  const handleOpen = () => (mobileView || tabletView) && setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className={classes.sectionHeader} display="flex" flexFlow="wrap" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <Typography className={`${classes.typographyHeaderSection} ${classes.typography}`} component="div" variant="h2">
          <Box fontWeight="fontWeightBold">
            {title}
          </Box>
        </Typography>
        <Box onClick={handleOpen} alignSelf="center" marginLeft={1}>
          {(toolTipText !== null && toolTipText !== undefined)
            && <Tooltip toolTipText={toolTipText} toolTipColor={toolTipColor} />}
        </Box>
        <InfoModal
          open={open}
          handleClose={handleClose}
          title={title}
          toolTipText={toolTipText}
          toolTipColor={toolTipColor}
        />
      </Box>
      <Box>
        <hr className={classes.divider} />
      </Box>
    </Box>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  toolTipText: PropTypes.string,
  classes: PropTypes.object,
  toolTipColor: PropTypes.string,
};

SectionHeader.defaultProps = {
  title: 'Titulo',
  toolTipText: null,
  classes: {},
  toolTipColor: '',
};
