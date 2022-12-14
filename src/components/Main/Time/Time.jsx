import React, { Component } from "react";
import { MdHourglassBottom, MdMoreHoriz } from "react-icons/md/index";
import s from "./time.module.scss";

export class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className={s.timeWrapper}>
        <MdHourglassBottom />
        <div className={s.time}>
          {this.state.date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <MdMoreHoriz />
      </div>
    );
  }
}

export default Time;
