import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { Box } from '@material-ui/core';
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

export default function HeaderMobile() {
  const classes = useStyles();
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
      <Button onClick={handleOpen}>Open dialog</Button>
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
