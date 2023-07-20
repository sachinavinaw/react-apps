import React from 'react';
import { ColorCategory } from './ClassTypes';
type ButtonProps = {
  type?: 'button' | 'submit';
  value: string;
  className?: ColorCategory;
  dataTestID?: string;
  onClick: () => void;
};
function Button({ type, value, className, dataTestID, onClick }: ButtonProps) {
  return (
    <button type={type} className={className} data-testid={dataTestID} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
