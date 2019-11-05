import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "scripts/components/Breadcrumbs";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import Logo from "./Logo";
import useWindowScrollPosition from "scripts/hooks/useWindowScrollPosition";

let sticky = 0;
let gap = 0;

const Header = (props, ref) => {
  const headerRef = useRef();
  const [className, setClassName] = useState();
  let options = {
    throttle: 25,
  };
  let { y } = useWindowScrollPosition(options);

  // const forceUpdate = () => {
  //   console.log("forceUpdate");
  //   y = window.pageYOffset;
  //   updateHeaderSticky();
  // };

  const updateHeaderSticky = () => {
    const header = headerRef.current;
    if (!gap) {
      const content = window.getComputedStyle(header, ":before");
      gap = parseInt(content.getPropertyValue("content").replace(/"/g, ""), 10);
    }
    sticky = sticky > 0 ? sticky : header.offsetTop - gap;
    y > sticky ? setClassName("sticky") : setClassName("");
  };
  useEffect(() => {
    updateHeaderSticky();
    // window.addEventListener("pageChange", forceUpdate);
    // return () => {
    //   window.removeEventListener("pageChange", forceUpdate);
    // };
  });

  return (
    <div className="header-wrapper">
      <header className={`header ${className}`}>
        <div className="header-content">
          <TopHeader />
          <div className="header-main" ref={headerRef}>
            <Logo />
            <span className="navigation">
              <NavBar />
              <Link to="/booking" className="btn-big">
                Réserver mon Shooting
              </Link>
            </span>
          </div>
        </div>
        <Breadcrumbs className="header__breadcrumbs" />
      </header>
    </div>
  );
};

export default Header;
