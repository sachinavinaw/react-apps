import React from 'react';
import styled from 'styled-components';
import Colors from '../global/Color';

const Wrapper = styled.div`
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${Colors.Yellow};
  padding: 2rem;
  width: 40%;
`;

function NoPage() {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>Page Not Found</h3>
    </Wrapper>
  );
}

export default NoPage;
