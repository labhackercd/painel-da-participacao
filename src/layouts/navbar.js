/* eslint-disable react/prop-types */
import {
  AppBar, Toolbar, makeStyles, IconButton, Drawer, Box, Tab, Tabs,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import logoCamaraDosDeputados from '../assets/images/logos/logo_cd.svg';
import logoPainelDaParticipacao from '../assets/images/logos/logo_painel_vertical.png';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.black.main,
    width: '100%',
    padding: '0 50px',
    '@media (max-width: 1100px)': {
      padding: '0 0',
    },
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
  tab: {
    height: '92%',
    textTransform: 'capitalize',
    fontWeight: '600',
    margin: '0rem 0 0 0rem',
    fontSize: '1.2rem',
  },

  toolbarContentMobile: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItens: 'center',
  },
  mobileLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desktopNavbarContent: {
    width: '100%',
    height: '10vh',
    display: 'flex',
  },
  camaraBar: {
    height: '6vh',
    width: '100%',
    backgroundColor: '#363636',
    padding: '2vh',
  },
}));

function LinkTab(parans) {
  const classes = useStyles();
  const { url, ...props } = parans;
  return (

    <Link href={{ pathname: url }}>
      <Tab className={classes.tab} {...props} />
    </Link>

  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
  };
}

export default function PageNavbar(props) {
  const {
    header, drawerContainer, drawerMobile, divider, offset,
    toolbarContentMobile, mobileLogo, desktopNavbarContent,
    camaraBar,
  } = useStyles();
  const { value } = props;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 1100
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false })));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const camaraDeputadosLogo = (
    <img src={logoCamaraDosDeputados} alt="Logo Câmara dos Deputados" />
  );

  const painelParticipacaoLogo = (
    <img src={logoPainelDaParticipacao} alt="Logo da Painel da Painel da Participação" />
  );


  function NavTabs(options) {
    const { orientation } = options;

    return (
      <Tabs
        value={value}
        TabIndicatorProps={{ style: { background: 'linear-gradient(90deg, rgba(20, 215, 104, 0.5) 0%, rgba(17, 129, 233, 0.5) 32.81%, rgba(245, 157, 42, 0.5) 69.79%, rgba(228, 56, 180, 0.5) 100%)' } }}
        orientation={orientation}
      >
        <LinkTab
          label="Inicio"
          aria-label="Inicio"
          aria-selected={false}
          url={`${process.env.NEXT_PUBLIC_INITIAL_PAGE_URL}`}
          index="0"
          {...a11yProps(0)}
        />
        <LinkTab
          id="audienciasPanelTab"
          label="Audiências Interativas"
          aria-label="Página Audiências"
          aria-selected
          url={`${process.env.NEXT_PUBLIC_AUDIENCIAS_PAGE_URL}`}
          index="1"
          {...a11yProps(1)}
        />
        <LinkTab
          id="wikilegisPanelTab"
          label="Wikilegis"
          aria-label="Página Wikilegis"
          aria-selected={false}
          url={`${process.env.NEXT_PUBLIC_WIKILEGIS_PAGE_URL}`}
          index="2"
          {...a11yProps(2)}
        />
        <LinkTab
          id="sobrePanelTab"
          label="Sobre"
          aria-label="Página sobre"
          aria-selected={false}
          url={process.env.NEXT_PUBLIC_SOBRE_PAGE_URL}
          index="3"
          {...a11yProps(3)}
        />
        <LinkTab
          id="apiPanelTab"
          label="APIs"
          aria-label="Página apis"
          aria-selected={false}
          url={process.env.NEXT_PUBLIC_API_PAGE_URL}
          index="4"
          {...a11yProps(4)}
        />
      </Tabs>
    );
  }

  const displayDesktop = () => (
    <>
      <div className={camaraBar}>
        {camaraDeputadosLogo}
        {' '}
      </div>
      <Toolbar className={desktopNavbarContent}>
        {painelParticipacaoLogo}
        <Box width="100%" display="flex" justifyContent="flex-end">
          <NavTabs orientation="horizontal" />
        </Box>
      </Toolbar>
    </>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          classes={{ paper: drawerMobile }}
        >
          <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
            <ChevronRightIcon />
          </IconButton>
          <Divider className={divider} variant="middle" />
          <div className={drawerContainer}><NavTabs orientation="vertical" /></div>
        </Drawer>
        <div className={toolbarContentMobile}>
          <div className={mobileLogo}>{camaraDeputadosLogo}</div>
          <IconButton
            {...{
              edge: 'end',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>

      </Toolbar>
    );
  };

  return (
    <header>
      {mobileView ? displayMobile() : displayDesktop()}
      <div className={offset} />
    </header>
  );
}
