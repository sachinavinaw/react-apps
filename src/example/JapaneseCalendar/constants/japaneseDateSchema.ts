import { z } from 'zod';
import REGEX from './Regex';
import { fieldNotNumbers, maximumDigit, requiredField } from './messages';
import { CalendarEntry, Era } from './Calendar';

const JaCalendar: Record<Era, CalendarEntry> = {
  [Era.Showa]: {
    startDate: '1926/12/25',
    endDate: '1989/07/01',
    reign: {
      min: 1,
      max: 63,
    },
  },
  [Era.Heisei]: {
    startDate: '1989/01/08',
    endDate: '2019/04/30',
    reign: {
      min: 1,
      max: 31,
    },
  },
  [Era.Reiwa]: {
    startDate: '2019/05/01',
    endDate: '',
    reign: {
      min: 1,
      max: 0,
    },
  },
  [Era.Default]: {
    startDate: '',
    endDate: '',
    reign: {
      min: 0,
      max: 0,
    },
  },
};

const japaneseDateSchema = z
  .object({
    era: z.string().optional(),
    year: z
      .string()
      .regex(REGEX.NUMBERS_OR_EMPTY, { message: fieldNotNumbers('年', '1', '99') })
      .max(2, { message: maximumDigit('年', '2') })
      .optional(),
    month: z
      .string()
      .regex(REGEX.VALID_MONTH_OR_EMPTY, { message: fieldNotNumbers('月', '1', '12') })
      .max(2, { message: maximumDigit('月', '2') })
      .optional(),
    day: z
      .string()
      .regex(REGEX.VALID_DAY_OR_EMPTY, { message: fieldNotNumbers('日', '1', '31') })
      .max(2, { message: maximumDigit('日', '2') })
      .optional(),
  })
  .superRefine((arg, ctx) => {
    console.log('In superRefine()');
    const { era, year, month, day } = arg;

    // Reset year, month, and day if era is blank
    if (era === '') {
      return true;
    }

    // Validate year, month, and day if era is not blank

    const isEmpty = year && month && day;

    if (!isEmpty) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: requiredField('年/月/日'),
        path: ['year'],
      });

      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: requiredField('年/月/日'),
        path: ['month'],
      });

      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: requiredField('年/月/日'),
        path: ['day'],
      });
    }

    if (year && isInvalidYear(era as Era, Number(year))) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid year range in year field', //requiredField('年'),
        path: ['year'],
      });
    }

    if (month === '') {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: requiredField('月'),
        path: ['month'],
      });
    }

    if (day === '') {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: requiredField('日'),
        path: ['day'],
      });
    }
  });

const isInvalidYear = (era: Era, year: number): boolean => {
  const { min, max } = JaCalendar[era].reign;
  return year < min || year > max;
};

export default japaneseDateSchema;
