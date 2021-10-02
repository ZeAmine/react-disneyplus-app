import React from "react";
import "../styles/Home.css";
import ImgSlider from "./ImgSlider";
import Collections from "./Collections";
import Movies from "./Movies";

const Home = () => {
  return (
    <main className="main">
      <div className="main__container">
        <ImgSlider />
        <Collections />
        <Movies />
      </div>
    </main>
  );
};

export default Home;
