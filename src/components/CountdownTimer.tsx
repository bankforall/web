import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateRemainingTime() {
    const timeDiff = targetDate.getTime() - new Date().getTime();
    const totalSeconds = Math.max(Math.floor(timeDiff / 1000), 0);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);
    return { days, hours, minutes, seconds };
  }

  return (
    <>
      {remainingTime.days > 0 && <span>{remainingTime.days} days : </span>}
      {remainingTime.hours > 0 && <span>{remainingTime.hours} h : </span>}
      {remainingTime.minutes > 0 && <span>{remainingTime.minutes} min : </span>}
      {remainingTime.seconds > 0 && <span>{remainingTime.seconds} sec.</span>}
    </>
  );
};

export default CountdownTimer;
