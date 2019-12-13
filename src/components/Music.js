import React from 'react';
import image from '../images/music.png';
import Playlist from './Playlist.js'


function Music() {
  return (
    <section id="music">

      <img src={image} className="App-logo" alt="album cover" />
      <Playlist />
    </section>
  );
}

export default Music;