import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home-page/home-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import AboutPage from "./pages/about-page/about-page.component";
import RegisterPage from "./pages/register-page/register-page.component";
import ArtistsPage from "./pages/artists-page/artists-page.component";
import DashboardPage from "./pages/dashboard-page/dashboard-page.component";

import Header from "./components/header/header.component";

import PrivateRoute from "./components/common/private-route/private-route-component";

function App() {
  return (
    <div className="App" style={{ flex: 1, backgroundColor: "white" }}>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route exact path="/register" component={RegisterPage} /> */}
        <Route exact path="/about" component={AboutPage} />

        <Route exact path="/artists" component={ArtistsPage} />
      </Switch>
      {/* for local */}
      <Route exact path="/dashboard" component={DashboardPage} />

      {/* for heroku */}
      {/* <Switch>
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      </Switch> */}

      <div style={{ paddingBottom: 300 }}></div>
    </div>
  );
}

export default App;
