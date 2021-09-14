import React from 'react';
import plusImg from '../assets/plus-sign.png';
import './styles/TodoCounter.css';

function TodoCounter() {
  return (
    <nav className="TodoCounter shift">
      <h1 className="TodoCounter__title">DI</h1>
      <ul className="TodoCounter__nav">
        <li>
          <a href className="TodoCounter__option">
            Done
          </a>
        </li>
        <li>
          <a href className="TodoCounter__option">
            To Do
          </a>
        </li>
      </ul>
      <img className="TodoCounter__image" src={plusImg} alt="Add one to do" />
    </nav>
  );
}

export default TodoCounter;
