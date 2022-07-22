import React from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { ReactComponent as Burger } from "../../assets/images/burger.svg";
import { useEffect } from "react";

const Header = ({ variant, setVariant, links, isNavOpen, setIsNavOpen }) => {
  const windowWidth = useWindowWidth();

  useEffect(() => {
    isNavOpen && (document.body.style.overflowY = "hidden");
    !isNavOpen && (document.body.style.overflowY = "");
  }, [isNavOpen]);

  return (
    <header
      className="header"
      onClick={(e) => {
        console.log(e);
      }}
    >
      {windowWidth && windowWidth >= 950 ? (
        <>
          <span className="header__logo">aleksandr-kondakov</span>
          <nav className="header__navigation navigation">
            {links.map((link, index) => (
              <span
                key={index}
                className={`navigation__item ${
                  variant === link.name ? "--active" : " "
                }`}
                onClick={() => setVariant(link.name)}
              >
                _{link.name}
              </span>
            ))}
          </nav>
        </>
      ) : (
        <>
          <div className="header__wrapper">
            <span className="header__logo">aleksandr-kondakov</span>
            <div
              className="header__burger"
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
            >
              <Burger />
            </div>
          </div>
          <nav
            className={`header__navigation navigation ${
              isNavOpen ? "--open" : ""
            }`}
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            <div className="navigation__blur" />

            {links.map((link, index) => (
              <span
                key={index}
                className={`navigation__item ${
                  variant === link.name ? "--active" : " "
                }`}
                onClick={() => setVariant(link.name)}
              >
                _{link.name}
              </span>
            ))}
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
