import React, { useState } from 'react';
import { InitialDateEra } from './constants/Calendar';
import japaneseDateSchema from './constants/japaneseDateSchema';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import JapaneseDateCalendar from './JapaneseDateCalendar';
import { Button, FormContainer, FormRow } from './components/Styles';
import TextField from './components/TextField';

type SearchQueryParams = {
  insuredName?: string;
  birthDate: typeof InitialDateEra;
};

const defaultSearchParams = {
  insuredName: '',
  birthDate: InitialDateEra,
};

const requestSchema = z.object({
  insuredName: z.string().max(14, { message: 'Insured name cannot be more than 12 characters' }).optional(),
  birthDate: japaneseDateSchema.optional(),
});

type Request = z.infer<typeof requestSchema>;

function JapaneseCalendar() {
  const [searchQuery, setSearchQuery] = useState<SearchQueryParams>(defaultSearchParams);

  const form = useForm<Request>({
    resolver: zodResolver(requestSchema),
    mode: 'onChange',
    defaultValues: defaultSearchParams,
  });

  const { reset, getValues, handleSubmit } = form;

  const onSubmit: SubmitHandler<Request> = (e) => {
    const search = getValues();

    setSearchQuery({
      insuredName: search.insuredName,
      birthDate: {
        era: search.birthDate?.era ?? '',
        year: search.birthDate?.year ?? '',
        month: search.birthDate?.month ?? '',
        day: search.birthDate?.day ?? '',
      },
    });
  };

  const resetSearch = () => {
    reset();
    setSearchQuery(defaultSearchParams);
  };
  return (
    <div>
      <h1>Japanese Calendar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormRow>
            <TextField id='insuredName' label='生年月日' width={'180px'} form={form} />
            <JapaneseDateCalendar id='birthDate' label='生年月日' form={form} />
          </FormRow>
          <FormRow>
            <Button type='submit'>Search</Button>
            <Button type='button' onClick={resetSearch}>
              Reset
            </Button>
          </FormRow>
          <FormRow>{JSON.stringify(searchQuery)}</FormRow>
        </FormContainer>
      </form>
    </div>
  );
}

export default JapaneseCalendar;
