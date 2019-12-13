import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './styles/main.scss';
import Music from './components/Music.js'
import About from './components/About.js'
// import Hammy from './components/Hammy.js'

function App() {
  return (
    <div className="App" id="App">
      <a href="#main" className="hidden">skip to main</a>
      <a href="#footer" className="hidden">skip to footer</a>
      <Header />
      <main id="main">
        <Music />
        <About />
      </main>
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
