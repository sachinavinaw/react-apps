import React, { useReducer } from 'react';
import { TableRow } from './ReducerTypes';
import reducer from './reducer/reducer';
import { Wrapper, Table, THead, TBody, Button } from './styles/ExReducerStyles';
import { getRandomNumber, getRandomIndianName } from './helper';

// Define the initial state for the table
const initialTableState: TableRow[] = [];

function ExReducer() {
  const [tableRows, dispatch] = useReducer(reducer, initialTableState);

  const handleAddRow = () => {
    // Generate a unique ID for the new row (you can use any preferred method)
    const newRowId = Date.now();
    const newRow: TableRow = {
      id: newRowId,
      name: getRandomIndianName(),
      age: getRandomNumber(1, 100),
      // Add other properties as needed
    };
    dispatch({ type: 'ADD_ROW', payload: newRow });
  };

  const handleRemoveRow = (id: number) => {
    dispatch({ type: 'REMOVE_ROW', payload: id });
  };

  const handleClearState = () => {
    dispatch({ type: 'CLEAR_STATE' });
  };
  return (
    <div>
      <Button onClick={handleAddRow} className='success'>
        Add Row
      </Button>
      <Button onClick={handleClearState} className='secondary'>
        Clear State
      </Button>

      <Wrapper>
        <Table>
          <THead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              {/* Add other headers as needed */}
              <th>Actions</th>
            </tr>
          </THead>
          <TBody>
            {tableRows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                {/* Add other cells as needed */}
                <td>
                  <Button onClick={() => handleRemoveRow(row.id)} className='danger'>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </TBody>
        </Table>
      </Wrapper>
    </div>
  );
}

export default ExReducer;
