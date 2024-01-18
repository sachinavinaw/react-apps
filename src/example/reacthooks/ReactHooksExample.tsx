import React, { useState, useCallback } from 'react';

function ReactHooksExample() {
  const [count, setCount] = useState(0);
  // Define a callback function using useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array - re-create the function when `count` changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default ReactHooksExample;
