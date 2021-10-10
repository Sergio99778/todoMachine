import React from 'react';
import './styles/StopWatch.css';

function StopWatch() {
  return (
    <div className="stopwatch--container">
      <div id="stopwatch">00:00:00</div>
      <ul className="stopWatch--list">
        <li>
          <button className="stopWatch--button" onClick={() => startTimer()}>
            Start
          </button>
        </li>
        <li>
          <button className="stopWatch--button" onClick={() => stopTimer()}>
            Stop
          </button>
        </li>
        <li>
          <button className="stopWatch--button" onClick={() => resetTimer()}>
            Reset
          </button>
        </li>
      </ul>
    </div>
  );
}

export default StopWatch;

const timer = document.getElementById('stopwatch');

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime === true) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime === false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime === false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }
    if (min === 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec === 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min === 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr === 0) {
      hr = '0' + hr;
    }

    timer.textContent = hr + ':' + min + ':' + sec;

    setTimeout(timerCycle, 1000);
  }
}

function resetTimer() {
  timer.textContent = '00:00:00';
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}
