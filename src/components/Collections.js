import React from "react";
import Disney from "../assets/images/brands/viewers-disney.png";
import Marvel from "../assets/images/brands/viewers-marvel.png";
import National from "../assets/images/brands/viewers-national.png";
import StarWars from "../assets/images/brands/viewers-starwars.png";
import Pixar from "../assets/images/brands/viewers-pixar.png";

import videoD from "../assets/videos/1564674844-disney.mp4";
import videoM from "../assets/videos/1564676115-marvel.mp4";
import videoN from "../assets/videos/1564676296-national-geographic.mp4";
import videoP from "../assets/videos/1564676714-pixar.mp4";
import videoS from "../assets/videos/1608229455-star-wars.mp4";
import "../styles/Collections.css";

const Collections = () => {
  return (
    <section className="collections">
      <div className="collections__wrap">
        <a href="/">
          <div className="collection__card">
            <img src={Disney} alt="Viewer Disney" className="collection__img" />
            <video
              className="collection__video"
              loop={true}
              playsInline={true}
              muted
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
            >
              <source src={videoD} typeof="video/mp4" />
            </video>
          </div>
        </a>
        <a href="/">
          <div className="collection__card">
            <img src={Pixar} alt="Viewer Pixar" className="collection__img" />
            <video
              className="collection__video"
              loop={true}
              playsInline={true}
              muted
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
            >
              <source src={videoP} typeof="video/mp4" />
            </video>
          </div>
        </a>
        <a href="/">
          <div className="collection__card">
            <img src={Marvel} alt="Viewer Marvel" className="collection__img" />
            <video
              className="collection__video"
              loop={true}
              playsInline={true}
              muted
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
            >
              <source src={videoM} typeof="video/mp4" />
            </video>
          </div>
        </a>
        <a href="/">
          <div className="collection__card">
            <img
              src={StarWars}
              alt="Viewer StarWars"
              className="collection__img"
            />
            <video
              className="collection__video"
              loop={true}
              playsInline={true}
              muted
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
            >
              <source src={videoS} typeof="video/mp4" />
            </video>
          </div>
        </a>
        <a href="/">
          <div className="collection__card">
            <img
              src={National}
              alt="Viewer NationalG"
              className="collection__img"
            />
            <video
              className="collection__video"
              loop={true}
              playsInline={true}
              muted
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
            >
              <source src={videoN} typeof="video/mp4" />
            </video>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Collections;
