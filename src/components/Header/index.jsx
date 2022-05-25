import React from "react";

const Header = ({ variant, setVariant, links }) => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
