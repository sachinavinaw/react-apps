import styled from 'styled-components';

export const ListStyle = styled.div`
  max-height: 60vh;
  overflow: scroll;
  border: 1px solid #ddd;
`;

export const List = styled.ul`
  diplay: flex;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 15px 10px;
  list-style: none;
  border: 1px solid #ddd;
`;

export const Loader = styled.p`
  font-size: 14px;
  text-align: center;
  background: aliceblue;
  padding: 15px 0px;
  font-weight: 600;
  font-style: italic;
`;
