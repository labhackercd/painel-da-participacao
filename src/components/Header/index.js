/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Button, Box, FormControl, InputBase, InputLabel, Select,
  AppBar, Toolbar,
} from '@material-ui/core';
import * as APPLICATION_OPTIONS from '../../settings/applicationOptions/index';
import * as APPLICATION_CONSTANTS from '../../utils/constants/index';

import { useStyles } from './style';

export default function Header(props) {
  const colors = props.headerColors;

  const classes = useStyles({ colors });
  const [selectedYear, setSelectedYear] = useState(APPLICATION_OPTIONS.DEFAULT_YEAR_PERIOD);
  const [month, setMonth] = useState(APPLICATION_OPTIONS.DEFAULT_MONTH_PERIOD);
  const [selectMonthDisabled, setSelectMonthDisabled] = useState(true);

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
  const rangeOfYears = (start, end) => (Array(end - start + 1).fill(start).map((year2, index) => year2 + index)).reverse();
  const yearsRange = rangeOfYears(props.initialYear, APPLICATION_CONSTANTS.CURRENT_YEAR);
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
                {APPLICATION_CONSTANTS.MONTHS_LIST.map((monthItem, indexMonth) => <option key={`month${monthItem}`} value={indexMonth + 1}>{monthItem}</option>)}
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
