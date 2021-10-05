import React from "react";
import Single from "./Single";
import requests from "../requests";
import "../styles/Movies.css";

const Movies = () => {
  return (
    <section className="movies">
      <Single title={"Continuer à regarder"} fetchUrl={requests.fetchRandom} watching={true}/>
      <Single title={"Films Disney"} fetchUrl={requests.fetchDisney} watching={false} />
      <Single title={"Star Wars"} fetchUrl={requests.fetchStarWars} watching={false} />
      <Single title={"Films Pixar"} fetchUrl={requests.fetchPixar} watching={false} />
      <Single title={"Action et Aventures"} fetchUrl={requests.fetchMarvel} watching={false} />
      <Single title={"Les Simpsons"} fetchUrl={requests.fetchSimpsons} watching={false} />
      <Single title={"Documentaires"} fetchUrl={requests.fetchDocumentaries} watching={false} />
    </section>
  );
};

export default Movies;
