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
    
    return (
        <div className={cn(s.clock, this.props.isActive ? '' : s.hidden)}>
          {this.props.timeFormat === 24 
          ?<div> {this.state.date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})} </div> 
            :<div>{this.state.date.toLocaleString('en-US', { hour: 'numeric', minute: "numeric"}).slice(0,-2)}</div>}
        </div>
    );
  }
}

export default Clock;
