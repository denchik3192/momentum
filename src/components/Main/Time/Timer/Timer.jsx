import {
  Pause,
  PlayArrow,
  Restore,
} from "@material-ui/icons";
import classNames from "classnames";
import React, { useState } from "react";
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import s from "./timer.module.scss";

const Timer = ({ timerActive }) => {
  const [timerValue, setTimerValue] = useState("600");
  const date = new Date();
  let expiryTimestamp = date.setSeconds(
    //todo fix timer touble
    date.getSeconds() + timerValue
  );

  let {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    minutes = timerValue
  }, [timerValue])

  const chengeSelect = (event) => {
    setTimerValue(event.target.value);
  };

  return (
    <div className={timerActive ? classNames(s.timer, s.active) : s.timer}>
      <h3>
        Timer
        <select
        className={s.tmerMinutes}
        // value={timerValue}
        onChange={chengeSelect}
      >
        <option value="1">1</option>
        <option value="5">5</option>
        <option  value="10" selected>10</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="60">60</option>
      </select>
        {/* <ArrowDropDownOutlined  className={s.timerArrow}/> */}
      </h3>
      <div>
        <div className={s.countdown}>
          -<span>{hours > 9 ? hours : "0" + hours}</span>:
          <span>{minutes > 9 ? minutes : "0" + minutes}</span>:
          <span>{seconds > 9 ? seconds : "0" + seconds}</span>
          -
        </div>
        {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
        {/* <button onClick={start}>Start</button> */}
        <PlayArrow onClick={start}  className={s.timerIcons}/>
        <Pause onClick={pause} className={s.timerIcons}/>
        <Restore className={s.timerIcons}
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 600);
            restart(time);
          }}
        />

        {/* <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button> */}
        {/* <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 600);
            restart(time);
          }}
        >
          Restart
        </button> */}
      </div> 
    </div>
  );
};

export default Timer;
