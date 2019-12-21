import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const { seconds, setOver, isTimeOver } = props;
  const [timer, setTimer] = useState(seconds);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    } else {
      setOver(true);
    }
  })

  return (
    <div className={`timer ${isTimeOver ? 'red' : ''}`}>
      {timer}
    </div>
  );
}

export default Timer;