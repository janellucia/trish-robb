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
        <a href="/">&#8592; Link back to website</a>
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
        <div className="values">
          <h2>Brand Values</h2>
          <p>I always start the process with a kick-off meeting to get to know your values in your brand, from there, I conduct my research, crafting the brand strategy, positioning statement, and user profiles. Then, I'll develop a brand identity system that includes a logo, an approachable colour palette, a bold and flexible font pairing, assets for the website and social channels, a website, and brand guidelines. This will help the design process stay informed throughout.</p>
          <img src={personas} alt="brand user persona Lauren" />
          <img src={principles} alt="brand design principles" />
          <img src={positioning} alt="brand statement" />
        </div>
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
      </div>
    </main>
  );
}

export default Concepts;