import styled from 'styled-components';
export const Wrapper = styled.div`
  border: 1px solid #ccc;
  display: flex;
  height: 200px;
  overflow: auto;
  width: auto;
  trtd: (first-child) {
    border: 0;
  }
`;
export const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  font-size: 12px;
  text-align: left;
`;

export const THead = styled.thead`
  position: sticky;
  top: -1px;
  tr th {
    background: blue;
    border: 1px solid #ccc;
    color: #fff;
    padding: 10px 15px;
  }

  th input[type='checkbox'] {
    margin: 0 auto;
    display: block;
  }
`;

export const TBody = styled.tbody`
  overflow: auto;
  tr td {
    border: 1px solid #ccc;
    padding: 10px 15px;
  }

  td input[type='checkbox'] {
    margin: 0 auto;
    display: block;
  }
`;

export const PaginateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
