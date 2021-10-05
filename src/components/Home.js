import React from "react";
import ImgSlider from "./ImgSlider";
import Collections from "./Collections";
import Movies from "./Movies";
import "../styles/Home.css";

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
