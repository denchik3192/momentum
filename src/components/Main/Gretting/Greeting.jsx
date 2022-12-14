import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeUserName } from "../../../reduxTK/mainSlice";
import s from "./greeting.module.scss";

const Greeting = () =>{
  const userName = useSelector((state) => state.toolkit.userName);
  const dispatch = useDispatch();

  const onUserNameChange = (e) => {
    dispatch(changeUserName(e.currentTarget.value));
  }

  const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
  
    const arr = ["night", "morning", "afternoon", "evening"];
    const timeOfDay = arr[Math.floor(hours / 6)];
    return timeOfDay;
  };

  // const time = getTimeOfDay();

  return (
    <div className={s.greeting}>
      Good {getTimeOfDay()},{" "}{/* TODO remove function usage*/}
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
