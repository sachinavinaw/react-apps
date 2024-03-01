import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Color } from '../../example/JapaneseCalendar/constants/Colors';
import { ArrowDropDown } from '@mui/icons-material';

type Suggestion = {
  key: string;
  value: string;
};

type TextInputWithSuggestionProps = {
  id: string;
  suggestion: Suggestion[];
  width?: number;
  maxLength?: number;
};

function TextInputWithSuggestion({ id, suggestion, width, maxLength }: TextInputWithSuggestionProps) {
  const [value, setValue] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [helpList, setHelpList] = useState<Suggestion[]>([]);
  const [error, setError] = useState(false);
  const handleChange = (text: string) => {
    setExpanded(true);
    setValue(text);

    if (text === '') {
      setHelpList(suggestion);
    } else {
      const result = suggestion.filter((s) => s.value.includes(text));
      setError(result.length === 0);
      setHelpList(result);
      setExpanded(false);
    }
  };

  const handleSuggestionClick = (selected: string) => {
    setValue(selected);
    setExpanded(false);
  };

  const handleHelpToggle = () => {
    if (value === '') {
      setHelpList(suggestion);
    }

    setExpanded(!expanded);
  };
  return (
    <Container width={width}>
      <TextFieldContainer>
        <TextField
          type='text'
          name={id}
          onChange={(e) => handleChange(e.target.value)}
          value={value}
          maxLength={maxLength}
          error={error}
        />
        <ToggleButton onClick={handleHelpToggle}>
          <ArrowDropDown style={{ scale: '0.85' }} />
        </ToggleButton>
      </TextFieldContainer>

      <SuggestionList isVisible={expanded}>
        <ul>
          {helpList.map((s) => (
            <li key={s.key} onClick={() => handleSuggestionClick(s.key)}>
              {s.value}
            </li>
          ))}
        </ul>
      </SuggestionList>
    </Container>
  );
}

export default TextInputWithSuggestion;

const Container = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
`;

const SuggestionList = styled.div<{ isVisible: boolean }>`
  max-height: 120px;
  overflow-y: scroll;
  border: 1px solid ${Color.Grey200};
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ul {
    padding-left: 0px;
  }
  ul > li {
    list-style: none;
    text-align: right;
    padding: 5px;
  }

  ul > li:hover {
    cursor: pointer;
    color: ${Color.White};
    background: ${Color.Ocean300};
  }
`;

const TextFieldContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TextField = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 32px;
  padding: 0.375rem 0.75rem;
  padding-right: 20px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid ${Color.Grey400};
  border-color: ${({ error }) => (error ? `${Color.Red}` : `${Color.Grey400}`)};
  background-color: ${({ error }) => (error ? `${Color.Red200}` : 'default')};
  border-radius: 4px;
  display: inline-block;

  &:focus {
    outline-color: ${({ error }) => (error ? `${Color.Red}` : 'default')};
    background-color: ${({ error }) => (error ? `${Color.Red200}` : 'default')};
  }
`;

const ToggleButton = styled.span`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  cursor: pointer;
`;
