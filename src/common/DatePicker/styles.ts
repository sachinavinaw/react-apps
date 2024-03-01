import styled from 'styled-components';
import Colors from '../global/Color';

export const DatePickerContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  min-height: 40px;
`;
export const DateInput = styled.input`
  width: 200px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 4px;
`;

export const MaskedDateInput = styled.input`
  position: relative;
  width: 200px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 4px;
`;
export const CalendarPickerBtn = styled.button`
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
