import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img
          src="/icons/logo.svg"
          alt="Disney Plus Logo"
          className="navbar__logo"
        />
      </a>
      <ul className="navbar__list">
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src="/icons/home-icon.svg" alt="accueil icon" />
            <span className="hover">Accueil</span>
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src="/icons/search-icon.svg" alt="recherche icon" />
            <span className="hover">Recherche</span>
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src="/icons/watchlist-icon.svg" alt="liste icon" />
            <span className="hover">Ma liste</span>
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src="/icons/original-icon.svg" alt="original icon" />
            <span className="hover">Originals</span>
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src="/icons/movie-icon.svg" alt="film icon" />
            <span className="hover">Film</span>
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__btns">
            <img src="/icons/series-icon.svg" alt="series icon" />
            <span className="hover">Séries</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
