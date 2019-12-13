import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home-page/home-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import RegisterPage from "./pages/register-page/register-page.component";

function App() {
  return (
    <div className="App" style={{ flex: 1, backgroundColor: "white" }}>
      <div className="ml-auto mr-auto" style={{ padding: 10 }}></div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Router>

      <div style={{ paddingBottom: 300 }}></div>
    </div>
  );
}

export default App;
