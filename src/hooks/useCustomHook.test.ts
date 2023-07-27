import { act, renderHook, waitFor } from '@testing-library/react';
import useCustomHook from './useCustomHook';

// const mockIncrementFn = jest.fn();
// const mockaddRowFn = jest.fn();
// Mock the custom hook implementation

describe('useCustomHook tests', () => {
  it('should render hook correctly', () => {
    const { result } = renderHook(() => useCustomHook());
    expect(result.current.count).toBe(0);
  });

  it('should increment count correctly', async () => {
    const { result } = renderHook(() => useCustomHook());
    const row1 = { id: 1, name: 'Sachin', age: 33 };
    const row2 = { id: 2, name: 'Akriti', age: 27 };

    act(() => {
      result.current.increment(row1);
    });

    act(() => {
      result.current.increment(row2);
    });

    const rows = result.current.selectedRows;
    // expect(result.current.count).toBe(2);
    const expected = [
      { id: 1, name: 'Sachin', age: 33 },
      { id: 2, name: 'Akriti', age: 27 },
    ];
    await waitFor(() => {
      expect(rows).toEqual(expected);
    });
  });

  it('should addRow count correctly', () => {
    const { result } = renderHook(() => useCustomHook());
    const row1 = { id: 1, name: 'Sachin', age: 33 };
    const row2 = { id: 2, name: 'Akriti', age: 27 };

    act(() => {
      result.current.increment(row1);
    });

    act(() => {
      result.current.increment(row2);
    });

    act(() => {
      result.current.decrement(1); // Use the actual addRow function to test
    });
    expect(result.current.selectedRows).toEqual([{ id: 2, name: 'Akriti', age: 27 }]);
  });
});
