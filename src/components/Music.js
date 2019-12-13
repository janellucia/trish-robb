import React from 'react';
import image from '../images/music.png';
import imageTwo from '../images/music-two.png';
import Playlist from './Playlist.js'


function Music() {
  return (
    <section id="music">
      <img src={imageTwo} className="first-image" alt="album cover shoot" />
      <Playlist />
      <img src={image} className="second-image" alt="album cover" />
    </section>
  );
}

export default Music;