import React from 'react';
import logo from '../images/logo-three.png';
import Hammy from './Hammy.js';

import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller } from 'react-scroll'


function Header() {
  return (
    <header>
      <Hammy pageWrapId={"App"} outerContainerId={"root"} />
      <div className="wrapper">
        <ul className="desktop-nav">
          {/* <li><a className="menu-item" href="/#music">Music</a></li> */}
          <li><Link activeClass="active" className="menu-item" to="music" spy={true} smooth={true} duration={500} offset={-80} >Music</Link></li>
          <li><Link activeClass="active" className="menu-item" to="shows" spy={true} smooth={true} duration={500} offset={-80}>Shows</Link></li>
          <li><Link activeClass="active" className="test1" to="subscribe" spy={true} smooth={true} duration={500} offset={-80} >Subscribe</Link></li>
        </ul>
        <Link activeClass="active" className="logo" to="main" spy={true} smooth={true} duration={500} offset={-80}>
          <img
            src={logo}
            className="App-logo"
            alt="logo" />
        </Link>
        <ul className="desktop-nav">
          <li><Link activeClass="active" className="menu-item" to="video" spy={true} smooth={true} duration={500} offset={-80}>Video</Link></li>
          <li><a className="menu-item" href="mailto:trishrobb@gmail.com">Contact</a></li>
          <li><Link activeClass="active" className="menu-item" to="footer" spy={true} smooth={true} duration={500} offset={-80}>Follow</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
