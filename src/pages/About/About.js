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
            I am 23 y.o., tending to become a web developer. Currently working
            as a projectionist in a movie theatre.
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
            <li>Udemy React course: 10.10.19-27.11.19</li>
            <li>Udemy PHP course: 28.12.19-13.01.20</li>
            <li>Self-education: 01.07.19 - c.t.</li>
          </ul>
        </div>
      </div>
      <div className="infoBox">
        <div className="header">
          <h4>Technologies stack</h4>
        </div>
        <div className="content">
          <ul>
            <li>HTML5</li>
            <li>CSS(Bootstrap,Sass)</li>
            <li>JS(ES5,ES6 syntax, React)</li>
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
