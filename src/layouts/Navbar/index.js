/* eslint-disable react/prop-types */
/* eslint-disable no-confusing-arrow */
import React, { useState, useEffect } from 'react';
import {
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Tab,
  Tabs,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Link from 'next/link';
import ApplicationLogo from '../../components/ApplicationLogo/index';

import logoCamaraDosDeputados from '../../assets/images/logos/logo_cd.svg';
import useStyles from './style';

function LinkTab(parans) {
  const classes = useStyles();
  const {
    url,
    currentSelectedValue,
    index,
    ...props
  } = parans;
  let isTabSelected = false;

  if (index !== undefined && currentSelectedValue !== undefined) {
    isTabSelected = index.toString() === currentSelectedValue.toString();
  }

  return (
    <Link href={{ pathname: url }}>
      <Tab
        className={
          isTabSelected ? `${classes.tab} ${classes.tabSelected}` : classes.tab
        }
        disableRipple
        {...props}
      />
    </Link>
  );
}

function a11yProps(index) {
  return {
    id: `tab-pagina-${index}`,
  };
}

export default function PageNavbar(props) {
  const {
    drawerContainer,
    drawerMobile,
    offset,
    toolbarContentMobile,
    toolbarContentMobileClose,
    mobileLogo,
    logoCamaraBar,
    desktopNavbarContent,
    camaraBar,
    iconMenu,
    tabsClass,
    indicatorClass,
  } = useStyles();
  const { value } = props;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => window.innerWidth < 1024
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false }));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const camaraDeputadosLogo = (
    <a
      href={process.env.NEXT_PUBLIC_CAMARA_SITE}
      target="_blank"
      rel="noopener noreferrer"
      style={{ lineHeight: 0 }}
    >
      <img style={{ width: '173px', height: '46px' }} src={logoCamaraDosDeputados} alt="Logo Câmara dos Deputados" />
    </a>
  );

  function NavTabs(options) {
    const { orientation } = options;

    return (
      <Tabs
        value={value}
        orientation={orientation}
        className={tabsClass}
        classes={{
          indicator: indicatorClass,
        }}
      >
        <LinkTab
          label="Início"
          aria-label="Início"
          aria-selected={false}
          url={`${process.env.NEXT_PUBLIC_INITIAL_PAGE_URL}`}
          index="0"
          currentSelectedValue={value}
          {...a11yProps(0)}
        />
        <LinkTab
          id="audienciasPanelTab"
          label="Audiências Interativas"
          aria-label="Página Audiências"
          aria-selected
          url={`${process.env.NEXT_PUBLIC_AUDIENCIAS_PAGE_URL}`}
          index="1"
          currentSelectedValue={value}
          {...a11yProps(1)}
        />
        <LinkTab
          id="wikilegisPanelTab"
          label="Wikilegis"
          aria-label="Página Wikilegis"
          aria-selected={false}
          url={`${process.env.NEXT_PUBLIC_WIKILEGIS_PAGE_URL}`}
          index="2"
          currentSelectedValue={value}
          {...a11yProps(2)}
        />
        <LinkTab
          id="sobrePanelTab"
          label="Sobre"
          aria-label="Página sobre"
          aria-selected={false}
          url={process.env.NEXT_PUBLIC_SOBRE_PAGE_URL}
          index="3"
          currentSelectedValue={value}
          {...a11yProps(3)}
        />
        <LinkTab
          id="apiPanelTab"
          label="APIs"
          aria-label="Página apis"
          aria-selected={false}
          url={process.env.NEXT_PUBLIC_API_PAGE_URL}
          index="4"
          currentSelectedValue={value}
          {...a11yProps(4)}
        />
      </Tabs>
    );
  }

  const displayDesktop = () => (
    <>
      <div className={camaraBar}>
        <div className={logoCamaraBar}>{camaraDeputadosLogo}</div>
      </div>
      <Toolbar className={desktopNavbarContent}>
        <ApplicationLogo />
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
          anchor="top"
          open={drawerOpen}
          onClose={handleDrawerClose}
          classes={{ paper: drawerMobile }}
        >
          <div className={toolbarContentMobileClose}>
            <div className={mobileLogo}>
              <ApplicationLogo />
            </div>

            <IconButton
              onClick={handleDrawerClose}
              style={{ color: 'white' }}
            >
              <CloseIcon className={iconMenu} />
            </IconButton>
          </div>

          <div className={drawerContainer}>
            <NavTabs orientation="vertical" />
          </div>
        </Drawer>
        <div className={toolbarContentMobile}>
          <div className={mobileLogo}>
            <ApplicationLogo />
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
            <MenuIcon className={iconMenu} />
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
