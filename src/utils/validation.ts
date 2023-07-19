export const isAlphanumeric = (input: string): boolean => {
  const alphanumericRegex = /^[a-zA-Z0–9]*$/;
  return alphanumericRegex.test(input);
};

export const fixAlphaNumericOnly = (input: string, maxLength?: number): string => {
  const alphanumericOnly = input.replace(/[^a-zA-Z0-9]/g, '');
  return maxLength ? alphanumericOnly.slice(0, maxLength) : alphanumericOnly;
};
