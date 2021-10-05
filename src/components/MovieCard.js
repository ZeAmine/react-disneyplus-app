import React from "react";
import { RiInformationFill, RiPlayCircleFill } from "react-icons/all";
import NoImage from "../assets/images/brands/noImage.png";
import "../styles/MovieCard.css";

const MovieCard = ({ id, poster, title, watching }) => {
  const timeleft = Math.floor(Math.random() * 99) + 1;
  const barWidth = 100 - timeleft;

  return (
    <div className="movieCard">
      <a href="/">
        <div className="movieCard__container">
          {!poster && <span className="movieCard__title">{title}</span>}
          {watching ? (
            <>
              <div className="movieCard__progressBar">
                <div
                  style={{ width: barWidth + "%" }}
                  className="movieCard__colorBar"
                />
              </div>
              <div className="movieCard__watchingData">
                <h3>{title}</h3>
                <div className="movieCard__lowerPart">
                  <div className="movieCard__buttons">
                    <RiInformationFill />
                    <RiPlayCircleFill />
                  </div>
                  <span className="movieCard__timeLeft">
                    {timeleft} min restantes
                  </span>
                </div>
              </div>
            </>
          ) : null}
          <img
            src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : NoImage}
            alt={title}
            className="movieCard__img"
          />
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
