import React from "react";

import beatles from "../images/projects/beatles.JPG";
import ontap from "../images/projects/ontap.JPG";
import goodmeal from "../images/projects/goodmeal.JPG";

import "./Projects.css";

function Projects() {
  return (
    <main id="work">
      <h1 className="lg-heading">
        My
        <span className="text-secondary"> Projects</span>
      </h1>
      <h2 className="sm-heading">Check out some of my work...</h2>
      <section className="project-cards">
        <div className="card">
          <div className="card-content">
            <a href="https://thinkful-ei-firefly.github.io/QuizAppMatt_Hector">
              <img src={beatles} alt="The Beatles Quiz" />
            </a>
            <div className="description">
              <h3 className="text-secondary">THE BEATLES QUIZ</h3>
              <h4>Built with Javascript, jQuery, Css and Sass</h4>
              <p>
                It is an interactive quiz based on and inspired by my love for
                The Beatles. It has a starter page, a question, answer, and
                score counter that updates with each question, a feedback page
                for each question and a restart button at the end. It is
                responsive and a11y friendly.
              </p>
              <div className="links">
                <a
                  href="https://thinkful-ei-firefly.github.io/QuizAppMatt_Hector"
                  className="btn-light"
                >
                  {" "}
                  <i className="fas fa-eye"></i> View Live
                </a>
                <a
                  href="https://github.com/thinkful-ei-firefly/QuizAppMatt_Hector"
                  className="btn-dark"
                >
                  {" "}
                  <i className="fab fa-github"></i> View Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <a href="https://on-tap-client.hmvalles75.now.sh">
              <img src={ontap} alt="ontap app" />
            </a>
            <div className="description">
              <h3 className="text-secondary">ON TAP</h3>
              <h4>
                Built using HTML5, CSS3, JavaScript, React.js, Node.js, Express,
                PostgreSQL, Heroku, Zeit
              </h4>
              <p>
                It is an application that lets you know what is on tap in every
                restaurant within a given square block. It allows the user to
                select a a restaurant to see what is on tap there. The user can
                then select an individual beer which will show them details of
                the chosen beer.
              </p>
              <div className="links">
                <a
                  href="https://on-tap-client.hmvalles75.now.sh"
                  className="btn-light"
                >
                  {" "}
                  <i className="fas fa-eye"></i> View Live
                </a>
                <a
                  href="https://github.com/Hmvalles75/On-Tap-client"
                  className="btn-dark"
                >
                  {" "}
                  <i className="fab fa-github"></i> View Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <a href="https://good-meal-client.herokuapp.com/">
              <img src={goodmeal} alt="goodmeal app" />
            </a>
            <div className="description">
              <h3 className="text-secondary">GOODMEAL</h3>
              <h4>
                Built using HTML5, CSS3, JavaScript, React.js, Node.js, Express,
                PostgreSQL, Heroku, Firebase , Google login, Facebook login,
                AWS, Jason Web Tokens, FontAwesome, Site Maps, Schema.org{" "}
              </h4>
              <p>
                Good Meal is your digital recipe card index file, where users
                can create and share private and public recipes, store shopping
                lists, lists of items already in their pantry and create
                shopping lists from the recipes they have.
              </p>
              <div className="links">
                <a
                  href="https://good-meal-client.herokuapp.com/"
                  className="btn-light"
                >
                  {" "}
                  <i className="fas fa-eye"></i> View Live
                </a>
                <a
                  href="https://github.com/thinkful-ei-firefly/recipe-client"
                  className="btn-dark"
                >
                  {" "}
                  <i className="fab fa-github"></i> View Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
