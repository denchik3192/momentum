import React, { Component } from "react";
import s from "./clock.module.scss";
import cn from "classnames";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
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
    { }
    return (
        <div className={cn(s.clock, this.props.isActive ? '' : s.hidden)}>
          {this.state.date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
    );
  }
}

export default Clock;
