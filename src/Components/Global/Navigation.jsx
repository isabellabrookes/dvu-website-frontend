import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "./Navigation.module.css";
import RedButton from "./RedButton";

function DisplayMenu(props) {
  console.log("animatedMenu", props.animateMenu);
  const overlayAnimation = props.animateMenu && style.showTransparentOverlay;
  const menuAnimation =
    typeof props.animateMenu === "undefined" ||
    (props.animateMenu ? style.slideIn : style.slideOut);

  return (
    <>
      <div
        onClick={props.toggleMenu}
        className={`${style.transparentOverlay} ${overlayAnimation}`}
      ></div>
      <div id="puppies" className={`${style.menu} ${menuAnimation}`}>
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
            text={props.isLoggedIn ? "Account" : "Log in"}
            iconClassName="far fa-user"
          ></RedButton>
        </Link>
      </div>
    </>
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [animateMenu, setAnimateMenu] = useState();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setAnimateMenu(true);
    } else {
      setAnimateMenu(false);
    }
  }

  return (
    <>
      <div className={style.logoContainer}>
        <img
          className={style.dvuLogo}
          src="./assets/images/logo/dvu-logo.png"
          alt="logo"
        />
      </div>
      <div className={style.burgerMenu}>
        <button
          className={style.burgerMenuIcon}
          type="button"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars fa-2x"></i>
        </button>
      </div>
      <DisplayMenu
        animateMenu={animateMenu}
        toggleMenu={toggleMenu}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}

export default Navigation;
