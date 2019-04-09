import React, { useRef, useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import Logo from "./Logo";
import useWindowScrollPosition from "scripts/hooks/useWindowScrollPosition";

// import { Link } from "react-router-dom";

// import logo from "@axa/web-toolkit/images/axa.svg";
let sticky = 0;
let gap = 0;
const Header = (props, ref) => {
  const headerRef = useRef();
  const [className, setClassName] = useState();
  let options = {
    throttle: 40,
  };
  let { y } = useWindowScrollPosition(options);

  useEffect(() => {
    const header = headerRef.current;
    const content = window.getComputedStyle(header, ":before");
    let value = content.getPropertyValue("content");
    gap = gap === 0 ? parseInt(content.getPropertyValue("content").replace(/"/g, ""), 10) : gap;
    sticky = sticky > 0 ? sticky : header.offsetTop - gap;
    y > sticky ? setClassName("sticky") : setClassName("");
    return () => {};
  }, [y]);

  return (
    <header className={`header ${className}`}>
      <div className="header-content">
        <TopHeader />

        <div className="header-main" ref={headerRef}>
          <Logo />
          <span className="navigation">
            <NavBar />
            <button className="btn-big">Réserver mon Shooting</button>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
