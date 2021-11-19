import React from 'react';
import useStyles from './style';
import logo from '../../assets/images/logos/logo_eMonitor.png';

export default function ApplicationLogo() {
  const classes = useStyles();

  return (
    <img
      src={logo}
      alt="Logo da aplicação"
      className={classes.logoClass}
    />
  );
}
