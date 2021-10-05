import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderConfig } from "../data";
import useSingle from "../useSingle";
import MovieCard from "./MovieCard";
import "../styles/Single.css";

const Single = ({ title, fetchUrl, watching }) => {
  const { movies } = useSingle(fetchUrl);
  console.log(movies);

  return (
    <>
      {movies.length > 0 ? (
        <article className="single">
          <h4 className="single__title">{title}</h4>
          <Slider className="single__slider" {...sliderConfig}>
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                id={movie.id}
                poster={movie.backdrop_path}
                title={movie.title}
                watching={watching}
              />
            ))}
          </Slider>
        </article>
      ) : (
        <h1>CA CHARGE</h1>
      )}
    </>
  );
};

export default Single;
