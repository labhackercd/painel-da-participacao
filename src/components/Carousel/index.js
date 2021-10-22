/* eslint-disable react/prop-types */
import React from 'react';
import { isDesktop } from 'react-device-detect';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './carouselItem';
import apiCaroulselImg from '../../assets/images/caroulselImages/apicaroulsel.png';
import audienciasCaroulselImg from '../../assets/images/caroulselImages/audienciascaroulsel.png';
import sobreCaroulselImg from '../../assets/images/caroulselImages/sobrecaroulsel.png';
import wikilegisCaroulselImg from '../../assets/images/caroulselImages/wikilegiscaroulsel.png';

export default function Caroulsel() {
  const responsive = {
    largedesktop: {
      breakpoint: { max: 3840, min: 2160 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselItens = [
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

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={isDesktop}
      autoPlay={false}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside
      renderDotsOutside={false}
      responsive={responsive}
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {carouselItens.map((item) => (
        <CarouselItem item={item} key={item.toolName} />
      ))}
    </Carousel>
  );
}
