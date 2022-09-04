import React from "react";
import s from './focus.module.scss'

function Focus() {
  return (
    <div>
      <h3>What is your main focus for today?</h3>
      <input className={s.focus} type="text" />
    </div>
  );
}

export default Focus;
