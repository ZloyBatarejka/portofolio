import React from "react";
import "./About.css";
const About = () => (
  <div className="About">
    <div className="information">
      <h1 className="heading">Web developer</h1>
      <p className="name">Yakovlev Ruslan</p>
      <div className="infoBox">
        <div className="header">
          <h4>About me</h4>
        </div>
        <div className="content">
          <p>
            I am 24 years old. I'm ready to
            relocate.
          </p>
        </div>
      </div>
      <div className="infoBox">
        <div className="header">
          <h4>Education</h4>
        </div>
        <div className="content">
          <ul>
            <li>USATU,Business informatics: 2014-2018</li>
          </ul>
        </div>
      </div>
      <div className="infoBox">
        <div className="header">
          <h4>Experience</h4>
        </div>
        <div className="content">
          <ul>
            <li>Frontend develeoper: Takeoff-staff, 08.06.20 - c.t.</li>
          </ul>
        </div>
      </div>
      <div className="infoBox">
        <div className="header">
          <h4>Technologies stack</h4>
        </div>
        <div className="content">
          <ul>
            <li>HTML5(pug)</li>
            <li>CSS(Bootstrap,Sass)</li>
            <li>JS(React-Redux, Vue-Vuex, TS)</li>
            <li>Other(AP,Git,BEM,npm,webpack,Jira)</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="photo">
      <div className="frame">
        <img
          src="https://sun9-17.userapi.com/c854220/v854220277/181088/nd1S85I4nUs.jpg"
          alt="me"
        ></img>
      </div>
    </div>
  </div>
);

export default About;
