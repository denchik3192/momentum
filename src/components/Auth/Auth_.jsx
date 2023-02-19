import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./auth.module.scss";
import { AuthContext } from "../../context";
import { useForm } from "react-hook-form";

const Auth = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [emailError, setEmailError] = useState("Field Email can not be empty");
  const [passwordError, setPasswordError] = useState(
    "Field Password can not be empty"
  );
  const [formValid, setFormValid] = useState(false);
  const {isAuth, setIsAuth} = useContext(AuthContext);
  console.log(isAuth);

  const login = event => {
    console.log(isAuth);
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

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
        default:
    }
  };

  return (
    <div className={s.formWrapper}>
      {/* <form onSubmit={login} className={s.form}>
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
      </form> */}
       <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="email">Email</label>
      <input defaultValue="email" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="Password">Password</label>
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}

      <input type="submit" />
    </form>
    </div>
    
  );
};

export default Auth;
