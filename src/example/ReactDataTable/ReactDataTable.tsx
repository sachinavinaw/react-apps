import { useEffect, useState } from 'react';
import DataTable from '../../common/DataTable/DataTale';
import columns from './columns';
import { ExtToDo, ToDo } from './ItemTypes';
import { FAKE_API } from '../Settings';
import { useMutation } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';
import { TBody } from '../../common/DataTable/Styles/TableElements';
import { Button } from '../../common/layout/styles/Common';

const StyledDataTable = styled(DataTable)`
  ${TBody} {
    background: red;
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
          onClick: () => {},
        } as ExtToDo;
      });
      setTableData(rows);
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <>
      <div>
        <label>This is a basic React Datatable!!</label>
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
      </div>
    </>
  );
}

export default ReactDataTable;
