import React from "react";

import "./MenuToggleButton.css";

const menuToggleButton = props => {
  let menuClasses = ["btn-close"];
  if (props.show) {
    menuClasses = ["btn-open"];
  }
  return (
    <button className="toggle-btn" onClick={props.click}>
      <div onClick={props.click} className={menuClasses}></div>
      <div onClick={props.click} className={menuClasses}></div>
      <div onClick={props.click} className={menuClasses}></div>
    </button>
  );
};

export default menuToggleButton;
