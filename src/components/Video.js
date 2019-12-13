

import React from 'react';

function Video() {
  return (
    <section id="video">
      <h2>Videos</h2>
      <div className="vid-wrap">
        <iframe src="https://www.youtube.com/embed/jytfVOUUxnw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
      </div>
      <div className="two-vids">
        <div className="each-vid">
          <div className="vid-wrap">
            <iframe src="https://www.youtube.com/embed/jytfVOUUxnw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
          </div>
        </div>
        <div className="each-vid">
          <div className="vid-wrap">
            <iframe src="https://www.youtube.com/embed/jytfVOUUxnw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;