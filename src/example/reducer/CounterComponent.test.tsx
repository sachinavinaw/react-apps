// CounterComponent.test.tsx
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import CounterComponent from './CounterComponent';
import userEvent from '@testing-library/user-event';

describe('CounterComponent', () => {
  test('renders with initial count and buttons', () => {
    const { getByText } = render(<CounterComponent />);
    const countElement = getByText(/Count: 0/i);
    const incrementButton = getByText(/Increment/i);
    const decrementButton = getByText(/Decrement/i);

    expect(countElement).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  test('increments and decrements count when buttons are clicked', () => {
    const { getByText } = render(<CounterComponent />);
    const countElement = getByText(/Count: 0/i);
    const incrementButton = getByText(/Increment/i);
    const decrementButton = getByText(/Decrement/i);

    act(() => {
      userEvent.click(incrementButton);
      userEvent.click(incrementButton);
    });

    expect(countElement.textContent).toBe('Count: 2');

    act(() => {
      userEvent.click(decrementButton);
    });

    expect(countElement.textContent).toBe('Count: 1');
  });
});
