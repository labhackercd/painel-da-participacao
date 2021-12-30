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

const Picker = dynamic(() => import('react-mobile-picker'), {
  ssr: false,
});

const Transition = React.forwardRef(
  // eslint-disable-next-line prefer-arrow-callback
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  },
);

export default function HeaderMobile(props) {
  const colors = props.headerColors;

  const classes = useStyles({ colors });
  const [open, setOpen] = useState(false);
  const [valueGroups, setValueGroups] = useState({
    period: 'Todo o Período',
  });
  // eslint-disable-next-line no-unused-vars
  const [optionGroups, setOptionGroups] = useState({
    title: ['Todo o Período', '2020', '2021', '2022'],
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (name, value) => {
    setValueGroups((valueGroupsItems) => ({
      ...valueGroupsItems,
      [name]: value,
    }));
  };

  return (
    <div>
      <Box display="flex">
        <button
          onClick={handleOpen}
          type="button"
          variant="contained"
          style={{ marginRight: '19px', display: 'flex', alignContent: 'center' }}
          className={`${classes.selectMobile} ${classes.selectMobileEnabled}`}
        >
          <Typography alignSelf="center" alig>
            Todo o Período
          </Typography>
          <ArrowDropDownIcon
            style={{
              color: '#FFFFFF',
              width: '24px',
              height: '24px',
              padding: 0,
              paddingBottom: '4px',
            }}
          />
        </button>
        <button
          type="button"
          style={{ display: 'flex', alignContent: 'center' }}
          variant="contained"
          className={`${classes.selectMobile} ${classes.selectMobileDisabled}`}
        >
          <Typography alignSelf="center" alig>
            Todos os meses
          </Typography>
          <ArrowDropDownIcon
            style={{
              color: '#FFFFFF',
              width: '24px',
              height: '24px',
              padding: 0,
              paddingBottom: '4px',
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
          <Button className={classes.typhography}>Confirmar</Button>
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
