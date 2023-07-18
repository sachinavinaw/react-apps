import styled from 'styled-components';

const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  resize: none;
  border: 0px !important;

  &:focus {
    outline: none;
    border: 0px !important;
  }
`;

export default TextArea;
