import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./auth.module.scss";
import { AuthContext } from "../../context/";
import { useForm } from "react-hook-form";
import { logRoles } from "@testing-library/react";
import { changeUserName } from "../../reduxTK/mainSlice";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch()
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur"
  });

  // your form submit function which will invoke after successful validation

  const onSubmit = (data) => {
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    console.log(data);
    reset();
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>
        <label htmlFor="firstName">
          First Name:
          <input
            placeholder="Denis"
            {...register("firstName", {
              required: "Must be filled.",
            })}
          />
        </label>
        <div style={{ height: 5 }}>{errors?.firstName && <p>{errors?.firstName.message || "Error!"}</p>}</div>

        <label htmlFor="email">
          Email:
          <input
            placeholder="den465341@gmail.com"
            type="text"
            {...register("email",{
              required: "Must be filled.",
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message : "invalid Email"},
            })}
          />
        </label>
        <div style={{ height: 5 }}>{errors?.email && <p>{errors?.email.message || "Error"}</p>}</div>
        <label htmlFor="password">Password:</label>

        <input placeholder="password" type="text" {...register("password", {
          required: "Must be filled.",
          minLength: {
            value: 5,
            message: "Your password must be at least 6 characters.",
          }
        })} />
        <div style={{ height: 5 }}>{errors?.password && <p>{errors?.password.message || "Error"}</p>}</div>

        <input type="submit" value={"submit"} disabled={!isValid}/>
      </form>
    </div>
  );
};

export default Auth;
