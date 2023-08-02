import React from 'react';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/feautres/counterSlice';
import styled from 'styled-components';

const StyledSpan = styled.span`
  padding: 3px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0px 5px;
`;
export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label='Increment value' className='btn btn-sm btn-primary' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <StyledSpan>{count}</StyledSpan>
        <button aria-label='Decrement value' className='btn btn-sm btn-danger' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
