import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  AppBar, Tabs, Toolbar, Tab, Grid, IconButton,
} from '@material-ui/core';
// import Logo from '../../assets/logo.svg';
// import LogoutIcon from '../../assets/user_logout_icon.svg';
// import LogoutMenu from '../LogoutMenu/index';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.black.main,
    height: '5vh',
  },
  tab: {
    height: '92%',
    textTransform: 'capitalize',
    margin: '0.5rem 0 0 6rem',
  },
  menu: {
    '& .MuiPaper-root-16': {
      backgroundColor: theme.palette.mediumGrey.main,
    },
    '& div': {
      width: '14%',
    },
  },

}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CustomTab = withStyles({
  root: {
    textTransform: 'capitalize',
  },
})(Tab);

export default function NavBar(props) {
  const classes = useStyles();
  // const [logoutMenuOpen, setLogoutMenuOpen] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState();
  const {
    handleTabPanelChange, value,
  } = props;

  useEffect(() => {

  }, [value]);

  return (

    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Grid container>
          <Grid item md={2}>
            <div className={classes.logo}>
              <IconButton>{/* <Logo /> */}</IconButton>
            </div>
          </Grid>
          <Grid item md={9}>
            {value !== undefined
                && (
                <Tabs value={value} onChange={handleTabPanelChange} TabIndicatorProps={{ style: { background: '#00C354' } }} className={classes.tab}>
                  <CustomTab label="Dashboard" {...a11yProps(0)} />
                  <CustomTab label="Configurações" {...a11yProps(1)} />
                  <CustomTab label="Documentação" {...a11yProps(2)} />
                </Tabs>
                )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

NavBar.defaultProps = {
  value: 0,
  handleTabPanelChange: () => {},
};

NavBar.propTypes = {
  value: PropTypes.number,
  handleTabPanelChange: PropTypes.func,
};
