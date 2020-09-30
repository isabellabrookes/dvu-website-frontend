import React from "react";

import style from "./InputField.module.css";

function InputField(props) {
  const handleFormChange = (e) => {
    props.setFormData({
      ...props.formData,
      [props.keyName]: e.target.value,
    });
  };

  return (
    <input
      className={style.inputField}
      type={props.type}
      placeholder={props.placeholder}
      onChange={(e) => handleFormChange(e)}
    />
  );
}

export default InputField;

/*

- Using a prop called setFormData from RegisterPage
and passing in the setFormData function to set the state
- This component will update the state for each inputfield on Change
and set the formData with the current data inside it 
with the spread operator and add the new data.
- THen in register page, that state is already updated and can be submitted
to the db via an API call.

*/
