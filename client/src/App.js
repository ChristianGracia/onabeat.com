import React from "react";
import HomePage from "./pages/home-page/home-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App" style={{ flex: 1, backgroundColor: "white" }}>
      <div className="ml-auto mr-auto" style={{ padding: 10 }}></div>
      <Router>
        <Route exact path="/" component={HomePage} />{" "}
        <Route exact path="/login" component={LoginPage} />{" "}
      </Router>

      <div style={{ paddingBottom: 300 }}></div>
    </div>
  );
}

export default App;
