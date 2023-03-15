import React, { useState, useEffect } from 'react';
import Button from '../../UI/Button'
import { get_is_active } from '../../Utils/utils';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(props.sec);
  const [isActive, setIsActive] = useState(get_is_active(props.id));
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        let timerDataStorage={
          sec: seconds, 
          isActive: isActive
        }
        localStorage.setItem(props.id, JSON.stringify(timerDataStorage));
        console.log()
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const remainingSeconds = seconds - hours * 3600 - minutes * 60;

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const handleReset = () => {
    setSeconds(0);
  };

  return (
    <>
    <div className="timer">
      <h2>Timer: {formatTime(hours)}:{formatTime(minutes)}:{formatTime(remainingSeconds)} {}</h2>
    </div>
    </>
  );
};

export default Timer;