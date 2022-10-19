import React from "react";
import { useSelector } from "react-redux";
import s from "./greeting.module.scss";

function Greeting() {
  const userName = useSelector((state) => state.toolkit.userName);
  const handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  return (
    <div className={s.greeting}>
      Good morning,
      <input
        type="text"
        value={userName}
        onChange={handleChange}
      />{" "}.
    </div>
  );
}

export default Greeting;
