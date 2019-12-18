import React, { Component } from "react";
import "../css/projects.css";
import Card from "../../components/card/card";
import { tutorialProjectCards } from "../../projects";
class TutProjects extends Component {
  render() {
    const cards = tutorialProjectCards.map((project, index) => {
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

export default TutProjects;
