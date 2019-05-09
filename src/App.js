import React, { Component } from "react";
import "./App.css";
import Main from "./components/MainComponent"; // 匯入 Main 的資訊
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // using <BrowswerRouter>,
      // that is for application is configured to make use of the react router.
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
