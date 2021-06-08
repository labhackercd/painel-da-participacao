import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles, Typography } from '@material-ui/core';
import ChartDataFrame from '../../ChartDataFrame/index';

const useStyles = makeStyles(() => ({
  messageTypograph: {
    fontFamily: 'Open Sans',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingTop: '20px',
  },
}));

export default function NoDataForSelectedPeriod(props) {
  const classes = useStyles();
  const {
    title, tool, toolColor, apiLastUpdate, apiUrl,
  } = props;

  return (
    <ChartDataFrame
      height="50vh"
      title={title}
      listView
      download={false}
      align="center"
      apiUrl={apiUrl}
      apiLastUpdate={apiLastUpdate}
      tool={tool}
    >
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" height="100%" margin={2}>
        <Box>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d="M45.2622 0H18.7378L0 18.7378V45.2622L18.7378 64H45.2622L64 45.2622V18.7378L45.2622 0ZM56.8889 42.3111L42.3111 56.8889H21.6889L7.11111 42.3111V21.6889L21.6889 7.11111H42.3111L56.8889 21.6889V42.3111Z"
              fill={toolColor}
            />
            <path d="M35.5564 14.2222H28.4453V35.5555H35.5564V14.2222Z" fill={toolColor} />
            <path d="M35.5564 42.6667H28.4453V49.7779H35.5564V42.6667Z" fill={toolColor} />
          </svg>
        </Box>
        <Box>
          <Typography component="p" className={classes.messageTypograph} style={{ color: toolColor }}>
            Não foram encontrados dados para o período selecionado
          </Typography>
        </Box>
      </Box>
    </ChartDataFrame>
  );
}

NoDataForSelectedPeriod.propTypes = {
  title: PropTypes.string,
  tool: PropTypes.string,
  toolColor: PropTypes.string,
  apiLastUpdate: PropTypes.string,
  apiUrl: PropTypes.string,
};

NoDataForSelectedPeriod.defaultProps = {
  title: '',
  tool: '',
  toolColor: 'white',
  apiLastUpdate: '',
  apiUrl: '',
};
