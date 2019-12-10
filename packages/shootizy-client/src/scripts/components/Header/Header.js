import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "scripts/components/Breadcrumbs";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import Logo from "./Logo";
//import useMediaQueriesChange from "scripts/hooks/useMediaQueriesChange";
import useMediaQuery from "react-hook-media-query";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Icon from "scripts/components/Icon";

const defaultGap = 33;

const Header = (props, ref) => {
  const headerRef = useRef();
  const [headerClassName, setHeaderClassName] = useState();
  const [gap] = useState(defaultGap);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const isSticky = -currPos.y > gap;
      setHeaderClassName(isSticky ? "sticky" : "");
    },
    [headerClassName]
  );
  const isMobile = useMediaQuery("(max-width:800px)");
  const className = `header-wrapper ${openMobileMenu ? "header-mobile-menu__opened" : ""}`;

  return (
    <div className={className}>
      <header className={headerClassName}>
        <div className="header-content">
          <TopHeader />
          <div className="header-main">
            <div className="header-main__content" ref={headerRef}>
              <Logo />
              <span className="navigation">
                {isMobile ? null : <NavBar />}
                <Link to="/booking" className="btn-big btn-hover-green header-btn-reserver">
                  Réserver {isMobile ? "" : "mon Shooting"}
                </Link>
                {isMobile ? (
                  <button className="button-icon-menu" onClick={() => setOpenMobileMenu(true)}>
                    <Icon name="menu" />
                  </button>
                ) : null}
              </span>
            </div>
          </div>
        </div>
        <Breadcrumbs className="header__breadcrumbs" />
      </header>
      {openMobileMenu ? (
        <div className="mobile-menu">
          <NavBar />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
