import styled from 'styled-components';
import Colors from '../../../common/global/Color';

export const Wrapper = styled.div`
  border: 1px solid #ccc;
  // display: flex;
  height: 350px;
  overflow: auto;
  width: auto;
  trtd: (first-child) {
    border: 0;
  }
`;
export const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  font-size: 12px;
  text-align: left;
`;

export const THead = styled.thead`
  position: sticky;
  top: -1px;
  tr th {
    background: ${Colors.Blue};
    border: 1px solid #ccc;
    color: #fff;
    padding: 5px 10px;
  }

  th input[type='checkbox'] {
    margin: 0 auto;
    display: block;
  }
`;

export const TBody = styled.tbody`
  overflow: auto;
  tr td {
    border: 1px solid #ccc;
    padding: 5px 10px;
  }

  td input[type='checkbox'] {
    margin: 0 auto;
    display: block;
  }
`;

export const Button = styled.button`
  /* Shared button styles */
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 5px;
  /* Default color for the button */
  background-color: #007bff;
  color: #ffffff;

  /* Custom styles based on classnames */
  &.primary {
    background-color: #007bff;
    color: #ffffff;
  }

  &.secondary {
    background-color: #6c757d;
    color: #ffffff;
  }

  &.danger {
    background-color: #dc3545;
    color: #ffffff;
  }

  &:not(:first-child) {
    margin-left: 10px;
  }
`;
