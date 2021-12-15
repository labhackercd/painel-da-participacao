/* eslint-disable react/prop-types */
import React from 'react';
import { isTablet } from 'react-device-detect';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  Box,
} from '@material-ui/core';

import TotalFrame from '../Frames/TotalFrame';

export default function CaroulselCards(props) {
  const { carouselItens } = props;
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
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1.5,
    },
  };

  return (
    <Carousel
      arrows={false}
      centerMode={isTablet && false}
      responsive={responsive}
    >
      {carouselItens.map((item) => (
        <Box
          width="100%"
          display="flex"
          padding="0"
          key={item.title}
          justifyContent="center"
        >
          <TotalFrame
            isLoaded={item.isLoaded}
            info={item.info}
            title={item.title}
            toolTipText={item.toolTipText}
            toolTipAriaLabel={item.toolTipAriaLabel}
            toolTipColor={item.toolTipColor}
            subInformation={item.subInformation}
          />
        </Box>
      ))}
    </Carousel>
  );
}

CaroulselCards.propTypes = {
  carouselItens: PropTypes.array,
};

CaroulselCards.defaultProps = {
  carouselItens: [],
};
