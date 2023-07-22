import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../common/global/Color';

const ErrorMessage = styled.span`
  color: ${Colors.Red};
  font-size: 10px;
`;
const StyledTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  resize: none;
  &.error {
    border: 1px solid ${Colors.Red};
    outline: none;
  }
`;
type TextAreaProps = {
  defaultValue?: string;
  onChange: (newValue: string) => void;
};

const TextArea = ({ defaultValue, onChange }: TextAreaProps) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const handleTextAreaBlur = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    onChange(value);
    setIsEmpty(value.trim() === '');
  };

  return (
    <div>
      <StyledTextArea
        defaultValue={defaultValue}
        onBlur={handleTextAreaBlur}
        rows={5}
        className={isEmpty ? 'error' : ''}
        style={{ width: 180 }}
      />
      {isEmpty && <ErrorMessage>This field is required.</ErrorMessage>}
    </div>
  );
};

export default TextArea;
