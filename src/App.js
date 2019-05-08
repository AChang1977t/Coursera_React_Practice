import React, { Component } from "react";
import "./App.css";
import Main from "./components/MainComponent"; // 匯入 Main 的資訊

class App extends Component {
  render() {
    return (
      // there are two part UI here: 1. navbar; 2. Menu.
      // Menu dishes => make dishes available as props to the menu component
      // Menu "dishes" that is defined in the state (as above "this.state =") for App component
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
