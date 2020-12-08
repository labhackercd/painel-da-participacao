import React from 'react';
import {Grid, Typography }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import WarningIcon from '@material-ui/icons/Warning';
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon'

import CamaraLogo from '../../../assets/SettingsContainer/logo_camara.svg'
import LabLogo from '../../../assets/SettingsContainer/logo_lab.svg'
import { ReactComponent as UserLogo }from '../../../assets/user_logout_icon.svg';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles((theme) => ({

  homeMenuContainer: {
    margin: '2rem 0 0 2rem',
    width: 'auto',
    height: 'auto'
  },
  paper:{
    backgroundColor: theme.palette.background.main,
    borderRadius: '5px 5px 5px 5px',
  },
  content:{
    maxHeight:"93.3vh",
    overflow:"auto",
      '::-webkit-scrollbar': {
        display:"none"
     }
  }
}));


export default function SettingsContent() {
    const classes = useStyles()

    function ToolsListItem(props){
        return(
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={11}>
                        <Typography variant="h5" color="textPrimary">{props.title}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Switch checked={props.checked} name="checkedA" inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                    </Grid>
                </Grid>
                <Divider style={{color:"#2C2C2C"}} />
            </Grid>
        )
    }

    function ToolsSection(){
        return(
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12}><Typography gutterBottom color="textPrimary">Ferramentas</Typography></Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Box padding={2}>
                                <Grid container>
                                    <Grid item xs={1}><WarningIcon></WarningIcon></Grid>
                                    <Grid item xs={11}><Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit quis turpis non laoreet. Pellentesque eget egestas odio. Nunc et quam eu nisl iaculis aliquam. Ut eu est nisl. Ut ac elementum neque, sed tempus magna. Aenean at ipsum sed erat vestibulum semper semper et nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Typography></Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Box padding={2}>
                                <Grid container spacing={1}>
                                    <ToolsListItem checked={false} title={"Wikilegis"}></ToolsListItem>
                                    <ToolsListItem checked={true} title={"Pauta Participativa"}></ToolsListItem>
                                    <ToolsListItem checked={true} title={"Enquetes"}></ToolsListItem>
                                    <ToolsListItem checked={false} title={"Disque-Câmara"}></ToolsListItem>
                                    <ToolsListItem checked={true} title={"Plenarinho"}></ToolsListItem>
                                    <ToolsListItem checked={false} title={"Audiências Interativas"}></ToolsListItem>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    function AboutSection(){
        return(
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item xs={12}><Typography gutterBottom color="textPrimary">Sobre o dashboard</Typography></Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} >
                            <Box padding={3}>
                                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit quis turpis non laoreet. Pellentesque eget egestas odio. Nunc et quam eu nisl iaculis aliquam. Ut eu est nisl. Ut ac elementum neque, sed tempus magna. Aenean at ipsum sed erat vestibulum semper semper et nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Typography>
                                <Typography>Donec vitae nunc mauris. Nam nec volutpat augue. Donec posuere nisi dolor, et elementum ligula bibendum consectetur. Aenean sagittis sapien augue, at tempus magna rhoncus eu. Nulla a hendrerit tortor, eget imperdiet augue. Nullam erat felis, dapibus in interdum volutpat, varius vel tortor. Aenean egestas purus et dui scelerisque porta. Mauris consectetur, velit sed hendrerit tristique, massa quam laoreet orci, gravida iaculis tellus neque non neque. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum faucibus lorem et vehicula. Sed id justo lectus. Aenean congue rutrum velit ac pulvinar. In tristique, dui id tempus pretium, eros sapien auctor ligula, vel pharetra elit justo id purus.</Typography>
                            </Box>
                            <Box display="flex" flexDirection="row-reverse" paddingX={3} paddingBottom={3} >
                                <Box marginX={3}><img src={CamaraLogo} alt="Logo Camara"></img></Box>
                                <Box><img src={LabLogo} alt="Logo LABHacker"></img></Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
    
    function HeaderSection(){
        return(
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={11}>
                        <Typography variant="h2" gutterBottom color="textPrimary">Painel de Configurações</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <SearchIcon style={{ color: "white"}} fontSize="large"></SearchIcon>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    function GeneralListItem(props){
        return(
            <Grid item xs={12}>
                <Box paddingY={2} paddingLeft={2}>
                    <Grid container>
                        <Grid item xs={1}><Icon><UserLogo/></Icon></Grid>
                        <Grid item xs={10}>
                            <Box component="span" display="block"><Typography variant="h5" color="textPrimary">Pedro Brandão</Typography></Box>
                            <Box component="span" display="block"><Typography variant="h6" color="secondary">Acesso Nível 1</Typography></Box>
                        </Grid>
                        <Grid item xs={1}><ArrowRightIcon></ArrowRightIcon></Grid>
                    </Grid>
                </Box>
                <Divider style={{color:"#2C2C2C"}} />
            </Grid>
        )
    }


    return (
        <Container className={classes.content}>      
            <Grid container spacing={3} className={classes.homeMenuContainer}>
                <HeaderSection></HeaderSection>

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography gutterBottom color="textPrimary">Gerais</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} style={{minHeight:"20rem"}}>
                                <GeneralListItem></GeneralListItem>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                <ToolsSection></ToolsSection>
                <AboutSection></AboutSection>
            </Grid>
        </Container>
    )
}