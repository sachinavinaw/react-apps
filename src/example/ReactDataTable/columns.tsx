import { ColumnDef } from '@tanstack/react-table';
import { ToDo } from './ItemTypes';
import Span from '../../common/DataTable/components/UIComponents/Span';

const columns: ColumnDef<ToDo>[] = [
  {
    accessorFn: (row) => row.id,
    accessorKey: 'id',
    header: 'ID',
    size: 120,
    cell: (row) => row.renderValue(),
    enableSorting: true,
  },
  {
    accessorFn: (row) => row.userId,
    accessorKey: 'userId',
    header: 'User ID',
    size: 120,
    cell: (row) => row.renderValue(),
  },
  {
    accessorFn: (row) => row.title,
    accessorKey: 'title',
    header: 'Title',
    size: 180,
    cell: (row) => row.renderValue(),
  },
  {
    accessorFn: (row) => row.completed,
    accessorKey: 'completed',
    header: 'Completed',
    size: 120,
    cell: (row) => <Span text={row.renderValue() ? 'Completed' : 'pending'} />,
  },
];

export default columns;
