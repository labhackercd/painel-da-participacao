/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { isDesktop, isTablet } from 'react-device-detect';
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
      onClick={onClick}
    />
  );
};

const CustomLeft = ({ onClick }) => {
  const classes = useStyles();
  return (
    <button
      type="button"
      className={`${classes.arrow} ${classes.arrowLeft}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="40"
        viewBox="0 0 24 24"
        width="40"
      >
        <rect fill="none" height="24" width="24" />
        <g>
          <polygon
            fill="#FFFF"
            points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"
          />
        </g>
      </svg>
    </button>
  );
};

const CustomRight = ({ onClick }) => {
  const classes = useStyles();
  return (
    <button
      type="button"
      className={`${classes.arrow} ${classes.arrowRight}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="40"
        viewBox="0 0 24 24"
        width="40"
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <polygon
            fill="#FFFF"
            points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"
          />
        </g>
      </svg>
    </button>
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
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={isDesktop || isTablet}
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
      customLeftArrow={<CustomLeft />}
      customRightArrow={<CustomRight />}
    >
      {carouselItens.map((item) => (
        <CarouselItem item={item} key={item.toolName} />
      ))}
    </Carousel>
  );
}
