import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faFacebookF, faInstagram, faYoutube, faItunesNote } from '@fortawesome/free-brands-svg-icons'

export default props => {
  return (
    // Pass on our props
    <Menu right>
      <a className="menu-item" href="/#music">
        Music
      </a>

      <a className="menu-item" href="/#shows">
        Shows
      </a>

      <a className="menu-item" href="/#subscribe">
        Subscribe
      </a>

      <a className="menu-item" href="/#video">
        Video
      </a>

      <a className="menu-item" href="mailto:trishrobb@gmail.com">
        Contact
      </a>

      <ul className="social-follow">
        <li><a href="https://www.instagram.com/trishrobbmusic/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="https://www.youtube.com/watch?v=jytfVOUUxnw&feature=youtu.be" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
        <li><a href="https://open.spotify.com/artist/7tC9Blhmr3PSmrWwwNG9sl" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSpotify} /></a></li>
        <li><a href="https://ca.tunecore.com/sell-your-music-online?ref=c_9061009&cmp=b_1t1&utm_content=192369383501_&utm_term=%2Bget%20music%20on%20%2Bapple%20%2Bmusic&utm_source=google&utm_medium=cpc&utm_campaign=ca_md_am&gclid=CjwKCAiAis3vBRBdEiwAHXB29OJhc__q_OcPEkxKihKCLEnb3nOqyeVmGeUBNr-upYKtcenY8-IUkBoCFr0QAvD_BwE" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faItunesNote} /></a></li>
        <li><a href="https://www.facebook.com/Trish-Robb-65027745673/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
      </ul>
    </Menu>
  );
};