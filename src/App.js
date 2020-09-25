import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./Components/Global/Navigation";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import SponsorsPage from "./Pages/SponsorsPage";
import MediaPage from "./Pages/MediaPage";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/media">
            <MediaPage />
          </Route>
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
      </Router>
    </>
  );
}

export default App;
