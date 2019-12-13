import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faFacebookF, faInstagram, faYoutube, faItunesNote } from '@fortawesome/free-brands-svg-icons'

export default props => {
  return (
    // Pass on our props
    <Menu>
      <a className="menu-item" href="/#music">
        Music
      </a>

      <a className="menu-item" href="#tour">
        Tour
      </a>

      <a className="menu-item" href="#contact">
        News
      </a>

      <a className="menu-item" href="#about">
        Video
      </a>

      <a className="menu-item" href="mailto:trishrobb@gmail.com">
        Contact
      </a>

      <ul className="social-follow">
        <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
        <li><a href=""><FontAwesomeIcon icon={faSpotify} /></a></li>
        <li><a href=""><FontAwesomeIcon icon={faItunesNote} /></a></li>
        <li><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
      </ul>
    </Menu>
  );
};