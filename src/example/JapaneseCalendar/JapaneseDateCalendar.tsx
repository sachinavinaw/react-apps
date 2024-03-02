import { UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import { Era, eraOptions } from './constants/Calendar';
import HelpButton from './components/HelpButton';
import REGEX from './constants/Regex';
import { DropDown, ErrorMessage, FormLabel } from './components/Styles';
import { useState } from 'react';
import DateFieldInput from './components/DateFieldInput';

type JapaneseDateCalendarProps = {
  id: string;
  label: string;
  width?: string;
  isDisabled?: boolean;
  form: UseFormReturn;
  showHelp?: boolean;
  onHelpClick?: () => void;
};

const calendarElements = [
  { name: 'birthDate.year', id: 'year', label: '年', width: '50px', maxLength: 2, validationRule: REGEX.NOT_NUMBERS },
  { name: 'birthDate.month', id: 'month', label: '月', width: '50px', maxLength: 2, validationRule: REGEX.NOT_NUMBERS },
  { name: 'birthDate.day', id: 'day', label: '日', width: '50px', maxLength: 2, validationRule: REGEX.NOT_NUMBERS },
];

export default function JapaneseDateCalendar({
  id,
  label,
  isDisabled,
  width,
  form,
  showHelp,
  onHelpClick,
}: Readonly<JapaneseDateCalendarProps>) {
  const {
    control,
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = form;

  const [showDefault, setShowDefault] = useState(true);

  const errorObject: any = errors;

  const showErrorMessage = (): string => {
    const birthDateErrors = errorObject?.birthDate;

    if (birthDateErrors) {
      if (birthDateErrors.year) return birthDateErrors.year.message;
      if (birthDateErrors.month) return birthDateErrors.month.message;
      if (birthDateErrors.day) return birthDateErrors.day.message;
    }

    return '';
  };

  const handleEraChange = (era: Era) => {
    ['year', 'month', 'day'].forEach((field) => {
      const fieldName = `birthDate.${field}`;
      setValue(fieldName, '');
      clearErrors(fieldName);
    });

    setShowDefault(!era);
  };

  return (
    <Calendar>
      <LabelContainer>
        <FormLabel htmlFor='calendar'>{label}</FormLabel>
        {showHelp && <HelpButton onClick={onHelpClick} />}
      </LabelContainer>

      <div id='calendar'>
        <DropDown
          id={id}
          {...register('birthDate.era', {
            onChange: (e) => handleEraChange(e.target.value as Era),
          })}
        >
          {eraOptions.map((option) => (
            <option value={option.value} key={option.key}>
              {option.label}
            </option>
          ))}
        </DropDown>

        <div>
          {calendarElements.map((element) => {
            const hasError = (errorObject?.birthDate && errorObject?.birthDate[element.id]) ?? false;
            const { name, label, maxLength, validationRule } = element;
            return (
              <DateFieldInput
                control={control}
                id={name}
                label={label}
                maxLength={maxLength}
                validationRule={validationRule}
                hasError={hasError}
                isDisabled={showDefault}
              />
            );
          })}

          <div style={{ display: 'block', marginLeft: '90px' }}>
            <ErrorMessage>{showErrorMessage()}</ErrorMessage>
          </div>
        </div>
      </div>
    </Calendar>
  );
}

const LabelContainer = styled.div`
  padding-bottom: 4px;
`;

const Calendar = styled.div`
  div > div {
    display: inline;
  }

  input {
    margin-left: 10px;
    margin-right: 3px;
  }
`;
