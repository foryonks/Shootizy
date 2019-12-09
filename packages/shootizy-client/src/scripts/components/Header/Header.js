import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _throttle from "lodash.throttle";

import Breadcrumbs from "scripts/components/Breadcrumbs";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import Logo from "./Logo";
import useWindowScrollPosition from "scripts/hooks/useWindowScrollPosition";

let sticky = 0;
let gap = 33;

const Header = (props, ref) => {
  const headerRef = useRef();
  const [className, setClassName] = useState();
  let options = {
    throttle: 25,
  };
  let { y } = useWindowScrollPosition(options);

  // const updateGap = () => {
  //   const header = headerRef.current;
  //   const content = window.getComputedStyle(header, ":before");
  //   gap = parseInt(content.getPropertyValue("content").replace(/"/g, ""), 10);
  // };

  const updateHeaderSticky = () => {
    //const header = headerRef.current;
    // if (!gap) {
    //   updateGap();
    // }
    sticky = gap; //sticky > 0 ? sticky : header.offsetTop - gap;
    setClassName(y > sticky ? "sticky" : "");
  };

  useEffect(() => {
    updateHeaderSticky();
    let timer;
    const updateHeaderThrottle = _throttle(() => {
      updateHeaderSticky();
    }, 200);
    document.addEventListener("resize", updateHeaderThrottle);
    return () => {
      document.removeEventListener("resize", updateHeaderThrottle);
      clearTimeout(timer);
    };
  });

  return (
    <div className="header-wrapper">
      <header className={`header ${className}`}>
        <div className="header-content">
          <TopHeader />
          <div className="header-main">
            <div className="header-main__content" ref={headerRef}>
              <Logo />
              <span className="navigation">
                <NavBar />
                <Link to="/booking" className="btn-big btn-hover-green">
                  Réserver mon Shooting
                </Link>
              </span>
            </div>
          </div>
        </div>
        <Breadcrumbs className="header__breadcrumbs" />
      </header>
    </div>
  );
};

export default Header;
