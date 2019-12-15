import React from 'react';
// import logo from '../images/logo.png';
import Music from '../components/Music.js'
import About from '../components/About.js'
import Shows from '../components/Shows.js'
import Video from '../components/Video.js'
import Subscribe from '../components/Subscribe.js'
import Header from '../components/Header.js';

function Main() {
  return (
    <div>
      <Header />
      <main id="main">
        <div className="wrapper">
          <Music name="music" />
          <About name="about" />
          <Shows name="shows" />
          <Video name="video" />
          <Subscribe name="subscribe" />
        </div>
      </main>
    </div>
  );
}

export default Main;