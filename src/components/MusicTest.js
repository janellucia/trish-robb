import React from 'react';
// import logo from '../images/logo.png';
import trackOne from '../audio/if-only-the-rain.mp3'
import trackTwo from '../audio/everybody-needs-a-name.mp3'
import trackThree from '../audio/window-pane.mp3'

function Test() {
  return (
    <section className="music-test">
      <audio controls="controls">
        <track src={trackOne} type="audio/mp3"></track>
        <track src={trackTwo} type="audio/mp3"></track>
        <track src={trackThree} type="audio/mp3"></track>
      </audio>
    </section>
  );
}

export default Test;
