import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Badag from "../assets/images/sliders/slider-badag.jpeg";
import Badging from "../assets/images/sliders/slider-badging.jpeg";
import Scale from "../assets/images/sliders/slider-scale.jpeg";
import Scales from "../assets/images/sliders/slider-scales.jpeg";
import "../styles/ImgSlider.css";

const ImgSlider = () => {
  const settings = {
    dots: true,
    accessibility: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 700,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 992,
      },
      {
        breakpoint: 10000,
        centerMode: true,
      },
    ],
  };

  return (
    <article>
      <Slider className="slider" {...settings}>
        <div className="slider__container">
          <img src={Badag} alt="bg slider" className="slider__image" />
        </div>
        <div className="slider__container">
          <img src={Badging} alt="bg slider" className="slider__image" />
        </div>
        <div className="slider__container">
          <img src={Scale} alt="bg slider" className="slider__image" />
        </div>
        <div className="slider__container">
          <img src={Scales} alt="bg slider" className="slider__image" />
        </div>
      </Slider>
    </article>
  );
};

export default ImgSlider;
