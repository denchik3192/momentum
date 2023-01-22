import cn from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserFocus } from "../../../reduxTK/mainSlice";
import s from './focus.module.scss'

function Focus() {
  const userFocus = useSelector((state) => state.main.userFocus);
  const isUserFocusActive = useSelector((state) => state.settings.generalSettings[3].checked);
  const dispatch = useDispatch();

  const onUserFocusChange = (e) => {
    dispatch(changeUserFocus (e.currentTarget.value));
  }
  return (
    <div className={cn(s.focusWrapper, isUserFocusActive ? '' : s.hidden)}>
      <h3>What is your main focus for today?</h3>
      <input className={s.focus} type="text" value={userFocus}
        onChange={onUserFocusChange}/>
    </div>
  );
}

export default Focus;
