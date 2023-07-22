import { ColumnDef } from '@tanstack/react-table';
import { ExtToDo } from './ItemTypes';
import Span from '../../common/DataTable/components/UIComponents/Span';
import TextArea from './TextArea';

const columns: ColumnDef<ExtToDo>[] = [
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
  {
    id: 'edit',
    header: 'Details',
    size: 180,
    cell: (row) => (
      <TextArea defaultValue={row.row.original.title} onChange={(value) => (row.row.original.title = value)} />
    ),
    meta: {
      type: 'text',
    },
  },
];

export default columns;
