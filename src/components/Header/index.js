import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Typography, Button, Box,
  FormControl, InputBase, InputLabel, Select,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

/*
https://stackoverflow.com/questions/48879517/passing-props-to-material-ui-style
https://www.google.com/search?q=how+to+use+variable+props+to+theme+material+ui&biw=1920&bih=949&sxsrf=ALeKk03Ws3LLqu41KzWCAHTRlYWc9uzPLg%3A1617651267950&ei=Q2ZrYNajOc-r5NoP5vm60A4&oq=how+to+use+variable+props+to+theme+material+ui&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsANQyQ5Yxi9gyDBoA3ACeACAAYMCiAHKGpIBBjAuNC4xMpgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwiW0cjJ7OfvAhXPFVkFHea8DuoQ4dUDCA0&uact=5
https://stackoverflow.com/questions/56111294/how-to-use-theme-and-props-in-makestyles
*/

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
    fontWeight: 'bold',
    backgroundColor: (props) => props.colors.buttonColor,
    '&:hover': {
      backgroundColor: theme.palette.audiencias.anzac,
    },
  },
  formControl: {
    marginRight: '20px',
  },
  select: {
    color: theme.palette.white.main,
    '&:not([multiple]) option': {
      backgroundColor: theme.palette.audiencias.butteredRum,
    },
  },
  inputBase: {
    color: 'white',
    position: 'relative',
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
  },
  icon: {
    fill: 'white',
  },
}));

const typography = { color: '#FFF', textTransform: 'capitalize' };

export default function Header(props) {
  const colors = {
    borderColor: '#DA7F0B',
    buttonColor: '#DA7F0B',
  };

  const classes = useStyles({ colors });
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState('0');
  const [selectMonthDisabled, setSelectMonthDisabled] = useState(false);

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
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Box width="100%" className={classes.inputOptions}>
            <FormControl id="form-control-year" className={classes.formControl}>
              <InputLabel id="year-label" htmlFor="select-year">Ano</InputLabel>
              <Select
                id="select-year"
                labelId="year-label"
                value={year}
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
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
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
