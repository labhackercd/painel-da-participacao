import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Box,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const headersData = [
  {
    label: 'Painel Geral',
    href: '/painelgeral',
  },
  {
    label: 'Audiências',
    href: '/audiencias',
  },
  {
    label: 'Wikilegis',
    href: '/wikilegis',
  },
  {
    label: 'Sobre',
    href: '/sobre',
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.black.main,
    paddingRight: '79px',
    paddingLeft: '118px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left',
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  mobileToolBar: {
    background: 'green',
  },
  drawerContainer: {
    padding: '20px 60px',
  },
  drawerMobile: {
    background: '#252525',
    color: 'white',
  },
  divider: {
    background: 'white',
  },
  icon: {
    color: 'white',
  },
}));

export default function PageNavbar() {
  const {
    header, logo, menuButton, toolbar, drawerContainer, drawerMobile, divider, icon,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false })));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const getDrawerChoices = () => headersData.map(({ label, href }) => (
    <Link href={{ pathname: href }}>
      {label}
    </Link>
  ));

  const femmecubatorLogo = (
    <img src={`${process.env.NEXT_PUBLIC_APPLICATION_BASE_PATH_URL}/logo/logo_cd.svg`} alt="Logo Câmara dos Deputados" />
  );

  const getMenuButtons = () => headersData.map(({ label, href }) => (
    <Button
      {...{
        key: label,
        color: 'inherit',
        to: href,
        className: menuButton,
      }}
    >
      {label}
    </Button>
  ));

  const displayDesktop = () => (
    <Toolbar>
      {femmecubatorLogo}
      <Box width="100%" display="flex" alignContent="space-between">
        {getMenuButtons()}
      </Box>
    </Toolbar>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          classes={{ paper: drawerMobile }}
        >
          <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
            <ChevronLeftIcon />
          </IconButton>
          <Divider className={divider} variant="middle" />
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar position="absolute" className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
