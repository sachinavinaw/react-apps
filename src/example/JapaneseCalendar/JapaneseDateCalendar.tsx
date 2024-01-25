import { Controller, UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import { eraOptions } from './constants/Calendar';
import HelpButton from './components/HelpButton';
import REGEX from './constants/Regex';
import { DropDown, ErrorMessage, FormLabel, TextInput } from './components/Styles';

type JapaneseDateCalendarProps = {
  id: string;
  label: string;
  width?: string;
  isDisabled?: boolean;
  form: UseFormReturn;
  showHelp?: boolean;
  onHelpClick?: () => void;
};

const validationRule: RegExp = REGEX.NOT_NUMBERS;
const maxLength = 2;

const calendarElements = [
  { name: 'birthDate.year', id: 'year', label: '年', width: '50px', maxLength: 2 },
  { name: 'birthDate.month', id: 'month', label: '月', width: '50px', maxLength: 2 },
  { name: 'birthDate.day', id: 'day', label: '日', width: '50px', maxLength: 2 },
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
    setValue,
    register,
    formState: { errors },
  } = form;

  // Extract error message and ref for birthDate field
  const errorObject: any = errors;

  function handleChange(value: string): string {
    const newValue = validationRule ? value.replace(validationRule, '') : value;
    return newValue.slice(0, maxLength);
  }

  const handleEraChange = (value: string): string => {
    if (value === '') {
      setValue('birthDate', {
        era: value,
        year: '',
        month: '',
        day: '',
      });
    }
    return value;
  };

  const showErrorMessage = (): string => {
    const birthDateErrors = errorObject?.birthDate;

    if (birthDateErrors) {
      if (birthDateErrors.year) return birthDateErrors.year.message;
      if (birthDateErrors.month) return birthDateErrors.month.message;
      if (birthDateErrors.day) return birthDateErrors.day.message;
    }

    return '';
  };
  return (
    <Calendar>
      <LabelContainer>
        <FormLabel htmlFor='calendar'>{label}</FormLabel>
        {showHelp && <HelpButton onClick={onHelpClick} />}
      </LabelContainer>

      <div id='calendar' className={isDisabled ? 'disabled' : ''}>
        <DropDown
          id={id}
          {...register('birthDate.era', {
            onChange: (e) => handleEraChange(e.target.value),
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
            const hasError = (errorObject?.birthDate && errorObject?.birthDate[element.id]) || false;
            return (
              <div key={element.name}>
                <Controller
                  name={element.name}
                  control={control}
                  defaultValue=''
                  render={({ field: { value, onChange } }) => (
                    <TextInput
                      id={element.id}
                      type='text'
                      maxLength={element.maxLength}
                      width={element.width}
                      disabled={isDisabled}
                      value={value}
                      onChange={(e) => onChange(handleChange(e.target.value))}
                      error={hasError}
                    />
                  )}
                />

                <FormLabel htmlFor='year'>{element.label}</FormLabel>
              </div>
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
