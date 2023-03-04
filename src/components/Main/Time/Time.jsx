import { HourglassBottom, MoreHoriz } from "@mui/icons-material";
import classNames from "classnames";
import React, { Component } from "react";
import { connect } from "react-redux";
import Clock from "./Clock/Clock";
import s from "./time.module.scss";
import Timer from "./Timer/Timer";

export class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerActive: false,
      moreActive: false,
      timeFormat: 24,
    };

    this.toggleMoreActive = this.toggleMoreActive.bind(this);
    this.toggleTimerActive = this.toggleTimerActive.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
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

  handleCheckbox() {
    this.state.timeFormat === 12
      ? this.setState({ timeFormat: 24 })
      : this.setState({ timeFormat: 12 });
  }

  render() {
    return (
      <div className={s.timeWrapper}>
        <Timer timerActive={this.state.timerActive} />
        <HourglassBottom
          className={
            this.state.timerActive === true
              ? classNames(s.hourglass, s.active)
              : s.hourglass
          }
          onClick={this.toggleTimerActive}
        />

        <Clock isActive={this.props.time} timeFormat={this.state.timeFormat}/>

        <MoreHoriz
          className={
            this.state.moreActive === true
              ? classNames(s.more, s.active)
              : s.more
          }
          onClick={this.toggleMoreActive}
        />
        <div className={classNames(s.timeformat,  this.state.moreActive === true ?  '': s.hidden)}>
          <label htmlFor="toggleSwitch">{this.state.timeFormat}-hour clock</label>
          <input
            type="checkbox"
            onChange={this.handleCheckbox}
            className={s.toggleSwitch}
            checked={this.state.timeFormat === 24 ? "checked": !"checked"}
          />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => ({
  time: state.settings.generalSettings[0].checked,
});

export default connect(mapStateToProps)(Time);
