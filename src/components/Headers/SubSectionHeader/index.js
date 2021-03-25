import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default function SubSectionHeader(props) {
  const { title } = props;
  return (
    <Typography component="div">
      <Box fontWeight="fontWeightBold" fontSize={25} marginLeft={1} marginBottom={1}>
        {title}
      </Box>
    </Typography>
  );
}

SubSectionHeader.propTypes = {
  title: PropTypes.string,
};

SubSectionHeader.defaultProps = {
  title: 'Titulo',
};
