import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './styles/main.scss';
import Music from './components/Music.js'
import About from './components/About.js'
import Shows from './components/Shows.js'
import Video from './components/Video.js'
import Subscribe from './components/Subscribe.js'

function App() {
  return (
    <div className="App" id="App">
      <a href="#main" className="hidden">skip to main</a>
      <a href="#footer" className="hidden">skip to footer</a>
      <Header />
      <main id="main" name="main">
        <div className="wrapper">
          <Music name="music" />
          <About name="about" />
          <Shows name="shows" />
          <Video name="video" />
          <Subscribe name="subscribe" />
        </div>
      </main>
      <Footer name="footer" />
    </div>
  );
}

export default App;
