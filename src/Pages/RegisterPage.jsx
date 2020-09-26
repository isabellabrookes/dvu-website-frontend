import React from "react";

import InputField from "../Components/Global/InputField";
import DropDownField from "../Components/Global/DropDownField";

function RegisterPage() {
  return (
    <>
      <h4>Register</h4>
      <InputField type="text" placeholder="First Name" />
      <InputField type="text" placeholder="Last Name" />
      <h5>Gender</h5>
      <InputField type="tel" placeholder="Mobile Number" />
      <InputField type="text" placeholder="Instagram Name" />
      <InputField type="email" placeholder="Email Address" />
      <InputField type="email" placeholder="Confirm Email Address" />
      <InputField type="password" placeholder="Password" />
      <InputField type="password" placeholder="Confirm Password" />
      {
        "//Add car model drop down //Add car color dropdown //add car year dropdown"
      }
      <DropDownField name="Car Model" />
      <DropDownField name="Car Color" />

      <DropDownField name="Car Year" />
      {" //add plate emirate drop down //add plate code dropdown"}
      <InputField type="number" placeholder="Plate Number" />
    </>
  );
}

export default RegisterPage;
