import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);

export function Test() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const idInterval = useRef(null);

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - 1000) / 1000;
  }

  function onStart() {
    setStartTime(Date.now());
    setNow(Date.now);

    clearInterval(idInterval.current);
    idInterval.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function onStop() {
    clearInterval(idInterval.current);
  }

  return (
    <>
      <h1>Temps passé : {secondsPassed.toFixed(3)}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
    </>
  );
}
