import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Typography, Button, Box,
  FormControl, InputBase, InputLabel, Select,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 6,
    position: 'relative',
    backgroundColor: '#9E5E0D',
    color: 'black',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: '#9E5E0D',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    color: '#FFF',
    textTransform: 'capitalize',
  },
  inputOptions: {
    display: 'flex',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  filter: {
    color: '#B9B9B9',
    display: 'flex',
    alignSelf: 'center',
  },
  filterButton: {
    fontWeight: 'bold',
    backgroundColor: '#9E5E0D',
    '&:hover': {
      backgroundColor: '#E1A04E',
    },
  },
  formControl: {
    marginRight: '20px',
  },
  select: {
    color: 'white',
    '&:not([multiple]) option': {
      backgroundColor: '#9E5E0D',
    },
  },
}));

const typography = { color: '#FFF', textTransform: 'capitalize' };

export default function Header(props) {
  const classes = useStyles();
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState('0');
  const [selectMonthDisabled, setSelectMonthDisabled] = useState(true);

  const handleChangeYear = (event) => {
    setYear(event.target.value);
    if (event.target.value === '0') {
      setMonth('0');
      setSelectMonthDisabled(true);
    } else {
      setSelectMonthDisabled(false);
    }
  };

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  const handleSubmit = () => {
    // eslint-disable-next-line react/prop-types
    props.handlePeriodChange(month, year);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Box width="100%" className={classes.inputOptions}>
            <FormControl id="form-control-year" className={classes.formControl}>
              <InputLabel id="year-label">Ano</InputLabel>
              <Select
                id="select-year"
                value={year}
                native
                onChange={handleChangeYear}
                input={<BootstrapInput />}
                classes={{
                  select: classes.select,
                }}
              >
                <option value="0">Todo o Período</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
              </Select>
            </FormControl>
            <FormControl id="form-control-month" className={classes.formControl}>
              <InputLabel id="month-label">Mês</InputLabel>
              <Select
                id="select-month"
                value={month}
                native
                onChange={handleChangeMonth}
                input={<BootstrapInput />}
                classes={{
                  select: classes.select,
                }}
                disabled={selectMonthDisabled}
              >
                <option value="0">Todos os Meses</option>
                <option value="1">Janeiro</option>
                <option value="2">Fevereiro</option>
                <option value="3">Março</option>
                <option value="4">Abril</option>
                <option value="5">Maio</option>
                <option value="6">Junho</option>
                <option value="7">Julho</option>
                <option value="8">Agosto</option>
                <option value="9">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
              </Select>
            </FormControl>
            <Button variant="contained" className={classes.filterButton} onClick={handleSubmit}>
              <Typography style={typography}>
                Filtrar
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
