import React, { useState } from 'react';
import './styles/Counter.css';
function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <button disabled={count <= 0} className="Counter__button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <p className="Counter__number"> {count} </p>
      <button className="Counter__button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </React.Fragment>
  );
}

export default Counter;
