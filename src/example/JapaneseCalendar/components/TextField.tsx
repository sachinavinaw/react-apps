import { Controller } from 'react-hook-form';
import HelpButton from './HelpButton';

import { Container, ErrorMessage, FormLabel, LabelContainer, TextInput } from './Styles';
import { UseFormReturn } from 'react-hook-form/dist/types';

type TextFieldProps = {
  id: string;
  label: string;
  width?: string;
  maxLength?: number;
  isDisabled?: boolean;
  form: UseFormReturn;
  showHelp?: boolean;
  onHelpClick?: () => void;
};

export default function TextField({
  id,
  label,
  maxLength,
  form,
  showHelp,
  onHelpClick,
  width,
  isDisabled,
}: Readonly<TextFieldProps>) {
  const { formState, control } = form;

  const errorMsg = (formState.errors[id]?.message ?? '') as string;

  function handleChange(value: string): string {
    return value;
  }

  return (
    <Container width={width}>
      <LabelContainer>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        {showHelp && <HelpButton onClick={onHelpClick} />}
      </LabelContainer>

      <Controller
        name={id}
        control={control}
        defaultValue=''
        render={({ field: { value, onChange } }) => (
          <TextInput
            id={id}
            type='text'
            width={width}
            disabled={isDisabled}
            maxLength={maxLength}
            value={value}
            error={errorMsg !== ''}
            onChange={(e) => onChange(handleChange(e.target.value))}
          />
        )}
      />
      <ErrorMessage>{errorMsg}</ErrorMessage>
    </Container>
  );
}
