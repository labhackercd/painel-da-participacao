/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { Box, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStyles } from './style';

import * as APPLICATION_CONSTANTS from '../../utils/constants/index';

const Picker = dynamic(() => import('react-mobile-picker'), {
  ssr: false,
});

const Transition = React.forwardRef(
  // eslint-disable-next-line prefer-arrow-callback
  function Transition(props, ref) {
    return <Slide data-testid="slide" direction="up" ref={ref} {...props} />;
  },
);

export default function HeaderMobile(props) {
  const colors = props.headerColors;

  const classes = useStyles({ colors });
  const [open, setOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('Todo o período');
  const [month, setMonth] = useState('Todos os meses');
  const [selectMonthDisabled, setSelectMonthDisabled] = useState(true);
  const [buttonType, setButtonType] = useState('period');
  const [valueGroups, setValueGroups] = useState({});
  // eslint-disable-next-line max-len
  const rangeOfYears = (start, end) => (Array(end - start + 1).fill(start).map((year2, index) => year2 + index)).reverse();
  const yearsRange = rangeOfYears(props.initialYear, APPLICATION_CONSTANTS.CURRENT_YEAR);
  const [optionGroups, setOptionGroups] = useState({
    title: [],
  });
  const handleOpen = (type) => {
    setButtonType(type);
    if (type === 'period') {
      const array = ['Todo o período', ...yearsRange];
      setOptionGroups({
        title: array,
      });
    } else if (type === 'months') {
      const array = ['Todos os meses', ...APPLICATION_CONSTANTS.MONTHS_LIST.map((monthItem) => monthItem)];
      setOptionGroups({
        title: array,
      });
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChangeYear = () => {
    setSelectedYear(valueGroups.title);
    if (valueGroups.title === 'Todo o período') {
      props.handlePeriodChange('0', '0');
      setSelectMonthDisabled(true);
    } else {
      setSelectMonthDisabled(false);
      props.handlePeriodChange('0', valueGroups.title);
    }
  };

  const handleChangeMonth = () => {
    setMonth(valueGroups.title);
    props.handlePeriodChange(optionGroups.title.indexOf(valueGroups.title, 0), selectedYear);
  };

  const selectFunction = () => {
    if (buttonType === 'period') {
      setMonth('Todos os meses');
      handleChangeYear();
    } else if (buttonType === 'months') {
      handleChangeMonth();
    }
    setOpen(false);
  };

  const handleChange = (name, value) => {
    setValueGroups(() => ({
      [name]: value,
    }));
  };

  return (
    <div>
      <Box display="flex">
        <button
          onClick={() => handleOpen('period')}
          type="button"
          variant="contained"
          style={{ marginRight: '19px', display: 'flex', alignContent: 'center' }}
          className={`${classes.selectMobile} ${classes.selectMobileEnabled}`}
        >
          <Typography alignSelf="center" alig>
            {selectedYear}
          </Typography>
          <ArrowDropDownIcon
            style={{
              color: '#FFFFFF',
              width: '24px',
              height: '24px',
              padding: 0,
              right: 0,
            }}
          />
        </button>
        <button
          onClick={() => selectedYear !== 'Todo o período' && handleOpen('months')}
          type="button"
          style={{ display: 'flex', alignContent: 'center' }}
          variant="contained"
          className={`${classes.selectMobile} ${selectMonthDisabled ? classes.selectMobileDisabled : classes.selectMobileEnabled}`}
        >
          <Typography alignSelf="center" alig>
            {month}
          </Typography>
          <ArrowDropDownIcon
            style={{
              color: '#FFFFFF',
              width: '24px',
              height: '24px',
              padding: 0,
              right: 0,
            }}
          />
        </button>
      </Box>
      <Dialog
        TransitionComponent={Transition}
        onClose={handleClose}
        open={open}
        classes={{ container: classes.root, paper: classes.paper }}
      >
        <Box className={classes.box}>
          <Button onClick={handleClose} className={classes.typhography}>Cancelar</Button>
          <Button onClick={() => selectFunction()} className={classes.typhography}>
            Confirmar
          </Button>
        </Box>
        <Picker
          optionGroups={optionGroups}
          valueGroups={valueGroups}
          onChange={handleChange}
        />
      </Dialog>
    </div>
  );
}
