import React from "react";
import Single from "./Single";

const Movies = () => {
  return (
    <section className="movies">
      <div className="movies__wrap">
        <Single />

        {/*<h4>Orignals</h4>*/}
        {/*<h4>Les plus grand succès</h4>*/}
        {/*<h4>Nouveau sur Disney+</h4>*/}
      </div>
    </section>
  );
};

export default Movies;
