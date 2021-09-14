import React from 'react';

import './styles/TodoItem.css';

function TodoItem(props) {
  return <p>{props.text}</p>;
}

export default TodoItem;
