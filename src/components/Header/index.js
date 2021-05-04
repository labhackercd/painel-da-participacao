/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Box, FormControl,
  InputBase, InputLabel, Select,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  inputOptions: {
    display: 'flex',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  filterButton: {
    backgroundColor: (props) => props.colors.button.main,
    '&:hover': {
      backgroundColor: (props) => props.colors.button.hover,
    },
    color: '#212121',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },

  formControl: {
    marginRight: '20px',
  },
  select: {
    padding: '5px 13px 5px 6px',
    color: theme.palette.white.main,
    '&:not([multiple]) option': {
      backgroundColor: '#404040',
    },
    '&.Mui-disabled': {
      color: 'gray',
    },
  },
  inputBase: {
    position: 'relative',
    fontWeight: 'bold',

    backgroundColor: '#404040',
    padding: '5px 13px 5px 6px',
    border: '2px solid',
    borderColor: (props) => props.colors.borderColor,
    borderRadius: 6,
    '&:focus': {
      borderRadius: 4,
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: '#404040',
    },
    '&.Mui-disabled': {
      borderColor: 'gray',
    },
  },
  icon: {
    fill: 'white',
  },
  iconDisabled: {
    fill: 'gray',
  },

}));

export default function Header(props) {
  const colors = props.headerColors;

  const classes = useStyles({ colors });
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState('0');
  const [selectMonthDisabled, setSelectMonthDisabled] = useState(false);

  const handleChangeYear = (event) => {
    setSelectedYear(event.target.value);
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
    props.handlePeriodChange(month, selectedYear);
  };

  // eslint-disable-next-line max-len
  const rangeOfYears = (start, end) => Array(end - start + 1).fill(start).map((year2, index) => year2 + index);
  const yearsRange = rangeOfYears(props.initialYear, currentYear);

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Box width="100%" className={classes.inputOptions}>
            <FormControl id="form-control-year" className={classes.formControl}>
              <InputLabel id="year-label" htmlFor="select-year">Ano</InputLabel>
              <Select
                id="select-year"
                labelId="year-label"
                value={selectedYear}
                native
                onChange={handleChangeYear}
                input={<InputBase className={classes.inputBase} />}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                  },
                }}
                classes={{
                  select: classes.select,
                }}
              >
                <option value="0">Todo o Período</option>
                {yearsRange.map((item) => <option key={`year${item}`} value={item}>{item}</option>)}
              </Select>
            </FormControl>
            <FormControl id="form-control-month" className={classes.formControl}>
              <InputLabel id="month-label" htmlFor="select-month">Mês</InputLabel>
              <Select
                id="select-month"
                labelId="month-label"
                value={month}
                native
                onChange={handleChangeMonth}
                input={<InputBase className={classes.inputBase} />}
                classes={{
                  select: classes.select,
                }}
                inputProps={{
                  classes: {
                    icon: (selectMonthDisabled ? classes.iconDisabled : classes.icon),
                  },
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
              Filtrar
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
