import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
class App extends Component {
  //TODO SOME LOGIC
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
