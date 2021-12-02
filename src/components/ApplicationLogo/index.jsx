import React from 'react';
import Link from 'next/link';

import useStyles from './style';
import logo from '../../assets/images/logos/logo_eMonitor.png';

export default function ApplicationLogo() {
  const classes = useStyles();

  return (
    <Link href={`${process.env.NEXT_PUBLIC_INITIAL_PAGE_URL}`}>
      <img src={logo} alt="Logo da aplicação" className={classes.logoClass} />
    </Link>
  );
}
