import React, { useEffect, useMemo, useState } from 'react';
import DataTable from '../../common/DataTable/DataTale';
import columns from './columns';
import { useFetchData } from './hooks/useFetchData';
import { TApiResponse, ToDo } from './ItemTypes';
import { FAKE_API } from '../Settings';
import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const dummyData = () => {
  const items = [];
  for (let i = 0; i < 500; i++) {
    items.push({
      id: i,
      name: `Item ${i}`,
      price: 100,
      quantity: 1,
    });
  }
  return items;
};

function ReactDataTable() {
  const [selectedRows, setSelectedRows] = useState<ToDo[]>([]);
  const [tableData, setTableData] = useState<ToDo[]>([]);
  const memoizedColumns = useMemo(() => columns, []);

  // call to the hook
  const data: TApiResponse = useFetchData(`${FAKE_API}/todos`);
  // Create a QueryClient instance
  const queryClient = new QueryClient();
  const queryKey = 'myData';

  const fetchAPIData = async (): Promise<ToDo> => {
    const apiResponse = await fetch(`${FAKE_API}/todos`);
    const json = await apiResponse.json();
    return json;
  };
  // Use the useQuery hook
  const { data: apiData, isLoading, isError, error } = useQuery<ToDo>(queryKey, fetchAPIData);
  if (apiData) {
    console.log(apiData);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error);
  }

  // print the output
  // if (!data.loading) console.log(data);

  return (
    <>
      <label>This is a basic React Datatable!!</label>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <DataTable
          data={data.data || []}
          columns={memoizedColumns}
          selectedRows={setSelectedRows}
          showNavigation
          checkbox
        />
      </div>
      <pre>{JSON.stringify(selectedRows)}</pre>
    </>
  );
}

export default ReactDataTable;
