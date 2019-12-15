import React from 'react';

import visionSecond from '../images/concepts/concept-two/trish-colour-intro.png';
import colourSecond from '../images/concepts/concept-two/trish-colour-final.png';
import typeOneSecond from '../images/concepts/concept-two/trish-type-butler.png';
import typeTwoSecond from '../images/concepts/concept-two/trish-type-mabry.png';
import logoSecond from '../images/concepts/concept-two/trish-logo-explorations.png';
import instaSecond from '../images/concepts/concept-two/trish-instagram.png';
import instaTwoSecond from '../images/concepts/concept-two/trish-instagram-two.png';


function ConceptTwo() {
  return (
    <div className="concept-two">
      <h2>Concept Two</h2>
      <p>The second concept, the most sophisticated, has a warm colour palette and a polished font combination. So much inspiration came from art magazines (mostly online) and anything that felt irreverent to the art world to stay true to your brand guidelines of high art, camp and authenticity.</p>
      <p>For the logo, I played with a couple of options, one option is created with the font 'Butler' with customized letter spacing and special detail on the 'tr' in Trish. I explored a few options using the font 'Mabry' one has a diamond shape over i and a few other considerations.</p>

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
  );
}

export default ConceptTwo;