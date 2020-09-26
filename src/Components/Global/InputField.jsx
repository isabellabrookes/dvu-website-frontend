import React from "react";

import style from "./InputField.module.css";

function InputField(props) {
  return (
    <input
      className={style.inputField}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default InputField;
