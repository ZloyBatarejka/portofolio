import React, { Component } from "react";
import "../css/projects.css";
import Card from "../../components/card/card";
import { landingProjectCards } from "../../projects";
class Landing extends Component {
  componentDidMount() {
    let cards = document.querySelectorAll(".Card");
    let initDuration = 1;
    cards.forEach(card => {
      card.style.animationDuration = initDuration + "s";
      initDuration += 0.2;
    });
  }
  render() {
    const cards = landingProjectCards.map((project, index) => {
      return (
        <Card
          key={project.id}
          image={project.image}
          title={project.title}
          desc={project.desc}
          repo={project.repo}
          page={project.page}
        />
      );
    });
    return <div className="Projects">{cards}</div>;
  }
}

export default Landing;
