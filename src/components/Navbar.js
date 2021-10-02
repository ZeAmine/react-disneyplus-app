import React from "react";
import Logo from "../assets/icons/logo.svg";
import Home from "../assets/icons/home-icon.svg";
import Search from "../assets/icons/search-icon.svg";
import List from "../assets/icons/watchlist-icon.svg";
import Original from "../assets/icons/original-icon.svg";
import Movie from "../assets/icons/movie-icon.svg";
import Series from "../assets/icons/series-icon.svg";
import { BiMenu } from "react-icons/all";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <BiMenu className="navbar__menu" />
      <a href="/">
        <img src={Logo} alt="Disney Plus Logo" className="navbar__logo" />
      </a>
      <ul className="navbar__list">
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src={Home} alt="accueil icon" />
            <span className="hover">Accueil</span>
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src={Search} alt="recherche icon" />
            <span className="hover">Recherche</span>
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src={List} alt="liste icon" />
            <span className="hover">Ma liste</span>
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src={Original} alt="original icon" />
            <span className="hover">Originals</span>
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src={Movie} alt="film icon" />
            <span className="hover">Film</span>
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src={Series} alt="series icon" />
            <span className="hover">Séries</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
