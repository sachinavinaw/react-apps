export const maximumDigit = (field: string, value: string): string => {
  return `${field} cannot contain more than ${value} characters.`;
};

export const fieldNotNumbers = (field: string, start: string, end: string): string => {
  return `${field} should only be numbers between ${start} and ${end}.`;
};

export const validDate = (): string => {
  return `年月日の指定が正しくありません。\n以下の何れかの形式で指定して下さい。\nYYYY\nYYYYMM\nYYYYMMDD\n(YYYY=年、MM=月、DD=日)`;
};

export const requiredField = (field: string): string => {
  return `${field} cannot be blank.`;
};
