/* eslint-disable import/prefer-default-export */

import apiCaroulselImg from '../../../assets/images/caroulselImages/apicaroulsel.png';
import audienciasCaroulselImg from '../../../assets/images/caroulselImages/audienciascaroulsel.png';
import sobreCaroulselImg from '../../../assets/images/caroulselImages/sobrecaroulsel.png';
import wikilegisCaroulselImg from '../../../assets/images/caroulselImages/wikilegiscaroulsel.png';

export const carouselItens = [
  {
    id: 1,
    toolName: 'Audiências Interativas',
    description: 'Perguntas aos parlamentares',
    color: '#F59D2A',
    buttonText: 'Veja a participação',
    toolPage: `${process.env.NEXT_PUBLIC_AUDIENCIAS_PAGE_URL}`,
    img: audienciasCaroulselImg,
  },
  {
    id: 2,
    toolName: 'Wikilegis',
    description: 'Opiniões em textos de propostas legislativas',
    color: '#14D768',
    buttonText: 'Veja a participação',
    toolPage: `${process.env.NEXT_PUBLIC_WIKILEGIS_PAGE_URL}`,
    img: wikilegisCaroulselImg,
  },
  {
    id: 3,
    toolName: 'Sobre',
    description: 'Critérios e definições para os dados',
    color: '#1181E9',
    buttonText: 'Saiba mais',
    toolPage: `${process.env.NEXT_PUBLIC_SOBRE_PAGE_URL}`,
    img: sobreCaroulselImg,
  },
  {
    id: 4,
    toolName: 'APIs e Códigos abertos',
    description: 'Ferramentas para desenvolvedores',
    color: '#CE242E',
    buttonText: 'Acesse APIs e Códigos',
    toolPage: `${process.env.NEXT_PUBLIC_API_PAGE_URL}`,
    img: apiCaroulselImg,
  },
];
