import React from 'react';
import logo from '../images/logo.png';

function Footer() {
  return (
    <footer id="footer">
      <img src={logo} className="App-logo" alt="logo" />
      <a href="mailto:trishrobb@gmail.com" className="contact-button">Contact</a>
    </footer>
  );
}

export default Footer;
