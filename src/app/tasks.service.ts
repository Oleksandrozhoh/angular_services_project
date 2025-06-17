import { Injectable, signal } from '@angular/core';
import { Task } from './tasks/task.model';

@Injectable({
  providedIn: 'root' // where the service is available // other scopes: 'any', 'platform'
})
export class TasksService {

  private tasks = signal<Task[]>([]);

  addTask(taskData: {title: string, description: string}): void {
    const newTask: Task = {
      id: Math.random().toString(),
      title: taskData.title,
      description: taskData.description,
      status: 'OPEN'
    }
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  getTasks(): Task[] {
    return this.tasks();
  }

  deleteTask(task: Task): void {
    this.tasks.set(this.tasks().filter(each => each.id !== task.id));
  }

  updateTaskStatus(taskId: string, status: 'OPEN' | 'IN_PROGRESS' | 'DONE'): void {
    const updatedTaskList: Task[] = this.tasks().map(task => {
    if (task.id === taskId) {
      return { ...task, status };
    }
    return task;
  });

    this.tasks.set(updatedTaskList);
  }
}
