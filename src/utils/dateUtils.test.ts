import { formatDateOrBlank } from './dateUtils';

describe('formatDateOrBlank', () => {
  const validDateCases = [
    ['2022-01-01', 'YYYY-MM-DD', '2022-01-01'],
    ['2022/01/01', 'YYYY/MM/DD', '01/01/2022'],
    // Add more valid date cases as needed
  ];

  const invalidDateCases = [
    ['invalid-date', 'YYYY-MM-DD'],
    ['2022-01-01', 'invalid-format'],
    // Add more invalid date cases as needed
  ];

  it.each(validDateCases)('returns formatted date for valid input (%s, %s)', (dateString, format, expected) => {
    expect(formatDateOrBlank(dateString, format)).toBe(expected);
  });

  it.each(invalidDateCases)('returns empty string for invalid input (%s, %s)', (dateString, format) => {
    expect(formatDateOrBlank(dateString, format)).toBe('');
  });
});
