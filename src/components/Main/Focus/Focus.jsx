import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserFocus } from "../../../reduxTK/toolkitSlice";
import s from './focus.module.scss'

function Focus() {
  const userFocus = useSelector((state) => state.toolkit.userFocus);
  const dispatch = useDispatch();

  const onUserFocusChange = (e) => {
    dispatch(changeUserFocus (e.currentTarget.value));
  }
  return (
    <div>
      <h3>What is your main focus for today?</h3>
      <input className={s.focus} type="text" value={userFocus}
        onChange={onUserFocusChange}/>
    </div>
  );
}

export default Focus;
