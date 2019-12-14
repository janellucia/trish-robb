import React from 'react';
import personas from '../images/concepts/trish-user-personas.png';
import principles from '../images/concepts/trish-design-principles.png';
import positioning from '../images/concepts/trish-positioning.png';

import vision from '../images/concepts/concept-one/trish-colour-intro.png';
import colour from '../images/concepts/concept-one/trish-colour-final.png';
import typeOne from '../images/concepts/concept-one/trish-type-editorial-new.png';
import typeTwo from '../images/concepts/concept-one/trish-type-basic.png';
import logo from '../images/concepts/concept-one/trish-logo-explorations.png';
import insta from '../images/concepts/concept-one/trish-instagram.png';
import instaTwo from '../images/concepts/concept-one/trish-instagram-two.png';

import visionSecond from '../images/concepts/concept-two/trish-colour-intro.png';
import colourSecond from '../images/concepts/concept-two/trish-colour-final.png';
import typeOneSecond from '../images/concepts/concept-two/trish-type-butler.png';
import typeTwoSecond from '../images/concepts/concept-two/trish-type-mabry.png';
import logoSecond from '../images/concepts/concept-two/trish-logo-explorations.png';
import instaSecond from '../images/concepts/concept-two/trish-instagram.png';
import instaTwoSecond from '../images/concepts/concept-two/trish-instagram-two.png';


import visionThird from '../images/concepts/concept-three/trish-colour-intro.png';
import colourThird from '../images/concepts/concept-three/trish-colour-final.png';
import typeOneThird from '../images/concepts/concept-three/trish-type-glyphworld.png';
import typeTwoThird from '../images/concepts/concept-three/trish-type-favorit.png';
import logoThird from '../images/concepts/concept-three/trish-logo-explorations.png';
import instaThird from '../images/concepts/concept-three/trish-instagram.png';
import instaTwoThird from '../images/concepts/concept-three/trish-instagram-two.png';

function Concepts() {
  return (
    <main id="main" className="concepts-page">
      <div className="wrapper">
        <a href="/">Link to Home</a>
        <div className="intro">
          <h2>Intro</h2>
        </div>
        <div className="values">
          <h2>Brand Values</h2>
          <img src={personas} alt="brand user persona Lauren" />
          <img src={principles} alt="brand design principles" />
          <img src={positioning} alt="brand statement" />
        </div>
        <div className="concept-one">
          <h2>Concept One</h2>
          <img src={vision} alt="vision board" />
          <img src={colour} alt="colour" />
          <div className="two-images">
            <img src={typeOne} alt="editorial new font" />
            <img src={typeTwo} alt="basic commercial font" />
          </div>
          <img src={logo} alt="logo exploration" />
          <img src={insta} alt="insta cards with logo and events" />
          <img src={instaTwo} alt="insta cards with logo and events" />
        </div>
        <div className="concept-two">
          <h2>Concept Two</h2>
          <img src={visionSecond} alt="vision board" />
          <img src={colourSecond} alt="colour" />
          <div className="two-images">
            <img src={typeOneSecond} alt="editorial new font" />
            <img src={typeTwoSecond} alt="basic commercial font" />
          </div>
          <img src={logoSecond} alt="logo exploration" />
          <img src={instaSecond} alt="insta cards with logo and events" />
          <img src={instaTwoSecond} alt="insta cards with logo and events" />
        </div>
        <div className="concept-three">
          <h2>Concept Three</h2>
          <img src={visionThird} alt="vision board" />
          <img src={colourThird} alt="colour" />
          <div className="two-images">
            <img src={typeOneThird} alt="editorial new font" />
            <img src={typeTwoThird} alt="basic commercial font" />
          </div>
          <img src={logoThird} alt="logo exploration" />
          <img src={instaThird} alt="insta cards with logo and events" />
          <img src={instaTwoThird} alt="insta cards with logo and events" />
        </div>
      </div>
    </main>
  );
}

export default Concepts;