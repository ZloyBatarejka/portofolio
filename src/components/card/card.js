import React, { Component } from "react";
import "./card.css";
import Img from "react-image";
class Card extends Component {

  render() {
    return (
      <div className="Card">
        <div className="CardImageWrapper">
          <Img src={this.props.image} alt="hello" />
        </div>
        <div className="CardInfo">
          <h3 className="CardTitle">{this.props.title}</h3>
          <div className="underline"></div>
          <p className="CardDesc">{this.props.desc}</p>
        </div>
        <div className="CardLinks">
          <a
            href={this.props.page}
            target="_blank"
            rel="noopener noreferrer"
            title="Github Page"
          >
            <i className="far fa-file fa-2x"></i>
          </a>
          <div className="overline"></div>
          <a
            href={this.props.repo}
            target="_blank"
            rel="noopener noreferrer"
            title="Github repository"
          >
            <i className="fas fa-code-branch fa-2x"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
