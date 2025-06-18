import { InjectionToken } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}


 type TaskStatusOptions = {
  value: string,
  taskStatus: string,
  text: string
}[];

export const TaskStatusOptions: TaskStatusOptions = [
  {value: 'open', taskStatus: 'OPEN', text: 'Open'},
  {value: 'in-progress', taskStatus: 'IN_PROGRESS', text: 'In Progress'},
  {value: 'done', taskStatus: 'DONE', text: 'Done'},
];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>('taskStatusOptions');
