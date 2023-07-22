import React, { useState, useEffect, useRef } from 'react';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import { Table, THead, TBody, Wrapper } from './Styles/TableElements';
import useCheckboxes from './hooks/useCheckboxes';
import './Styles/table.css';

type ReactTableProps<T extends object> = {
  data: T[];
  columns: ColumnDef<T>[];
  checkbox?: boolean;
  showNavigation?: boolean;
  selectedRows?: React.Dispatch<React.SetStateAction<any>>;
};

const DataTable = <T extends object>({ data, columns, checkbox, showNavigation, selectedRows }: ReactTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  // Ref for the container div to get access to the DOM element
  const tableRef = useRef<HTMLDivElement>(null);
  // State to hold the scroll position
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const cols: ColumnDef<T>[] = useCheckboxes({ checkbox: (checkbox ??= false), columns });

  const table = useReactTable({
    data: data || [],
    columns: cols,
    state: {
      sorting,
      rowSelection,
    },
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
  });

  useEffect(() => {
    if (typeof selectedRows === 'function') {
      const rowData = table.getSelectedRowModel().rows.map((row) => row.original);
      selectedRows(rowData);
    }
  }, [rowSelection]);

  // Example: Scroll to a specific position after the component mounts
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      scrollToPosition(parseInt(savedScrollPosition));
    }
    // scrollToPosition(200); // Replace 200 with the desired scrollTop value
  }, []);
  // Function to scroll the table to a specific scrollTop position
  const scrollToPosition = (scrollTop: number) => {
    if (tableRef.current) {
      tableRef.current.scrollTop = scrollTop;
    }
  };

  // Effect to save the scroll position when it changes
  useEffect(() => {
    if (tableRef.current) {
      // Save the scroll position to local storage
      localStorage.setItem('scrollPosition', String(scrollPosition));
    }
  }, [scrollPosition]);

  // Event handler to update the scroll position when scrolling occurs
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = event.currentTarget;
    setScrollPosition(scrollTop);
  };

  return (
    <>
      <Wrapper ref={tableRef} onScroll={handleScroll}>
        <Table>
          <THead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={header.column.getIsSorted() ? 'desc' : 'asc'}
                    style={{
                      width: header.column.columnDef.size,
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </THead>
          <TBody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} style={{ background: row.getIsSelected() ? '#BCC6CC' : 'inherit' }}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </TBody>
        </Table>
      </Wrapper>
      {showNavigation && (
        <div className='flex items-center gap-2'>
          <button
            className='cursor-pointer rounded border p-1'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className='cursor-pointer rounded border p-1'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            className='cursor-pointer rounded border p-1'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className='cursor-pointer rounded border p-1'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>
          <span className='flex cursor-pointer items-center gap-1'>
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </strong>
          </span>
          <span className='flex items-center gap-1'>
            | Go to page:
            <input
              type='number'
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className='w-16 rounded border p-1'
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default DataTable;
