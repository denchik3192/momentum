import React from "react";
import classNames from "classnames";
import { useState } from "react";
import { useTimer } from "react-timer-hook";
import s from "./timer.module.scss";
import { Pause, PlayArrow, Stop } from "@mui/icons-material";

const Timer = ({ timerActive }) => {
  const [timerValue, setTimerValue] = useState(600);
  const [isTimerExpire, setIsTimerExpire] = useState(false);
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);

  let { seconds, minutes, hours, isRunning, pause, resume, restart } = useTimer(
    {
      expiryTimestamp,
      autoStart: false,
      onExpire: () => {
        setIsTimerExpire(true);
        setTimerValue(0);
      },
    }
  );

  const handleTimerExpire = (e) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + Number(e.target.value));
    setTimerValue(Number(e.target.value));
    restart(time);
    setIsTimerExpire(false);
  };

  const handlePlayTimer = () => {
    resume();
    setIsTimerExpire(false)
    
  };
  const handleStopTimer = () => {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 0);
      restart(time);
      setTimerValue(0);
  };

  return (
    <div className={timerActive ? classNames(s.timer, s.active) : s.timer}>
      <h3>
        Timer
        <select
          value={timerValue}
          className={s.tmerMinutes}
          onChange={handleTimerExpire}
        >
          <option value="0" hidden>
            0
          </option>
          <option value="60">1</option>
          <option value="300">5</option>
          <option value="600">10</option>
          <option value="900">15</option>
          <option value="1800">30</option>
          <option value="3600">60</option>
        </select>
      </h3>
      <div>
        <div className={s.countdown}>
          - <span>{hours > 9 ? hours : "0" + hours}</span>:
          <span>{minutes > 9 ? minutes : "0" + minutes}</span>:
          <span>{seconds > 9 ? seconds : "0" + seconds}</span> -
        </div>
        <PlayArrow
          onClick={handlePlayTimer}
          className={
            isRunning
              ? classNames(s.timerIcons, s.play, s.active)
              : s.timerIcons
          }
        />
        <Pause
          onClick={pause}
          className={
            !isRunning
              ? classNames(s.timerIcons, s.pause, s.active)
              : s.timerIcons
          }
        />
        <Stop
          className={s.timerIcons}
          onClick={handleStopTimer}
        />
        {isTimerExpire ? <div>the timer went off</div> : <div></div>}
      </div>
    </div>
  );
};

export default Timer;
