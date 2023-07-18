import { useState } from 'react';
import DataTable from '../../common/DataTable/DataTale';
import columns from './columns';
import { ExtToDo, ToDo } from './ItemTypes';
import { FAKE_API } from '../Settings';
import { useMutation } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';
import { TBody, THead } from '../../common/DataTable/Styles/TableElements';

const StyledDataTable = styled(DataTable)`
  ${TBody} {
    td:nth-child(3) {
      border: 1px solid red;
      padding: 15px 10px;
    }
  }
` as typeof DataTable;

function ReactDataTable() {
  const [selectedRows, setSelectedRows] = useState<ToDo[]>([]);
  const [tableData, setTableData] = useState<ExtToDo[]>([]);

  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await axios.get<ToDo[]>(`${FAKE_API}/todos`);
      return response.data;
    },
    onSuccess: (res) => {
      const rows = res.map((row: ToDo) => {
        return {
          ...row,
          onBlur: () => {},
        } as ExtToDo;
      });
      setTableData(rows);
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });

  const handleButtonClick = async () => {
    mutate();
  };

  return (
    <>
      <label>This is a basic React Datatable!!</label>
      <button onClick={handleButtonClick}>Load Data</button>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <StyledDataTable
          data={tableData || []}
          columns={columns}
          showNavigation
          checkbox
          selectedRows={setSelectedRows}
        />
      </div>
      <pre>{JSON.stringify(selectedRows)}</pre>
    </>
  );
}

export default ReactDataTable;
