import React from "react";

import portrait from "../images/portrait.jpg";

function AboutMe() {
  return (
    <main id="about">
      <h1 className="lg-heading">
        About
        <span className="text-secondary"> Me</span>
      </h1>
      <h2 className="sm-heading">Let me tell you about myself...</h2>
      <div className="about-info">
        <img src={portrait} alt="Hector Valles" className="bio-image" />

        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            My name is Hector Valles and I am an aspiring Full Stack Web
            Developer based in Los Angeles, CA. I started out in retail
            management but fell in love with coding and haven't looked back! I
            am currently enrolled in the Engineering Immersion Program at
            Thinkful and am excited to be in the development phase of my new
            career.
          </p>
          <p>
            I find it very rewarding to dive in, solve problems on-the-fly, and
            create something I am really proud of; and web development has
            allowed me to do this for a living. When I am not coding, I am a
            part-time guitar-player, an all-time Google enthusiast, and a
            life-time Chiefs fan!
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
