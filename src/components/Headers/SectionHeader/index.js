import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Tooltip from '../../ToolTip/index';

export default function SectionHeader(props) {
  // const classes = useStyles();
  const {
    title, toolTipText, classes, toolTipColor,
  } = props;

  return (
    <Box display="flex" flexFlow="wrap" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <Typography className={`${classes.typographyHeaderSection} ${classes.typography}`} component="div" variant="h2">
          <Box fontWeight="fontWeightBold">
            {title}
          </Box>
        </Typography>
        <Box alignSelf="center">
          {(toolTipText !== null && toolTipText !== undefined)
            && <Tooltip toolTipText={toolTipText} toolTipColor={toolTipColor} />}
        </Box>
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
