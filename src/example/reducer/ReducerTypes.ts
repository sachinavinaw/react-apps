export type TableRow = {
  id: number;
  name: string;
  age: number;
};
export type AppState = {
  selectedRows: TableRow[];
};

export type ActionTypes =
  | { type: 'ADD_ROW'; payload: TableRow }
  | { type: 'REMOVE_ROW'; payload: number }
  | { type: 'CLEAR_STATE' };
