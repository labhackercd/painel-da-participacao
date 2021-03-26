import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ChartDataFrame from '../../ChartDataFrame/index';

export default function NoDataForSelectedPeriod(props) {
  const { title } = props;

  return (
    <ChartDataFrame height="10vh" title={title} listView exportData={null} download={false}>
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%" margin={2}>
        <img
          src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/messages/no_data_find.svg`}
          alt="Não existem dados para o período selecionado"
        />
      </Box>
    </ChartDataFrame>
  );
}

NoDataForSelectedPeriod.propTypes = {
  title: PropTypes.string,
};

NoDataForSelectedPeriod.defaultProps = {
  title: 'Titulo',
};
