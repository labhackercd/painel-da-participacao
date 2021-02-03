import React from 'react';
import {
  List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';
import Link from 'next/link';
// import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';

import { makeStyles } from '@material-ui/core/styles';
/*
import DisqueCamaraIcon from '../../assets/0800_icon.svg';
import EnquetesIcon from '../../assets/enquetes_icon.svg';
import FaleConoscoIcon from '../../assets/fale_conosco_icon.svg';
import NoticiasIcon from '../../assets/noticias_icon.svg';
import PautaIcon from '../../assets/pauta_icon.svg';
import WikilegisIcon from '../../assets/wikilegis_icon.svg';
*/
const useStyles = makeStyles(() => ({
  root: {
    color: '#FFF',
  },
}));

export default function MenuItens() {
  const classes = useStyles();

  return (
    <List>
      <Link href={{
        pathname: process.env.NEXT_PUBLIC_DASHBOARD_PAGE_URL,
        query: { ferramenta: process.env.NEXT_PUBLIC_GENERAL_APP_PAGE_URL_QUERY },
      }}
      >
        <ListItem button id="general-view">
          <ListItemIcon>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText
            classes={{ root: classes.root }}
            primary={<Typography>Visão Geral</Typography>}
          />
        </ListItem>
      </Link>

      <Link href={{
        pathname: process.env.NEXT_PUBLIC_DASHBOARD_PAGE_URL,
        query: { ferramenta: process.env.NEXT_PUBLIC_AUDIENCIAS_APP_PAGE_URL_QUERY },
      }}
      >
        <ListItem button id="dashboard-audiencias">
          <ListItemIcon>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText
            classes={{ root: classes.root }}
            primary={<Typography>Audiências Interativas</Typography>}
          />
        </ListItem>
      </Link>

    </List>
  );
}
