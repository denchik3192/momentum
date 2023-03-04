import React from "react";
import Focus from "./Focus/Focus";
import Greeting from "./Gretting/Greeting";
import s from "./main.module.scss";
import Time from "./Time/Time";

class Main extends React.Component {  

  render() {
    console.log(' main render')
    return (
      <main className={s.main}>
        <Time />
        <Greeting />
        <Focus />
      </main>
    );
  }
}

export default Main;
