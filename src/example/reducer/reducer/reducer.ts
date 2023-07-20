import { ActionTypes, TableRow } from '../ReducerTypes';

const reducer = (state: TableRow[], action: ActionTypes): TableRow[] => {
  switch (action.type) {
    case 'ADD_ROW':
      return [...state, action.payload];
    case 'REMOVE_ROW':
      return state.filter((row) => row.id !== action.payload);
    case 'CLEAR_STATE':
      return [];
    default:
      return state;
  }
};

export default reducer;
