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

      {/* <div className="header-meta header-meta--adjusted hidden-sm-down">
        <div className="container-fluid d-flex flex-row-reverse">
          <UserInfo className="p-2" />
        </div>
      </div>
      <iv className="header-main header-main--noborder">
        <div className="container d-flex">
          <Link to="/" className="header-brand">
            <img src={logo} className="header-brand-image" alt="AXA logo" />
            <span className="header-brand__text">
              <strong>AXA en France</strong>
              <br />
              <span>Gestion de Plan de Charge</span>
            </span>
          </Link>
          <NavBar navLinks={navLinks} navId="navheader" className="ml-auto" />
        </div>
      </div> */}
    </header>
  );
};

export default Header;
