import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Values from './Values.js'
import ConceptOne from './ConceptOne.js'
import ConceptTwo from './ConceptTwo.js'
import ConceptThree from './ConceptThree.js'


function Concepts() {
  return (
    <Router>
      <main id="main" className="concepts-page">
        <div className="wrapper">
          <Link to="/">&#8592; Link back to website</Link>
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
          <Link to="values" className="concept-links">Values</Link>
          <Link to="concept-one" className="concept-links">Concept One</Link>
          <Link to="concept-two" className="concept-links">Concept Two</Link>
          <Link to="concept-three" className="concept-links">Concept Three</Link>
          <Switch>
            <Route path="/values" exact component={Values} />
            <Route path="/concept-one" component={ConceptOne} />
            <Route path="/concept-two" component={ConceptTwo} />
            <Route path="/concept-three" component={ConceptThree} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default Concepts;