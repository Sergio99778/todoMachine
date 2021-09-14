import React from 'react';

import './styles/TodoItem.css';

function TodoItem(props) {
  return (
    <section className="TodoItem">
      <li className="TodoItem__text">✨ {props.text}</li>
    </section>
  );
}

export default TodoItem;
