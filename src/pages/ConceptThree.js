import React from 'react';

import visionThird from '../images/concepts/concept-three/trish-colour-intro.png';
import colourThird from '../images/concepts/concept-three/trish-colour-final.png';
import typeOneThird from '../images/concepts/concept-three/trish-type-glyphworld.png';
import typeTwoThird from '../images/concepts/concept-three/trish-type-favorit.png';
import logoThird from '../images/concepts/concept-three/trish-logo-explorations.png';
import instaThird from '../images/concepts/concept-three/trish-instagram.png';
import instaTwoThird from '../images/concepts/concept-three/trish-instagram-two.png';


function ConceptThree() {
  return (
    <div className="concept-three">
      <h2>Concept Three</h2>
      <p>For the third and final concept created, I went with a versatile colour palette that has a lot of satisfying contrasts, this one is definitely the most attractive concept. For the logo I played around with a couple ideas; one is created using the font 'Favorit' with a customized curve on the R to keep it customized and unique.</p>
      <p>The font used in the second option is called 'Glyphworld Glacier' and this is a brand new font and was created as more of an art project by Leah Maldano (yay! to female type-designers) to challenge the boundaries of typical type, it has a unique look and feel and I felt like it stays true to our brand guidelines of camp and high art.<a href="https://www.instagram.com/p/B5IB09vikyV/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer">Check out Glyphworld</a></p>
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
  );
}

export default ConceptThree;