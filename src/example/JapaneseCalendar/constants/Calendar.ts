export enum Era {
  Showa = '3',
  Heisei = '4',
  Reiwa = '5',
  Default = '',
}

export const InitialDateEra = { era: '', year: '', month: '', day: '' };

export const eraOptions = [
  { label: '', value: '', key: '0' },
  { label: '昭和', value: Era.Showa, key: '1' },
  { label: '平成', value: Era.Heisei, key: '2' },
  { label: '令和', value: Era.Reiwa, key: '3' },
];

export type CalendarEntry = {
  startDate: string;
  endDate: string;
  reign: {
    min: number;
    max: number;
  };
};
