import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useStyles } from './style';

export default function SubSectionHeader(props) {
  const classes = useStyles();
  const { title, style } = props;

  return (
    <Typography className={classes.subSectionHeader} component="div" variant="h3">
      <Box style={style} className={classes.typography}>
        {title}
      </Box>
    </Typography>
  );
}

SubSectionHeader.propTypes = {
  title: PropTypes.string,
  style: PropTypes.any,
};

SubSectionHeader.defaultProps = {
  title: 'Titulo',
  style: {},
};
