import { z } from 'zod';
import REGEX from './Regex';
import { fieldNotNumbers, maximumDigit, requiredField } from './messages';

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
    const { era, year, month, day } = arg;
    if (era !== '') {
      if (year === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: requiredField('年'),
          path: ['year'],
        });
      } else if (month === '') {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: requiredField('月'),
          path: ['month'],
        });
      } else if (day === '') {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: requiredField('日'),
          path: ['day'],
        });
      }
    }
  });
export default japaneseDateSchema;
