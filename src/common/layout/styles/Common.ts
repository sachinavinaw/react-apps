import styled from 'styled-components';

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
