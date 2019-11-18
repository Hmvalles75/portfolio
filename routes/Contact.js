import React from "react";

function Contact() {
  return (
    <main id="contact">
      <h1 className="lg-heading">
        Contact
        <span className="text-secondary"> Me</span>
      </h1>
      <h2 className="sm-heading">This is how you can reach me...</h2>
      <div className="boxes">
        <div>
          <span className="text-secondary">Email: </span>
          <a href="mailto: hmvalles75.yahoo.com">hmvalles75@yahoo.com</a>
        </div>
        <div>
          <span className="text-secondary">Phone: </span>
          626 536-7308
        </div>
      </div>
      <div className="icons">
        <a href="http://www.linkedin.com/in/hector-valles-web-developer">
          <i className="fab fa-linkedin fa-3x"></i>
        </a>
        <a href="https://github.com/Hmvalles75">
          <i className="fab fa-github fa-3x"></i>
        </a>
      </div>
    </main>
  );
}

export default Contact;
