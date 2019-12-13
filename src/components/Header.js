import React from 'react';
import logo from '../images/logo.png';
import Hammy from './Hammy.js';

function Header() {
  return (
    <header>
      <Hammy pageWrapId={"App"} outerContainerId={"root"} />
      <div className="wrapper">
        <div></div>
        <img src={logo} className="App-logo" alt="logo" />
        <a href="mailto:trishrobb@gmail.com" className="contact-button">Contact</a>
      </div>
    </header>
  );
}

export default Header;
