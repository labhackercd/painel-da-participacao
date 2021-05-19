/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './carouselItem';

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
      toolName: 'Wikilegis',
      description: 'Opiniões em textos de propostas legislativas',
      color: '#14D768',
      buttonText: 'Ver a participação no Wikilegis',
      toolPage: `${process.env.NEXT_PUBLIC_WIKILEGIS_PAGE_URL}`,
    },
    {
      id: 2, toolName: 'Audiências Interativas', description: 'Perguntas aos parlamentares', color: '#F59D2A', buttonText: 'Ver a participação no Audiências', toolPage: `${process.env.NEXT_PUBLIC_AUDIENCIAS_PAGE_URL}`,
    },
  ];

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
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
        <CarouselItem item={item} />
      ))}
    </Carousel>
  );
}
