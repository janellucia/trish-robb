import React from 'react';
// import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './styles/main.scss';
import Main from './pages/Main.js'
import Concepts from './pages/Concepts.js'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App" id="App">
      <a href="#main" className="hidden">skip to main</a>
      <a href="#footer" className="hidden">skip to footer</a>
      {/* <Header /> */}
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/concepts" component={Concepts} />
        </div>
      </Router>
      <Footer name="footer" />
    </div>
  );
}

export default App;
