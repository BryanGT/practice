import React from 'react';
import './styles.scss'

function Header() {
  return (
    <>
      <header className='header'>
        <div className="header-nav">
          <a href="#home" className="header-nav__title">The Coffee Shop</a>

          <ul className="header-nav__wrapper">
            <li className="header-nav__item"><a href="#contact">Contact</a></li>
            <li className="header-nav__item"><a href="#about">About</a></li>
          </ul>
          <a className="icon header-nav__icon">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;