import React from 'react';
import { Drawer, Grid, Typography }  from '@material-ui/core';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from 'clsx';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },

  homeMenuContainer: {
    margin: '2rem 0 0 2rem',
    width: 'auto',
  }
}));


export default function SettingsSideBar() {
  const classes = useStyles()
  const [active, setActive] = React.useState([true,false,false]);

    function ListItemSideBar(props){
        const ItemIcon = props.icon;
        var iconColor = props.isActive ? 'green' : 'white';
        var textColor = props.isActive ? 'secondary' : 'textPrimary';

        return(
            <ListItem button onClick={() => handleChange(props.itemId)}>
                <ListItemIcon><ItemIcon style={{ color: iconColor}}/></ListItemIcon>
                <ListItemText classes={{ root: props.classes.root }} primary={<Typography color={textColor}>{props.title}</Typography>} />
            </ListItem>
        )
    }

    function handleChange(id){
        let newState = active.map(a=>a=false); //Set all sidebar fields as inactive
        newState[id] = true;
        setActive(newState);
    }

    return (
        <Grid container className={classes.homeMenuContainer}>
            <Drawer variant="permanent" classes={{paper: clsx(classes.drawerPaper),}} PaperProps={{style: {backgroundColor: 'transparent',boxShadow: 'none',},}}>
                <List>
                    <ListItemSideBar id="generalSettings" itemId={0} icon={SettingsIcon} classes={classes} isActive={active[0]} title="Configurações Gerais"></ListItemSideBar>
                    <ListItemSideBar id="tools" itemId={1} icon={SettingsIcon} classes={classes} isActive={active[1]} title="Ferramentas"></ListItemSideBar>
                    <ListItemSideBar id="about" itemId={2} icon={InfoIcon} classes={classes} isActive={active[2]} title="Sobre o Dashboard"></ListItemSideBar>
                </List>
            </Drawer>
        </Grid>
    )
}