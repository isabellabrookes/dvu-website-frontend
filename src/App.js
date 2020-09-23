import React from "react";

import Logo from "./Components/Global/Logo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavMenu from "./Components/Global/NavMenu";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import SponsorsPage from "./Pages/SponsorsPage";

function App() {
  return (
    <>
      <Logo />
      {/* <NavMenu /> */}
      {/* <Router>
        <Switch>
          <Route path="/aboutus">
            <AboutPage />
          </Route>
          <Route path="/sponsors">
            <SponsorsPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
