
import { HourglassBottom, MoreHoriz } from "@mui/icons-material";
import classNames from "classnames";
import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import Clock from "./Clock/Clock";
import s from "./time.module.scss";
import Timer from "./Timer/Timer";

export class Time extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      timerActive: false,
      moreActive: false,
    };
    
    this.toggleMoreActive = this.toggleMoreActive.bind(this);
    this.toggleTimerActive = this.toggleTimerActive.bind(this);
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
    console.log(this.props+'time');
    return (
      <div className={s.timeWrapper}>
        <Timer timerActive={this.state.timerActive} more={this.moreActive} />
        <HourglassBottom
          className={
            this.state.timerActive === true
              ? classNames(s.hourglass, s.active)
              : s.hourglass
          }
          onClick={this.toggleTimerActive}
        />

        {/* {this.props.time ? <Clock/> : <Clock className={classNames(s.clock, s.hide) }/>} */}
        <Clock isActive={this.props.time}/>
        
        <MoreHoriz
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


let mapStateToProps = (state, ownProps) => ({
  time: state.settings.generalSettings[0].checked,
});


export default connect(mapStateToProps)(Time);
