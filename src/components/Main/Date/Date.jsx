import React from "react";
import Time from "../Time/Time";
import s from "./date.module.scss";

export class Date extends Time {

  render() {
    return (
      <div>
        <div className={s.date}>{this.state.date.toLocaleDateString()}</div>
      </div>
    );
  }
}

export default Time;
