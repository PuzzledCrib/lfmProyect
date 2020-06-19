import React from "react";
import "./App.scss";
import Nav from "./NavBar";
import Habilidades from "./Habilidades";
import Cualidades from "./Cualidades";
import Capacidades from "./Capacidades";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/habilidades" exact component={Habilidades} />
          <Route path="/cualidades" exact component={Cualidades} />
          <Route path="/capacidades" exact component={Capacidades} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <section className="hero">
      <div className="hero-inner">
        <h1>Luis Miranda Cruz</h1>
        <h2>
          Estudiante de Infórmatica y Tecnologías Multimedia UCR
          <br />
        </h2>
        <img src="" alt="" id="imagen" />
      </div>
    </section>
  </div>
);

export default App;
