import { Era } from '../../../example/JapaneseCalendar/constants/Calendar';
import EraDetails from '../types';

const JaCalendar: EraDetails[] = [
  {
    era: Era.Showa,
    startDate: '1926/12/25',
    endDate: '1989/07/01',
    reign: {
      min: 1,
      max: 63,
    },
  },
  {
    era: Era.Heisei,
    startDate: '1989/01/08',
    endDate: '2019/04/30',
    reign: {
      min: 1,
      max: 31,
    },
  },
  {
    era: Era.Reiwa,
    startDate: '2019/05/01',
    endDate: '',
    reign: {
      min: 1,
      max: 0,
    },
  },
];

const getEraDetails = (era: Era) => {
  return JaCalendar.filter((c) => c.era === era);
};

export default getEraDetails;
