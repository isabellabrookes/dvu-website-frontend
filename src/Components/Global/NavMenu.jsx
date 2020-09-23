import React, { useState } from "react";

import { Link, BrowserRouter as Router } from "react-router-dom";

import RedButton from "./RedButton";

import "./NavMenu.css";

function NavMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="menu">
        <Link className="menu-item" to="/">
          HOME
        </Link>
        <Link className="menu-item" to="/aboutus">
          ABOUT US
        </Link>
        <Link className="menu-item" to="/events">
          EVENTS
        </Link>
        <Link className="menu-item" to="/sponsors">
          SPONSORS
        </Link>
        <Link className="menu-item" to="/media">
          MEDIA
        </Link>
        <Link className="menu-item" to="/leaderboard">
          LEADERBOARD
        </Link>
        <RedButton
          text={isLoggedIn ? "Account" : "Log in"}
          iconClassName="far fa-user"
        ></RedButton>
      </div>
    </Router>
  );
}
export default NavMenu;

{
  /* <i class="far fa-user"></i> */
}
