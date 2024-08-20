import React, { useState, useEffect } from "react";

const Timer = () => {
  const targetDate = new Date("2024-08-24T00:00:00").getTime();

  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    complete: false,
  });

  const getTimeRemaining = (targetDateTime) => {
    const nowTime = Date.now();
    const complete = nowTime >= targetDateTime;

    if (complete) {
      return {
        complete,
        seconds: 0,
        minutes: 0,
        hours: 0,
      };
    }

    const secondsRemaining = Math.floor((targetDateTime - nowTime) / 1000);
    const hours = Math.floor(secondsRemaining / 60 / 60);
    const minutes = Math.floor(secondsRemaining / 60) - hours * 60;
    const seconds = secondsRemaining % 60;

    return {
      complete,
      seconds,
      minutes,
      hours,
    };
  };

  const formatTimeSegment = (value) => {
    const firstNumber = Math.floor(value / 10) || 0;
    const secondNumber = value % 10 || 0;
    return { firstNumber, secondNumber };
  };

  useEffect(() => {
    const updateAllSegments = () => {
      const timeRemainingBits = getTimeRemaining(targetDate);
      setTimeRemaining(timeRemainingBits);

      if (timeRemainingBits.complete) {
        clearInterval(countdownTimer);
      }
    };

    const countdownTimer = setInterval(updateAllSegments, 1000);
    updateAllSegments(); // Initial update
    return () => clearInterval(countdownTimer); // Cleanup on unmount
  }, [targetDate]);

  return (
    <div className="countdown-body">
      <h1 className="heading">
        Get Ready for <span>Chirag's</span> Birthday Bash
        <br />
        The Countdown Is On!
      </h1>

      <div className="countdown">
        <TimeSection label="Hours" value={timeRemaining.hours} formatTimeSegment={formatTimeSegment} />
        <TimeSection label="Minutes" value={timeRemaining.minutes} formatTimeSegment={formatTimeSegment} />
        <TimeSection label="Seconds" value={timeRemaining.seconds} formatTimeSegment={formatTimeSegment} />
      </div>
    </div>
  );
};

const TimeSection = ({ label, value, formatTimeSegment }) => {
  const { firstNumber, secondNumber } = formatTimeSegment(value);

  return (
    <div className="time-section">
      <div className="time-group">
        <TimeSegment number={firstNumber} />
        <TimeSegment number={secondNumber} />
      </div>
      <p>{label}</p>
    </div>
  );
};

const TimeSegment = ({ number }) => {
  return (
    <div className="time-segment">
      <div className="segment-display">
        <div className="segment-display__top">{number}</div>
        <div className="segment-display__bottom">{number}</div>
        <div className="segment-overlay">
          <div className="segment-overlay__top">{number}</div>
          <div className="segment-overlay__bottom">{number}</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
