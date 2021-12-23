import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import moment from 'moment';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './style';
import { formatYear, isDateInPeriod } from '../../services/functions/handlers';

createTheme('darkLAB', {
  text: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    disabled: '#FFFFFF',
  },
  background: {
    default: '#000000',
  },
  context: {
    text: '#FFFFFF',
    background: '#FFFFFF',
  },
  divider: {
    default: '#2F2F2F',
  },
  button: {
    default: '#FFFFFF',
    focus: 'rgba(255, 255, 255, .12)',
    hover: 'rgba(255, 255, 255, .12)',
    disabled: 'rgba(255, 255, 255, .18)',
  },
  selected: {
    default: '#9e5e0d',
    text: '#9e5e0d',
  },
  sortFocus: {
    default: '#c9c9c9',
    text: '#252525',
  },
  highlightOnHover: {
    default: '#252525',
    text: '#ffffff',
  },
  striped: {
    default: '#9e5e0d',
    text: '#9e5e0d',
  },
});

export default function RankingTable(props) {
  const {
    data, columns, filterRanking, period,
    month, year, tool,
  } = props;
  const classes = useStyles();
  const [filteredData, setFilteredData] = useState(data);
  const [searchedText, setSearchedText] = useState('');
  const [messageResults, setMessageResults] = useState('Não há registros com este termo no período definido');

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearchText = (e) => {
    // Search was cleaned or is empty => reset data of table to initial state
    if (e.target.value === '') {
      setFilteredData(data);
    }
    setSearchedText(e.target.value);
  };

  const handleMessageResults = () => {
    if (moment(searchedText, 'DD/MM/YYYY', true).isValid()) {
      const date = new Date(moment(searchedText, 'D_M_YYYY').locale('pt-br'));
      if (isDateInPeriod(date, period, month, year, tool)) {
        setMessageResults('Não há registros com este termo no período definido');
      } else {
        setMessageResults('A data buscada deve estar dentro do período definido');
      }
    }
  };

  const handlefilterRanking = () => {
    let filter = {};

    if (moment(searchedText, 'DD/MM/YYYY', true).isValid()) {
      filter = filterRanking(data, formatYear(moment(searchedText, 'D_M_YYYY').locale('pt-br')));
    } else {
      filter = filterRanking(data, searchedText);
    }

    handleMessageResults();
    setFilteredData(filter);
  };

  return (
    <>
      <Box display="flex" marginTop={2} marginRight={2} justifyContent="flex-end">
        <FormControl className={classes.root}>
          <TextField
            id="ranking-table-search-field"
            type="search"
            placeholder="Pesquise aqui"
            aria-label="Digite o termo a ser pesquisado na tabela"
            onChange={handleSearchText}
            InputLabelProps={{ className: classes.textField }}
            InputProps={{
              classes: {
                input: classes.input,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Button id="rankingSearchButton" variant="contained" size="small" className={classes.button} onClick={handlefilterRanking} aria-label="Pesquisar">
          Buscar
        </Button>
      </Box>

      <DataTable
        columns={columns}
        style={{ fontSize: '13px', fontFamily: 'Open Sans' }}
        data={filteredData}
        theme="darkLAB"
        highlightOnHover
        pointerOnHover
        pagination
        paginationRowsPerPageOptions={[10, 50, 100, 1000]}
        labelRowsPerPage="Teste"
        defaultSortField="participants_count"
        defaultSortAsc={false}
        paginationComponentOptions={{ rowsPerPageText: 'Linhas por página:', rangeSeparatorText: 'de' }}
        noDataComponent={messageResults}
      />
    </>
  );
}

RankingTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  filterRanking: PropTypes.func,
  period: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
  tool: PropTypes.string,
};

RankingTable.defaultProps = {
  data: {},
  columns: [],
  filterRanking: {},
  period: '',
  month: '',
  year: '',
  tool: '',
};
