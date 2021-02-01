import React from 'react';
import {List, Link, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';
import  DisqueCamaraIcon from '../../assets/0800_icon.svg';
import EnquetesIcon from '../../assets/enquetes_icon.svg';
import  FaleConoscoIcon from '../../assets/fale_conosco_icon.svg';
import  NoticiasIcon from '../../assets/noticias_icon.svg';
import  PautaIcon from '../../assets/pauta_icon.svg';
import  WikilegisIcon from '../../assets/wikilegis_icon.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#FFF'
  },
}));

export default function MenuItens() {
  const classes = useStyles()
  
  return (
    <List>
      <ListItem button id="general-view" component={Link} to="/dashboard">
        <ListItemIcon>
          <HomeIcon style={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Visão Geral</Typography>} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Audiências Interativas</Typography>} />
      </ListItem>
      {/*
      <ListItem button>
        <ListItemIcon>
          <DisqueCamaraIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>0800 Câmara</Typography>} />
        </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EnquetesIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Enquetes</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FaleConoscoIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Fale Conosco</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NoticiasIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Notícias</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PautaIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Pauta Participativa</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WikilegisIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Wikilegis 2.0</Typography>} />
      </ListItem>
      */}
    </List>
  )
}
