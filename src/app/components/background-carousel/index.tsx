import { flatMap } from "lodash";
import React from "react";

import Slider from "react-slick";

import { BackgoundImage } from './index.style';

class BackgroundCarousel extends React.Component {
  render() {
    var settings = {
      accessibility: false,
      autoplay: true,
      dots: false,
      draggable: false,
      fade: true,
      arrows: false,
      pauseOnHover: false,
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slider-ctn',
    };
    return (
      <Slider {...settings}>
        <div>
          <BackgoundImage backgroundImg={'https://i.imgur.com/bOoPywT.jpg'} alt="Building windows"></BackgoundImage>
        </div>
        <div>
          <BackgoundImage backgroundImg={'https://i.imgur.com/wD2UJC9.jpg'} alt="Office meeting room"></BackgoundImage>
        </div>
        <div>
          <BackgoundImage backgroundImg={'https://i.imgur.com/6L6a2Bm.jpg'} alt="Desk with office supplies"></BackgoundImage>
        </div>
        <div>
          <BackgoundImage backgroundImg={'https://i.imgur.com/8Sg04J1.jpg'} alt="Building in afternoon"></BackgoundImage>
        </div>
      </Slider>
    );
  }
}

export default BackgroundCarousel;