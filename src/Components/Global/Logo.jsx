import React, { useState } from "react";

import "./Logo.css";
import NavMenu from "./NavMenu";

function Logo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function ToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function DisplayMenu() {
    return (
      <>
        <NavMenu />{" "}
        <div onClick={ToggleMenu} className="transparent-overlay"></div>
      </>
    );
  }

  return (
    <>
      <div className="logo-container">
        <img src="./assets/images/logo/dvu-logo.png" />
      </div>
      <div className="burger-menu">
        <button type="button" onClick={ToggleMenu}>
          <i className="fas fa-bars fa-2x"></i>
        </button>
      </div>
      {isMenuOpen ? <DisplayMenu /> : null}
    </>
  );
}

export default Logo;
