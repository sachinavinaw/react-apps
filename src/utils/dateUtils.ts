import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

export const formatDateOrBlank = (dateString: string, format: string): string => {
  if (isValidDate(dateString, format)) {
    return dayjs(dateString).format(format);
  }
  return '';
};

export const isValidDate = (dateString: string, format: string): boolean => dayjs(dateString, format, true).isValid();
