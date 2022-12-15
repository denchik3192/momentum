import React, { Component } from "react";
import { MdHourglassBottom, MdMoreHoriz } from "react-icons/md/index";
import s from "./time.module.scss";
import Timer from "./Timer/Timer";

export class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timerActive = false;
    // this.setTimerActive = this.setTimerActive().bind(this)
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

  toggleTimer() {
    this.setState(
      !this.timerActive
    )
  }

  render() {
    return (
      <div className={s.timeWrapper}>
        <Timer
          expiryTimestamp={this.state.date.setSeconds(
            this.state.date.getSeconds() + 600
          )}
          timerActive={this.timerActive}
          // setTimerActive={this.timerActive}
        />
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
