/* eslint-disable react/prop-types */
import {
  Toolbar, IconButton, Drawer, Box, Tab, Tabs,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import logoCamaraDosDeputados from '../../assets/images/logos/logo_cd.svg';
import logoPainelDaParticipacao from '../../assets/images/logos/logo_painel_vertical.png';

import useStyles from './style';

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
    camaraBar, mobileTabs,
  } = useStyles();
  const { value } = props;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 1280
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false })));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const camaraDeputadosLogo = (
    <img src={logoCamaraDosDeputados} alt="Logo Câmara dos Deputados" />
  );

  const painelParticipacaoLogo = (
    <img src={logoPainelDaParticipacao} alt="Logo da Painel da Painel da Participação" width="270px" height="80px" />
  );

  const painelParticipacaoLogoMobile = (
    <img
      src={logoPainelDaParticipacao}
      alt="Logo da Painel da Painel da Participação"
      width="106px"
      height="32px"
    />
  );

  function NavTabs(options) {
    const { orientation } = options;

    return (
      <Tabs
        value={value}
        TabIndicatorProps={{ style: { top: '96px', background: 'linear-gradient(90deg, rgba(20, 215, 104, 0.5) 0%, rgba(17, 129, 233, 0.5) 32.81%, rgba(245, 157, 42, 0.5) 69.79%, rgba(228, 56, 180, 0.5) 100%)' } }}
        orientation={orientation}
        className={mobileTabs}
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
          <Box height="50px" width="100%" display="flex" justifyContent="space-between" alignItems="center" padding="30px" paddingX="10px">
            <Box>
              <img src={logoPainelDaParticipacao} alt="Logo Painel da participação" width="106px" height="32px" />
            </Box>
            <Box>
              <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          <div className={drawerContainer}><NavTabs orientation="vertical" /></div>
        </Drawer>
        <div className={toolbarContentMobile}>
          <div className={mobileLogo}>
            {painelParticipacaoLogoMobile}
          </div>
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
