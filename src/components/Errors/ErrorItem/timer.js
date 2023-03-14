import React, { useState, useEffect } from 'react';
import Button from '../../UI/Button'

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
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
      <h2>Timer: {formatTime(hours)}:{formatTime(minutes)}:{formatTime(remainingSeconds)}</h2>
      <div className="buttons">
        {!isActive ? (
            <Button whatToDo={handleStart} action={"Start"}></Button>
        //   <button onClick={handleStart}>Start</button>
        ) : (
            <Button whatToDo={handleStop} action={"Stop"}></Button>
        //   <button onClick={handleStop}>Stop</button>
        )}
        <Button whatToDo={handleReset} action={"Reset"}></Button>
        {/* <button onClick={handleReset}>Reset</button> */}
      </div>
    </div>
    </>
  );
};

export default Timer;