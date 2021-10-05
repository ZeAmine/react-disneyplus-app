import React from "react";

export const sliderConfig = {
  arrows: true,
  accessibility: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: (
    <button className="arrow-button">
      {/*<ArrowForwardIosIcon className="slick-arrows" />*/}
    </button>
  ),
  prevArrow: (
    <button className="arrow-button">
      {/*<img src="" alt="" className="slick-arrow"/>*/}
    </button>
  ),
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
