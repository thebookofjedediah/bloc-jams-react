import React from 'react';

const Landing = () => (
	<div className="entire-landing">

	<section className="landing">
	  <img src="/assets/images/bloc-jams-home.jpg" alt="guy with headphones" className="landing-image"></img>
	  <h1 className="hero-title">Turn the music up!</h1>
	</section>

	<section className="selling-points">

	  <div className="point1">
	    <h2 className="point-title">choose your music</h2>
	    <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
	  </div>

	  <div className="point2">
	    <h2 className="point-title">ad-free streaming</h2>
	    <p className="point-description">No arbitrary limits. No distractions.</p>
	  </div>

	  <div className="point3">
	    <h2 className="point-title">mobile enabled</h2>
	    <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
	  </div>

	</section>




	</div>
	);

	export default Landing;