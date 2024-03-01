import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../example/JapaneseCalendar/constants/Colors';

function Calendar() {
  return (
    <Container>
      <Header>
        <span>Calendar</span>
      </Header>
      <MonthContainer>
        <WeekRow />
      </MonthContainer>
    </Container>
  );
}

export default Calendar;

const Container = styled.div`
  width: 300px;
  height: 280px;
  border: 1px solid ${Color.Grey200};
`;

const Header = styled.div`
  height: 60px;
  text-align: center;
  border: 1px solid ${Color.Ocean400};
  background-color: ${Color.Ocean400};
  color: ${Color.White};
`;

const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const WeekRow = styled.div``;
