import React from 'react';

import vision from '../images/concepts/concept-one/trish-colour-intro.png';
import colour from '../images/concepts/concept-one/trish-colour-final.png';
import typeOne from '../images/concepts/concept-one/trish-type-editorial-new.png';
import typeTwo from '../images/concepts/concept-one/trish-type-basic.png';
import logo from '../images/concepts/concept-one/trish-logo-explorations.png';
import insta from '../images/concepts/concept-one/trish-instagram.png';
import instaTwo from '../images/concepts/concept-one/trish-instagram-two.png';


function ConceptOne() {
  return (
    <div className="concept-one">
      <h2>Concept One</h2>
      <p>I made this concept pretty much immediately after our last meeting using most of the imagery we referenced and added it to the vision board. Much inspiration coming from the editorial print world of magazines, weird images and classic fonts pairing for easy reading.</p>
      <p>The colour palette for this concept is bold, diverse and fun giving the brand a very approachable vibe. The final logo using Editorial New was my favourite here, I immediately thought of it when we were talking last, of course, I also added in some Instagram cards so you can see how this would translate into the social space.</p>
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
  );
}

export default ConceptOne;