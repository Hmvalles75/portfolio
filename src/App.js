import React from "react";
import { Switch, Route } from "react-router-dom";

import Toolbar from "./components/toolbar/Toolbar";
import Menu from "./components/menu/Menu";
import Home from "./routes/Home";
import AboutMe from "./routes/AboutMe";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

import "./App.css";

class App extends React.Component {
  state = {
    menuOpen: false
  };

  menuToggleClickHandler = () => {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen };
    });
  };

  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Toolbar
          show={this.state.menuOpen}
          menuClickHandler={this.menuToggleClickHandler}
        />
        <Menu
          show={this.state.menuOpen}
          menuClickHandler={this.menuToggleClickHandler}
        />
        <main>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={AboutMe} />
            <Route exact path={"/projects"} component={Projects} />
            <Route exact path={"/contact"} component={Contact} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
