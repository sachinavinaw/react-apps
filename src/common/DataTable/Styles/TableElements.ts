import styled from 'styled-components';
import Colors from '../../global/Color';
export const Wrapper = styled.div`
  border: 1px solid #ccc;
  height: 350px;
  overflow: auto;
  width: auto;
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
    background: ${Colors.Blue};
    border: 1px solid #ccc;
    color: #fff;
    padding: 5px 10px;
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
    padding: 5px 10px;
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
