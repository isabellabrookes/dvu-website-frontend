import React, { useState } from "react";

import InputField from "../Components/Global/InputField";
import DropDownField from "../Components/Global/DropDownField";
import RedButton from "../Components/Global/RedButton";

import style from "./RegisterPage.module.css";

function RegisterPage() {
  const [formData, setFormData] = useState({});

  function handleFormSubmit(e) {
    e.preventDefault();
    //check for empty and required fields
    //check for invalid inputs, email, mobile
    // if all is good, make a post request to api endpoint and send formData

    console.log(formData);
  }

  return (
    <>
      <div className={style.container}>
        <h4 className={style.pageTitle}>Register</h4>
        <form className={style.formContainer} onSubmit={handleFormSubmit}>
          <InputField
            type="text"
            placeholder="First Name"
            keyName="firstName"
            setFormData={setFormData}
            formData={formData}
          />
          <InputField
            type="text"
            placeholder="Last Name"
            keyName="lastName"
            setFormData={setFormData}
            formData={formData}
          />
          <InputField
            type="tel"
            placeholder="Mobile Number"
            keyName="mobileNumber"
            setFormData={setFormData}
            formData={formData}
          />
          <InputField
            type="text"
            placeholder="Instagram Name"
            keyName="instagramName"
            setFormData={setFormData}
            formData={formData}
          />
          <InputField
            type="email"
            placeholder="Email Address"
            keyName="emailAddress"
            setFormData={setFormData}
            formData={formData}
          />
          <InputField
            type="email"
            placeholder="Confirm Email Address"
            keyName="emailConfirm"
            setFormData={setFormData}
            formData={formData}
          />
          <InputField
            type="password"
            placeholder="Password"
            keyName="password"
            setFormData={setFormData}
            formData={formData}
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            keyName="passwordConfirm"
            setFormData={setFormData}
            formData={formData}
          />
          <DropDownField
            name="Car Model"
            setFormData={setFormData}
            formData={formData}
            keyName="carModel"
          />
          <DropDownField
            name="Car Color"
            setFormData={setFormData}
            formData={formData}
            keyName="carColor"
          />
          <DropDownField
            name="Car Year"
            setFormData={setFormData}
            formData={formData}
            keyName="carYear"
          />
          <DropDownField
            name="Plate Emirate"
            setFormData={setFormData}
            formData={formData}
            keyName="plateEmirate"
          />

          <DropDownField
            name="Plate Code"
            setFormData={setFormData}
            formData={formData}
            keyName="plateCode"
          />
          <InputField
            type="number"
            placeholder="Plate Number"
            keyName="plateNumber"
            setFormData={setFormData}
            formData={formData}
          />
          <RedButton type="submit" text="Register" />
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
