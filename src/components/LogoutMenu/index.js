import React,{useEffect} from 'react';
import {Icon, Box, Typography, Divider} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LogoutIcon  from '../../assets/user_logout_icon.svg';

export default function LogoutMenu(props) {
  
  useEffect(() => {
    // Nothing todo
  },[props.open]);

  return(
     <Menu id="simple-menu" keepMounted open={props.open} anchorEl={props.anchorEl} className={props.classes.menu} getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
           transformOrigin={{ vertical: "top", horizontal: "center" }} onClose={props.handleClose} >
         <MenuItem onClick={props.handleClose}>
           <Box width={"30%"}><Icon><LogoutIcon/></Icon></Box>
           <Box width={"70%"} paddingLeft={1}>
             <Box component="span" display="block"><Typography variant="h5" color="textPrimary">Pedro Brandão</Typography></Box>
             <Box component="span" display="block"><Typography variant="h6" color="secondary">Acesso Nível 1</Typography></Box>
           </Box>
         </MenuItem>
         <MenuItem onClick={props.handleClose} id="logoutButtonItem">
           <Divider />
           <Box display="flex" flexDirection="row-reverse" minWidth="100%">
             <Box component="span" display="block" paddingLeft={1}><ExitToAppIcon fontSize="small"></ExitToAppIcon></Box>
             <Box component="span" display="block"><Typography>Sair </Typography></Box>
           </Box>
         </MenuItem>
   </Menu>
  )
}
