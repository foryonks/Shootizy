import React from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import Logo from "./Logo";

// import { Link } from "react-router-dom";

// import logo from "@axa/web-toolkit/images/axa.svg";

const Header = () => {
  return (
    <header className="header">
      <TopHeader />

      <div className="header-main">
        <Logo />
        <span className="navigation">
          <NavBar />
          <button className="btn-big">Réserver mon Shooting</button>
        </span>
      </div>
    </header>
  );
};

export default Header;
