import React, { Component } from "react";
import "./App.css";
import Main from "./components/MainComponent"; // 匯入 Main 的資訊
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// Provider component allows to configure React Application
import { ConfigureStore } from "./redux/configureStore";

// configure application
const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/*  using <BrowswerRouter>,
      that is for application is configured to make use of the react router. */}
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
