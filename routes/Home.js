import React from "react";

function Home() {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Hector
        <span className="text-secondary"> Valles</span>
      </h1>
      <h2 className="sm-heading">
        Full-Stack Web Developer, Programmer & Designer
      </h2>
      <div className="icons-main">
        <a href="http://www.linkedin.com/in/hector-valles-web-developer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/Hmvalles75">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </main>
  );
}
export default Home;
