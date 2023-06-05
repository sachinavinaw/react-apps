import React from 'react';
import styled from 'styled-components';

const SSpan = styled.span`
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 2px;
`;

type SpanProps = {
  text: string;
};
const Span: React.FC<SpanProps> = ({ text }) => {
  return <SSpan>{text}</SSpan>;
};

export default Span;
