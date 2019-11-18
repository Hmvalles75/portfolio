import React from "react";
import MenuToggleButton from "../menu/MenuToggleButton";

import "../toolbar/Toolbar.css";

const Toolbar = props => (
  <div id="bg-img">
    <header>
      <MenuToggleButton click={props.menuClickHandler} show={props.show} />
    </header>
  </div>
);

export default Toolbar;
