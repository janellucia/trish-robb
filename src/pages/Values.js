import React from 'react';

import personas from '../images/concepts/trish-user-personas.png';
import principles from '../images/concepts/trish-design-principles.png';
import positioning from '../images/concepts/trish-positioning.png';


function Values() {
  return (
    <div className="values">
      <h2>Brand Values</h2>
      <p>I always start the process with a kick-off meeting to get to know your values in your brand, from there, I conduct my research, crafting the brand strategy, positioning statement, and user profiles. Then, I'll develop a brand identity system that includes a logo, an approachable colour palette, a bold and flexible font pairing, assets for the website and social channels, a website, and brand guidelines. This will help the design process stay informed throughout.</p>
      <img src={personas} alt="brand user persona Lauren" />
      <img src={principles} alt="brand design principles" />
      <img src={positioning} alt="brand statement" />
    </div>
  );
}

export default Values;