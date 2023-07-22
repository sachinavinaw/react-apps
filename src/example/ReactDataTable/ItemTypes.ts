export type Item = {
  name: string;
  price: number;
  quantity: number;
};

export type ToDo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export type ExtToDo = ToDo & {
  onBlur: () => void;
  onClick: () => void;
};

export type TApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};
