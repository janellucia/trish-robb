import React from 'react';
import arrow from '../images/next-arrow.png';

function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="left">
          <ul>
            <li><a href="https://www.apple.com/ca/music/" target="_blank" rel="noopener noreferrer">Apple Music</a></li>
            <li><a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">Spotify</a></li>
            <li><a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">Google Play</a></li>
          </ul>
          <ul>
            <li><a href="https://www.apple.com/ca/music/" target="_blank" rel="noopener noreferrer">Youtube</a></li>
            <li><a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
        <div className="right">
          <a href="mailto:trishrobb@gmail.com" className="signup-button">Newsletter Signup <img src={arrow} alt="" /></a>
        </div>
      </div>
      {/* <p>&copy; {(new Date().getFullYear())} trish robb music.</p> */}
    </footer>
  );
}

export default Footer;
