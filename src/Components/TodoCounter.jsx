import React from 'react';

import './styles/TodoCounter.css';

function TodoCounter() {
  return (
    <nav className="TodoCounter">
      <h1 className="Todo__title">DI</h1>
      <span>To Do</span>
      <span>Done</span>
      <img src="../../assets/plus-sign.png" alt="Add one to do" />
    </nav>
  );
}

export default TodoCounter;
