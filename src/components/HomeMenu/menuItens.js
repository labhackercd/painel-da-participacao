import React from 'react';
import {
  List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';
import Link from 'next/link';
// import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const queryTool = router.query.ferramenta;

  const toolList = [
    {
      tool: 'general',
      id: 'general-view',
      title: 'Visão Geral',
      pathname: process.env.NEXT_PUBLIC_DASHBOARD_PAGE_URL,
      query: process.env.NEXT_PUBLIC_GENERAL_APP_PAGE_URL_QUERY,
    },
    {
      tool: 'audiencias',
      id: 'dashboard-audiencias',
      title: 'Audiências Interativas',
      pathname: process.env.NEXT_PUBLIC_DASHBOARD_PAGE_URL,
      query: process.env.NEXT_PUBLIC_AUDIENCIAS_APP_PAGE_URL_QUERY,
    },
  ];

  function colorOfItem(tool) {
    // If tool item is the one selected return green, else white
    if (queryTool === tool) {
      return 'green';
    }

    return 'white';
  }

  function renderListItem(tool) {
    return (
      <Link href={{
        pathname: tool.pathname,
        query: { ferramenta: tool.query },
      }}
      >
        <ListItem key={`#listitemindex${tool.id}`} button id={tool.id}>
          <ListItemIcon>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText
            classes={{ root: classes.root }}
            primary={(
              <Typography style={{ color: colorOfItem(tool.query) }}>{tool.title}</Typography>
            )}
          />
        </ListItem>
      </Link>
    );
  }

  return (
    <List>
      {toolList.map((tool) => (
        <li key={`#listitem${tool.id}`}>
          {renderListItem(tool)}
        </li>
      ))}

    </List>
  );
}
