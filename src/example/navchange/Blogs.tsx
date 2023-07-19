import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { fixAlphaNumericOnly, isAlphanumeric } from '../../utils/validation';

const TextBox = styled.input`
  width: 150px;
  height: 38px;
  border: 1px solid #ccc;
  border-radius: 0;
`;

function Blogs() {
  const [message, setMessage] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(fixAlphaNumericOnly(event.target.value, 5));
  };

  return (
    <>
      <div>This is blogs coomponent</div>
      <TextBox type='text' value={message} onChange={handleInputChange} placeholder='Enter alphanumeric characters' />
    </>
  );
}

export default Blogs;
