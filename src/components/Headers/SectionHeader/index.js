import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Tooltip from '../../ToolTip/index';

export default function SectionHeader(props) {
  // const classes = useStyles();
  const { title, toolTipText, classes } = props;

  return (
    <Box display="flex" marginBottom={1}>
      <Box p={1}>
        <Typography component="div">
          <Box fontWeight="fontWeightBold" fontSize={39}>
            {title}
          </Box>
        </Typography>
      </Box>
      <Box alignSelf="center">
        {(toolTipText !== null && toolTipText !== undefined)
          && <Tooltip toolTipText={toolTipText} />}
      </Box>
      <Box p={1} flexGrow={1} alignSelf="center">
        <hr className={classes.divider} />
      </Box>
    </Box>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  toolTipText: PropTypes.string,
  classes: PropTypes.object,
};

SectionHeader.defaultProps = {
  title: 'Titulo',
  toolTipText: null,
  classes: {},
};
