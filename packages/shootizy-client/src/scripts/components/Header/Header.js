import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Breadcrumbs from "scripts/components/Breadcrumbs";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";
import Logo from "./Logo";
import useMediaQuery, { headerMobile } from "scripts/hooks/useMediaQueriesChange";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Icon from "scripts/components/Icon";

const defaultGap = 33;

const Header = (props, ref) => {
  const headerRef = useRef();
  const [headerClassName, setHeaderClassName] = useState();
  const [gap] = useState(defaultGap);
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const history = useHistory();

  history.listen((location, change) => {
    setMobileMenuOpened(false);
  });

  useScrollPosition(
    ({ currPos }) => {
      const isSticky = -currPos.y > gap;
      setHeaderClassName(isSticky ? "sticky" : "");
    },
    [headerClassName]
  );
  const isMobile = useMediaQuery(headerMobile);

  return (
    <div className={`header-wrapper ${mobileMenuOpened ? "header-mobile-menu__opened" : ""}`}>
      <header className={`header ${headerClassName || ""}`}>
        <div className="header-content">
          {isMobile ? null : <TopHeader />}
          <div className="header-main">
            <div className="header-main__content" ref={headerRef}>
              <Logo />
              <span className="navigation">
                {isMobile ? null : <NavBar />}
                <Link to="/booking" className="btn-big btn-hover-green header-btn-reserver">
                  Réserver {isMobile ? "" : "mon Shooting"}
                </Link>
                {isMobile ? (
                  mobileMenuOpened ? (
                    <button
                      className="button-icon-menu button-icon-menu__close"
                      onClick={() => setMobileMenuOpened(false)}>
                      <Icon name="close" />
                    </button>
                  ) : (
                    <button className="button-icon-menu" onClick={() => setMobileMenuOpened(true)}>
                      <Icon name="menu" />
                    </button>
                  )
                ) : null}
              </span>
            </div>
          </div>
        </div>
        <Breadcrumbs className="header__breadcrumbs" />
      </header>
      {isMobile && mobileMenuOpened ? (
        <div className="mobile-menu">
          <NavBar isMobile={isMobile} />
        </div>
      ) : null}
      {isMobile && mobileMenuOpened ? <TopHeader /> : null}
    </div>
  );
};

export default Header;
