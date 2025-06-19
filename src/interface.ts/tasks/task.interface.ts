export interface Task {
  task_id: number;
  list_id: number;
  description: string | null; // Text can be null
  is_complete: boolean;
  due_date: Date | null; // Date can be optional/null
  priority: 'low' | 'medium' | 'high';
  created_at: Date;
  updated_at: Date;
}