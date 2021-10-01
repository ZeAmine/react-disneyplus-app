import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import "../styles/Headers.css";

const Headers = () => {
  return (
    <header className="header">
      <Navbar />
      <User />
    </header>
  );
};

export default Headers;
