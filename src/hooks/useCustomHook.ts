import { useState } from 'react';

type TableRow = {
  id: number;
  name: string;
  age: number;
};

const useCustomHook = () => {
  const [count, setCount] = useState(0);
  const [selectedRows, setSelectedRows] = useState<TableRow[]>([]);

  const increment = (row: TableRow) => {
    const newState: TableRow[] = [...selectedRows, row];
    setSelectedRows(newState);
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = (id: number) => {
    const newState: TableRow[] = selectedRows.filter((row) => row.id !== id);
    setSelectedRows(newState);
  };
  return { count, selectedRows, increment, decrement };
};

export default useCustomHook;
