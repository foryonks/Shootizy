import React from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import logo from "../../../assets/logo.svg";

// import { Link } from "react-router-dom";

// import logo from "@axa/web-toolkit/images/axa.svg";

const Header = ({ showAdmLinks }) => {
  return (
    <header className="header">
      <TopHeader />

      <div className="header-main">
        <span className="logo">
          <img src={logo} alt="Shootizy" />{" "}
          <span className="logo-text">
            Le shooting photo
            <br /> qui vous chouchoute
          </span>
        </span>
        <span className="navigation">
          <NavBar />
          <button className="btn-big">Réserver mon Shooting</button>
        </span>
      </div>
    </header>
  );
};

export default Header;
