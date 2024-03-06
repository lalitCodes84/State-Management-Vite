// Counter.jsx
import React, { useState } from 'react';


export function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="counter-buttons">
        <button onClick={decrement}>Decrease</button>
        <span className="count">{count}</span>
        <button onClick={increment}>Increase</button>
      </div>
    </div>
  );
}