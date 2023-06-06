import React from 'react';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className='error-container'>
      <label className='text-danger font-size-sm'>{message}</label>
    </div>
  );
};

export default ErrorMessage;
