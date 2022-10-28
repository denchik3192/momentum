import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./auth.module.scss";
import { AuthContext } from "../../context/";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [emailError, setEmailError] = useState("Field Email can not be empty");
  const [passwordError, setPasswordError] = useState(
    "Field Password can not be empty"
  );
  const [formValid, setFormValid] = useState(false);
  // const {isAuth, setIsAuth} = useContext(AuthContext)
  // const login = event => {
  //   event.preventDefault();
  //   setIsAuth(true);
  //   localStorage.setItem('auth', 'true')
  // }
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Wrong email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setPasswordError("Wrong password");
      if (!e.target.value) {
        setPasswordError("Field Password can not be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "current-email":
        setTouchedEmail(true);
        break;
      case "current-password":
        setTouchedPassword(true);
        break;
    }
  };

  return (
    <form className={s.form} >
      <h1>Registration</h1>
      {touchedEmail && emailError && (
        <div className={s.error}>{emailError}</div>
      )}
      <input
        onChange={(e) => emailHandler(e)}
        value={email}
        onBlur={(e) => blurHandler(e)}
        type="email"
        name="current-email"
        id="email"
        placeholder="email"
      />
      {touchedPassword && passwordError && (
        <div className={s.error}>{passwordError}</div>
      )}
      <input
        onChange={(e) => passwordHandler(e)}
        value={password}
        onBlur={(e) => blurHandler(e)}
        type="password"
        name="current-password"
        id="password"
        placeholder="password"
      />
      <button disabled={!formValid} type="submit">
        Registration
      </button>
    </form>
  );
};

export default Auth;
