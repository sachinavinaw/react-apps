import { Era } from '../../example/JapaneseCalendar/constants/Calendar';

type Reign = {
  min: number;
  max?: number;
};

type EraDetails = {
  era: Era;
  startDate: string;
  endDate?: string;
  reign: Reign;
};

export default EraDetails;
