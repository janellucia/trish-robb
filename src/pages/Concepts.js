import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from './Main.js'
import Values from './Values.js'
import ConceptOne from './ConceptOne.js'
import ConceptTwo from './ConceptTwo.js'
import ConceptThree from './ConceptThree.js'


function Concepts() {
  return (
    <Router>
      <main id="main" className="concepts-page">
        <div className="wrapper">
          {/* <Route path="/" exact component={Main} /> */}
          {/* <Link to="/" className="home-link">&#8592; Link back to website</Link> */}
          <a href="/" className="home-link">&#8592; Link back to website</a>
          <div className="intro">
            <h2>Intro</h2>
            <p>Hey Trish, here is some work I've done on your branding/site. I took information from our first two meetings and  put together a few concepts for you to check out. I also put together an example site you can check out as a sample. All the deets below!</p>
            <h3>Website</h3>
            <p>Take a look at this website, I built this using assets from concept three but that is not the focus, we will decide on concepts in a sec. The website is here to mainly find out what type of sections you need.</p>
            <p>This example site has a few images and music immediately for the user to access, then we have an about (based on my research most musical artists don't have an about), upcoming shows, video and a mailing list complete with social links. Let me know if you want to add or remove anything (:</p>
            <h3>What's Next?</h3>
            <p>Take a look at the 3 concepts and decide which you like best, feel free to mix and match if you like aspects of multiple concepts, this is customized to what you like. </p>
            <p>From there I will finalize website designs and start building.</p>
          </div>
          <div className="concept-link-wrap">
            <Link to="/concepts/values" className="concept-links">Values</Link>
            <Link to="/concepts/concept-one" className="concept-links">Concept One</Link>
            <Link to="/concepts/concept-two" className="concept-links">Concept Two</Link>
            <Link to="/concepts/concept-three" className="concept-links">Concept Three</Link>
          </div>
          <Switch>
            <Route path="/concepts/values" exact component={Values} />
            <Route path="/concepts/concept-one" component={ConceptOne} />
            <Route path="/concepts/concept-two" component={ConceptTwo} />
            <Route path="/concepts/concept-three" component={ConceptThree} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default Concepts;