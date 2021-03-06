import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    const header = headerRef.current;
    if (!gap) {
      const content = window.getComputedStyle(header, ":before");
      gap = parseInt(content.getPropertyValue("content").replace(/"/g, ""), 10);
    }
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
            <Link to="/booking" className="btn-big">
              Réserver mon Shooting
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
