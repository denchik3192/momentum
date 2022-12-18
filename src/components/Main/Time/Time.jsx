import classNames from "classnames";
import React, { Component } from "react";
import { MdHourglassBottom, MdMoreHoriz } from "react-icons/md/index";
import s from "./time.module.scss";
import Timer from "./Timer/Timer";

export class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      timerActive: false,
      moreActive: false,
    };
    this.toggleTimerActive = this.toggleTimerActive.bind(this);
    this.toggleMoreActive = this.toggleMoreActive.bind(this);
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

  toggleTimerActive() {
    this.state.timerActive === true
      ? this.setState({ timerActive: false })
      : this.setState({ timerActive: true });
  }

  toggleMoreActive() {
    this.state.moreActive === true
      ? this.setState({ moreActive: false })
      : this.setState({ moreActive: true });
  }

  render() {
    return (
      <div className={s.timeWrapper}>
        <Timer timerActive={this.state.timerActive} more={this.moreActive} />

        <MdHourglassBottom
          className={
            this.state.timerActive === true
              ? classNames(s.hourglass, s.active)
              : s.hourglass
          }
          onClick={this.toggleTimerActive}
        />

        <div className={s.time}>
          {this.state.date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>

        <MdMoreHoriz
          className={
            this.state.moreActive === true
              ? classNames(s.more, s.active)
              : s.more
          }
          onClick={this.toggleMoreActive}
        />
      </div>
    );
  }
}

export default Time;
