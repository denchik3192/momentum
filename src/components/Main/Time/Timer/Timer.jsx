import classNames from "classnames";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTimer } from "react-timer-hook";
import s from "./timer.module.scss";

const Timer = ({ expiryTimestamp, timerActive }) => {
  // console.log(time);
  //try react-timer-hook?
  // const [days, setDays] = useState(10);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  const [countdown, setCountdown] = useState(null);

  const {
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
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className={timerActive ? classNames(s.timer, s.active) : s.timer}>
      <h3>Timer</h3>
      <div >
        <div style={{ fontSize: "50px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
        {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 600);
            restart(time);
          }}
        >
          Restart
        </button>
      </div>
      <input type="datetime-local" name="" id="" />
      <div className={s.countdown}>{expiryTimestamp}</div>
    </div>
  );
};

export default Timer;
