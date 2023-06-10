import React, { useEffect, useState } from 'react';
import DataTable from '../../common/DataTable/DataTale';
import columns from './columns';
import { ToDo } from './ItemTypes';
import { FAKE_API } from '../Settings';
import { useMutation } from 'react-query';

function ReactDataTable() {
  const [selectedRows, setSelectedRows] = useState<ToDo[]>([]);
  const [tableData, setTableData] = useState([]);

  const { mutate, isLoading, data } = useMutation(async () => {
    const response = await fetch(`${FAKE_API}/todos`);
    return response.json();
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  return (
    <>
      <label>This is a basic React Datatable!!</label>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <DataTable data={data} columns={columns} showNavigation checkbox />
      </div>
      <pre>{JSON.stringify(selectedRows)}</pre>
    </>
  );
}

export default ReactDataTable;
