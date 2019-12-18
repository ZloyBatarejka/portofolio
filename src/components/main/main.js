import React from "react";
import "./main.css";
import { Route } from "react-router-dom";
import MyProjects from "../../pages/MyProjects/MyProjects";
import About from "../../pages/About/About";
import TutProjects from "../../pages/TutProjects/TutProjects";
import Landing from "../../pages/Landing/Landing";
const Main = () => (
  <main className="main">
    <Route path="/" exact component={About} />
    <Route path="/about" exact component={About} />
    <Route path="/myprojects" component={MyProjects} />
    <Route path="/tutprojects" component={TutProjects} />
    <Route path="/landing" component={Landing} />
  </main>
);

export default Main;
