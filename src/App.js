import React from 'react';
// import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './styles/main.scss';
import Main from './pages/Main.js'
import Concepts from './pages/Concepts.js'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" id="App">
        <a href="#main" className="hidden">skip to main</a>
        <a href="#footer" className="hidden">skip to footer</a>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/concepts/" component={Concepts} />
        </Switch>
        <Footer name="footer" />
      </div>
    </Router>
  );
}

export default App;
