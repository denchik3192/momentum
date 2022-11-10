import React, { Fragment } from "react";
import Time from "../Time/Time";
import s from "./date.module.scss";

export class Date extends Time {
//   options = { weekday: 'long'};
// day = new Intl.DateTimeFormat('en-US', options).format(Xmas95)

  render() {
    return (
      <Fragment>
        <div className={s.date}>{this.state.date.toLocaleDateString()}</div>
       
      </Fragment>
    );
  }
}

export default Time;
