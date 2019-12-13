import React from 'react';
import logo from '../images/logo-three.png';
import Hammy from './Hammy.js';

function Header() {
  return (
    <header>
      <Hammy pageWrapId={"App"} outerContainerId={"root"} />
      <div className="wrapper">
        <ul className="desktop-nav">
          <li><a className="menu-item" href="/#music">Music</a></li>
          <li><a className="menu-item" href="/#shows">Shows</a></li>
          <li><a className="menu-item" href="/#subscribe">Subscribe</a></li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="desktop-nav">
          <li><a className="menu-item" href="/#video">Video</a></li>
          <li><a className="menu-item" href="mailto:trishrobb@gmail.com">Contact</a></li>
          <li><a className="menu-item" href="/#footer">Follow</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
