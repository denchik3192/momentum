import { Timer } from "@material-ui/icons";
import React from "react";
import { Date } from "./Date/Date";
import Focus from "./Focus/Focus";
import Greeting from "./Gretting/Greeting";
import s from "./main.module.scss";
import Time from "./Time/Time";

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //     timerActive: false,
  //   };
  //   this.toggleTimerActive = this.toggleTimerActive.bind(this);
  // }

  // toggleTimerActive() {
  //   console.log(this.state.timerActive);
  //   this.state.timerActive === true
  //     ? this.setState({ timerActive: false })
  //     : this.setState({ timerActive: true });
  // }
  
  render() {
    return (
      <main className={s.main}>
        <Time />
        {/* <Timer timerActive={this.timerActive}/> */}
        {/* <Date /> */}
        <Greeting />
        <Focus />
      </main>
    );
  }
}

export default Main;
