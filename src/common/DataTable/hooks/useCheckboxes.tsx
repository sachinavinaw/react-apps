import { ColumnDef } from '@tanstack/react-table';
import IndeterminateCheckbox from '../components/IndeterminateCheckbox';

type CheckboxProps<T extends object> = {
  checkbox: boolean;
  columns: ColumnDef<T, any>[];
};

const useCheckboxes = <T extends object>({ checkbox, columns }: CheckboxProps<T>) => {
  if (checkbox) {
    columns = [
      {
        id: 'select',
        size: 25,
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      ...columns,
    ];

    return columns as ColumnDef<T, any>[];
  } else return columns;
};

export default useCheckboxes;
