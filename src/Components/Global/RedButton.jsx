import React from "react";

import "./RedButton.css";

function RedButton(props) {
  return (
    <button className="red-button" type="button">
      <i className={props.iconClassName}></i> {props.text}
    </button>
  );
}

export default RedButton;
