import React from 'react';
import Counter from './Counter';
import Once from './Once';

import './styles/TodoItem.css';

let manageItem;

function TodoItem(props) {
  if (props.type === 'timer') {
    manageItem = <h1>Timer</h1>;
  }
  if (props.type === 'counter') {
    manageItem = <Counter />;
  }
  if (props.type === 'once') {
    manageItem = <Once />;
  }
  return (
    <li className="TodoItem">
      <section className="TodoItem__text TodoItem__left">{props.text}</section>
      <section className="half-space TodoItem__right">{manageItem}</section>
    </li>
  );
}

export default TodoItem;
