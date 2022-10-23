import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeUserName } from "../../../reduxTK/toolkitSlice";
import s from "./greeting.module.scss";

const Greeting = () =>{
  const userName = useSelector((state) => state.toolkit.userName);
  const dispatch = useDispatch();

  const onUserNameChange = (e) => {
    dispatch(changeUserName(e.currentTarget.value));
  }

  return (
    <div className={s.greeting}>
      Good morning,{" "}
      <input
        type="text"
        size="1"
        value={userName}
        onChange={onUserNameChange}
      />
      .
    </div>
  );
}

export default Greeting;
