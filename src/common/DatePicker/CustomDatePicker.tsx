import { Era, eraOptions } from '../../example/JapaneseCalendar/constants/Calendar';
import DatePicker from './components/DatePicker';
import styled from 'styled-components';
import { Color } from '../../example/JapaneseCalendar/constants/Colors';
import setCalendarByEra from './helper/setCalendarByEra';
import { useState } from 'react';
import EraDetails from './types';
import getEraDetails from './helper/getEraDetails';

const calendarElements = [
  { name: 'birthDate.year', id: 'year', label: '年', width: '50px', maxLength: 2 },
  { name: 'birthDate.month', id: 'month', label: '月', width: '50px', maxLength: 2 },
  { name: 'birthDate.day', id: 'day', label: '日', width: '50px', maxLength: 2 },
];

function CustomDatePicker() {
  const [data, setData] = useState<EraDetails[]>();

  const handleCalendarClick = (era: Era) => {
    // const calendar = setCalendarByEra(era);
    // console.log(calendar);
    const eraDetails = getEraDetails(era);
    console.log(eraDetails);
    setData(eraDetails);
  };

  return (
    <JapaneseDate>
      <Select onChange={(e) => handleCalendarClick(e.target.value as Era)}>
        {eraOptions.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {calendarElements.map((el) => (
        <DatePicker id={el.id} name={el.name} label={el.label} data={data} key={el.name} maxLength={el.maxLength} />
      ))}
    </JapaneseDate>
  );
}

export default CustomDatePicker;

const JapaneseDate = styled.div`
  display: flex;

  div:not(:first-child) {
    margin-left: 10px;
  }
`;

const Select = styled.select`
  height: 35px;
  width: fit-content;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid ${Color.Grey400};
  border-radius: 4px;
`;
