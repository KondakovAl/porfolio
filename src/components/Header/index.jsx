import React from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { ReactComponent as Burger } from '../../assets/images/burger.svg';
import { useState, useEffect, memo } from 'react';

const dataHeader = {
  links: [
    { name: 'hello' },
    { name: 'about-me' },
    { name: 'projects' },
    { name: 'contact-me' },
  ],
};

const HeaderDesktop = ({ variant, setVariant }) => {
  return (
    <>
      <span className='header__logo'>aleksandr-kondakov</span>
      <nav className='header__navigation navigation'>
        {dataHeader.links.map((link, index) => (
          <span
            key={index}
            className={`navigation__item ${
              variant === link.name ? '--active' : ' '
            }`}
            onClick={() => setVariant(link.name)}
          >
            _{link.name}
          </span>
        ))}
      </nav>
    </>
  );
};

const HeaderMobile = ({ variant, setVariant, isNavOpen, setIsNavOpen }) => {
  return (
    <>
      <div className='header__wrapper'>
        <span className='header__logo'>aleksandr-kondakov</span>
        <div
          className='header__burger'
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <Burger />
        </div>
      </div>
      <nav
        className={`header__navigation navigation ${isNavOpen ? '--open' : ''}`}
        onClick={() => {
          setIsNavOpen(false);
        }}
      >
        <div className='navigation__blur' />

        {dataHeader.links.map((link, index) => (
          <span
            key={index}
            className={`navigation__item ${
              variant === link.name ? '--active' : ' '
            }`}
            onClick={() => setVariant(link.name)}
          >
            _{link.name}
          </span>
        ))}
      </nav>
    </>
  );
};

const Header = memo(({ variant, setVariant }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    isNavOpen && (document.body.style.overflowY = 'hidden');
    !isNavOpen && (document.body.style.overflowY = '');
  }, [isNavOpen]);

  return (
    <header className='header'>
      {windowWidth && windowWidth >= 950 ? (
        <HeaderDesktop variant={variant} setVariant={setVariant} />
      ) : (
        <HeaderMobile
          variant={variant}
          setVariant={setVariant}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
        />
      )}
    </header>
  );
});

export default Header;
