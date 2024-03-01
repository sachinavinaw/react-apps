import React, { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import { Color } from '../../../example/JapaneseCalendar/constants/Colors';

type DatePickerProps<T> = {
  name: string;
  id: string;
  label: string;
  maxLength: number;
  data: T;
};

function DatePicker<T>({ name, id, label, maxLength, data }: DatePickerProps<T>) {
  const [value, setValues] = useState('');
  const handleChange = (val: string) => {
    console.log(val);
  };

  return (
    <div key={id}>
      <TextInput type='text' name={name} id={id} onChange={(e) => handleChange(e.target.value)} maxLength={maxLength} />
      <Text>{label}</Text>
    </div>
  );
}

export default DatePicker;

const TextInput = styled.input`
  height: 35px;
  width: 60px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid ${Color.Grey400};
  border-radius: 4px;
`;

const Text = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
