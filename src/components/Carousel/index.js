/* eslint-disable react/prop-types */
import React from 'react';
import { isDesktop } from 'react-device-detect';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './carouselItem';

import { useStyles } from './style';
import { carouselItens } from '../../settings/texts/InitialPage/index';

const CustomDot = ({ onClick, active }) => {
  const classes = useStyles();
  return (
    <li
      className={`${classes.dot} ${
        active ? classes.dotActive : classes.dotInactive
      }`}
      onClick={() => onClick()}
    ></li>
  );
};

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

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={isDesktop}
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
      customDot={<CustomDot />}
    >
      {carouselItens.map((item) => (
        <CarouselItem item={item} key={item.toolName} />
      ))}
    </Carousel>
  );
}
