import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeUserName } from "../../../reduxTK/toolkitSlice";
import s from "./greeting.module.scss";

function Greeting() {
  const userName = useSelector((state) => state.toolkit.userName);
  const dispatch = useDispatch();

  return (
    <div className={s.greeting}>
      Good morning,{" "}
      <input
        type="text"
        size="1"
        value={userName}
        onChange={() => dispatch(changeUserName())}
      />
      .
    </div>
  );
}

export default Greeting;
