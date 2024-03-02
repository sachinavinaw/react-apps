import { Control, Controller } from 'react-hook-form';
import { FormLabel, TextInput } from './Styles';

type DateFieldInputProps = {
  id: string;
  label: string;
  width?: string;
  isDisabled?: boolean;
  control: Control;
  maxLength: number;
  validationRule: RegExp;
  hasError: boolean;
};

const DateFieldInput = ({
  id,
  label,

  isDisabled,
  control,
  maxLength,
  validationRule,
  hasError,
  width = '50px',
}: DateFieldInputProps) => {
  const handleChange = (value: string): string => {
    const newValue = validationRule ? value.replace(validationRule, '') : value;
    return newValue.slice(0, maxLength);
  };

  // console.log(form.formState.errors[id]);
  return (
    <div key={id}>
      <Controller
        name={id}
        control={control}
        defaultValue=''
        render={({ field: { value, onChange } }) => (
          <TextInput
            id={id}
            type='text'
            maxLength={maxLength}
            width={width}
            value={value}
            onChange={(e) => onChange(handleChange(e.target.value))}
            error={hasError}
            disabled={isDisabled}
          />
        )}
      />
      <FormLabel htmlFor={id}>{label}</FormLabel>
    </div>
  );
};

export default DateFieldInput;
