// CounterComponent.tsx
import React from 'react';
import { useCounter } from './hooks/useCounter';

const CounterComponent: React.FC = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
