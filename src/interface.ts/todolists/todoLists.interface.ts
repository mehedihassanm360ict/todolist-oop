export interface ITodoList {
  list_id: number;
  title: string;
  created_at?: Date;
  updated_at?: Date;
}
export interface ITodoListPayload {
  title: string;
}