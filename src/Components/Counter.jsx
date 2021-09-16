import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </React.Fragment>
  );
}

export default Counter;
