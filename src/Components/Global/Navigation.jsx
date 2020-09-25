import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";
import RedButton from "./RedButton";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function DisplayMenu() {
    return (
      <>
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
        <div
          onClick={() => setIsMenuOpen(false)}
          className="transparent-overlay"
        ></div>
      </>
    );
  }

  return (
    <>
      <div className="logo-container">
        <img src="./assets/images/logo/dvu-logo.png" />
      </div>
      <div className="burger-menu">
        <button type="button" onClick={() => setIsMenuOpen(true)}>
          <i className="fas fa-bars fa-2x"></i>
        </button>
      </div>
      {isMenuOpen ? <DisplayMenu /> : null}
    </>
  );
}

export default Navigation;
