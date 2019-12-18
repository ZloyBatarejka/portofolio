import React, { Component } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
class Sidebar extends Component {
  state = {
    hidden: false
  };

  render() {
    const menuClass = ["nav-list", this.state.hidden ? "popped" : null];
    return (
      <section className="sidebar">
        <nav className="navigation">
          <div className="brand">Batarejka</div>
          <ul className={menuClass.join(" ")}>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                to="/"
                onClick={() => {
                  this.setState({ hidden: !this.state.hidden });
                }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/myprojects"
                onClick={() => {
                  this.setState({ hidden: !this.state.hidden });
                }}
              >
                My Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/tutprojects"
                onClick={() => {
                  this.setState({ hidden: !this.state.hidden });
                }}
              >
                Tutorial projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/landing"
                onClick={() => {
                  this.setState({ hidden: !this.state.hidden });
                }}
              >
                Landing Pages
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="toggler">
          <button
            className="btn"
            onClick={() => {
              this.setState({ hidden: !this.state.hidden });
            }}
          >
            <i className="fas fa-bars fa-2x"></i>
          </button>
        </div>
      </section>
    );
  }
}

export default Sidebar;
