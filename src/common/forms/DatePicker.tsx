import React, { ChangeEvent, FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { CalendarToday } from '@mui/icons-material';
import Colors from '../global/Color';
const DatePickerContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 120px;
`;
const DateInput = styled.input`
  width: 200px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 4px;
`;

const MaskedDateInput = styled.input`
  position: relative;
  width: 200px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 4px;
`;
const CalendarPickerBtn = styled.button`
  position: absolute;
  padding: 0.375rem 0.375rem;
  line-height: 1.5;
  position: absolute;
  top: 0;
  right: 1px;
  background-color: ${Colors.DarkBlue};
  border: 0;
  color: ${Colors.White};
`;
type DatePickerProps = {
  value: string;
};

const DatePicker: FC<DatePickerProps> = ({ value }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState<string | undefined>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const showDatePicker = () => {
    inputRef.current?.showPicker();
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDate(inputRef.current?.value);
  };
  return (
    <DatePickerContainer>
      <DateInput type='date' ref={inputRef} hidden />
      <MaskedDateInput type='text' onChange={handleDateChange} value={date} />
      <CalendarPickerBtn type='button' onClick={() => inputRef.current?.showPicker()}>
        <CalendarToday style={{ scale: '0.85' }} />
      </CalendarPickerBtn>
    </DatePickerContainer>
  );
};

export default DatePicker;
