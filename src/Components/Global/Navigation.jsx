import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "./Navigation.module.css";
import RedButton from "./RedButton";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function DisplayMenu(props) {
    const animation = props.isOpen ? style.slideInRight : style.slideOutRight;
    const overlay = props.isOpen
      ? style.showTransparentOverlay
      : style.hideTransparentOverlay;

    return (
      <>
        <div className={style.menu + " " + animation}>
          <Link className={style.menuItem} to="/">
            HOME
          </Link>
          <Link className={style.menuItem} to="/aboutus">
            ABOUT US
          </Link>
          <Link className={style.menuItem} to="/events">
            EVENTS
          </Link>
          <Link className={style.menuItem} to="/sponsors">
            SPONSORS
          </Link>
          <Link className={style.menuItem} to="/media">
            MEDIA
          </Link>
          <Link className={style.menuItem} to="/leaderboard">
            LEADERBOARD
          </Link>
          <Link to="/login">
            <RedButton
              text={isLoggedIn ? "Account" : "Log in"}
              iconClassName="far fa-user"
            ></RedButton>
          </Link>
        </div>
        <div onClick={() => setIsMenuOpen(false)} className={overlay}></div>
      </>
    );
  }

  return (
    <>
      <div className={style.logoContainer}>
        <img
          className={style.dvuLogo}
          src="./assets/images/logo/dvu-logo.png"
        />
      </div>
      <div className={style.burgerMenu}>
        <button
          className={style.burgerMenuIcon}
          type="button"
          onClick={() => setIsMenuOpen(true)}
        >
          <i className="fas fa-bars fa-2x"></i>
        </button>
      </div>
      <DisplayMenu isOpen={isMenuOpen} />
    </>
  );
}

export default Navigation;
