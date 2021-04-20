import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

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

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    marginRight: 15,
  },
  input: {
    '&::placeholder': {
      color: 'white',
      fontSize: 14,
      textOverflow: 'ellipsis !important',
    },
  },
  textField: {
    color: 'white',
  },
  button: {
    backgroundColor: '#C4C4C4',
    marginRight: 2,
    textTransform: 'none',
  },

}));

export default function RankingTable(props) {
  const { data, columns } = props;
  const classes = useStyles();
  const [filteredData, setFilteredData] = useState(data);
  const [searchedText, setSearchedText] = useState('');

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearchText = (e) => {

    // Search was cleaned or is empty
    if (e.target.value === '') {
      setFilteredData(data);
    }
    setSearchedText(e.target.value);
  };

  const filterRanking = () => {
    const filter = data.filter(
      (item) => (
        item.date.toLowerCase().includes(searchedText.toLowerCase())
        || (item.legislative_body_initials ? item.legislative_body_initials.toLowerCase() : '').includes(searchedText.toLowerCase())
        || (item.messages_count ? item.messages_count.toString() : '').includes(searchedText.toLowerCase())
        || (item.participants_count ? item.participants_count.toString() : '').includes(searchedText.toLowerCase())
        || (item.questions_count ? item.questions_count.toString() : '').includes(searchedText.toLowerCase())
        || (item.reunion_theme ? item.reunion_theme.toLowerCase() : '').includes(searchedText.toLowerCase())
        || (item.reunion_type ? item.reunion_type.toLowerCase() : '').includes(searchedText.toLowerCase())
        || (item.votes_count ? item.votes_count.toString() : '').includes(searchedText.toLowerCase())
      ),
    );
    setFilteredData(filter);
  };
  // a ? a.toLowerCase() : "oi"

  return (
    <>
      <Box display="flex" marginTop={2} marginRight={2} justifyContent="flex-end">
        <FormControl className={classes.root}>
          <TextField
            id="standard-search"
            type="search"
            placeholder="Pesquise aqui"
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
        <Button variant="contained" size="small" className={classes.button} onClick={filterRanking}>
          Buscar
        </Button>

      </Box>

      <DataTable
        columns={columns}
        data={filteredData}
        theme="darkLAB"
        highlightOnHover
        pointerOnHover
        pagination
        paginationRowsPerPageOptions={[10, 50, 100, 1000]}
        defaultSortField="participants_count"
        defaultSortAsc={false}
      />
    </>
  );
}

RankingTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
};

RankingTable.defaultProps = {
  data: {},
  columns: [],
};
