// useCounter.ts
import { useReducer } from 'react';

type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };

function counterReducer(state: number, action: CounterAction): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export function useCounter(initialCount: number) {
  const [count, dispatch] = useReducer(counterReducer, initialCount);

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return { count, increment, decrement };
}
