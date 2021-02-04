import React, { useState, useEffect } from 'react';
import {
  Drawer, Divider, Grid, Typography, IconButton,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MenuItens from './menuItens';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    margin: '10rem 0 0 0',
    color: theme.palette.lightGrey.main,
  },
  homeMenuContainer: {
    margin: '2rem 0 0 2rem',
    width: 'auto',
  },
  divider: {
    background: theme.palette.lightGrey.main,
  },
}));

export default function HomeMenu() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(true);

  function handleDrawerOpen() {
    setOpenMenu(true);
  }

  function handleDrawerClose() {
    setOpenMenu(false);
  }

  return (
    <Grid container className={classes.homeMenuContainer}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !openMenu && classes.drawerPaperClose),
          root: "margin: '10rem'",
        }}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
        open={openMenu}
      >
        <MenuItens />
        <Grid container className={classes.toolbarIcon}>
          <Divider />
          { openMenu
            ? (
              <>
                <Grid item md={7} />
                <Grid item md={3}>
                  <Typography style={{ color: classes.toolbarIcon.color }}>ocultar</Typography>
                </Grid>
                <Grid item md={2}>
                  <IconButton onClick={handleDrawerClose} id="drawer-close">
                    <ChevronLeftIcon style={{ color: '#979797' }} />
                  </IconButton>
                </Grid>
              </>
            ) : (
              <IconButton onClick={handleDrawerOpen} id="drawer-open">
                <ChevronRightIcon style={{ color: '#979797' }} />
              </IconButton>
            )}
        </Grid>
      </Drawer>
    </Grid>
  );
}
