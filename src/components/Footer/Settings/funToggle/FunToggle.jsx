import React from "react";
import s from "./funToggle.module.scss";

const FunToggle = ({ value, onChange, name}) => {
  return (
    <div>
      <input
        id="toggle"
        className={s.toggle}
        type="checkbox"
        onChange={onChange}
        role="switch"
        name="toggle"
        value="on"
      />
      <label for="toggle" className={s.slot}>
        <span className={s.slot__label}>OFF</span>
        <span className={s.slot__label}>ON</span>
      </label>
      <div className={s.curtain}></div>
    </div>
  );
};

export default FunToggle;
