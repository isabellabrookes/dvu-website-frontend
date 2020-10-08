import React from "react";
import { Link } from "react-router-dom";

import RedButton from "../Components/Global/RedButton";
import InputField from "../Components/Global/InputField";
import style from "./LoginPage.module.css";

function LoginPage() {
  function handleButtonClick() {}

  return (
    <div className={style.loginForm}>
      <h4 className={style.pageTitle}>Login</h4>
      <InputField type="email" placeholder="Email Address" />
      <InputField type="password" placeholder="Password" />
      <Link to="/profile">
        <RedButton text="Login" />
      </Link>
      <p className={style.helpText}>Don't have an account yet?</p>
      <Link className={style.registerLink} to="/register">
        Register
      </Link>
    </div>
  );
}

export default LoginPage;
