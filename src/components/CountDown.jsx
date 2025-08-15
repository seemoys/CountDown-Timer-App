import { useEffect, useRef, useState } from "react";
import "./CountDown.css";

function CountDown() {
  const [target, setTarget] = useState(null);
  const [diff, setDiff] = useState(0);
  const timerRef = useRef(0);

  function handleSubmit() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDiff(new Date(target) - new Date());
    }, 1000);
  }

  useEffect(() => {
    if (diff < 0) {
      clearInterval(timerRef.current);
      setDiff(0);
    }
  }, [diff]);

  const getDays = () => Math.floor(diff / (1000 * 60 * 60 * 24));
  const getHour = () => Math.floor((diff / (1000 * 60 * 60)) % 24);
  const getMin = () => Math.floor((diff / (1000 * 60)) % 60);
  const getSec = () => Math.floor((diff / 1000) % 60);

  return (
    <div className="countdown-container">
      <h1 className="countdown-title">Count Down Timer App</h1>

      <div className="countdown-controls">
        <input
          type="datetime-local"
          onChange={(e) => setTarget(e.target.value)}
        />
        <button onClick={handleSubmit}>Start</button>
      </div>

      <div className="time-display">
        <div className="time-box">
          <span className="time-value">{getDays()}</span>
          <span className="time-label">Days</span>
        </div>
        <div className="time-box">
          <span className="time-value">{getHour()}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-box">
          <span className="time-value">{getMin()}</span>
          <span className="time-label">Minutes</span>
        </div>
        <div className="time-box">
          <span className="time-value">{getSec()}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
