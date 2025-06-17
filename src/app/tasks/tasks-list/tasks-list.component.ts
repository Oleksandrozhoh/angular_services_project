import { Component, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../../tasks.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  taskService = inject(TasksService);

  selectedFilter = signal<string>('all');
  tasks = signal<Task[]>(this.taskService.getTasks());

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
    if (filter === 'all') {
      this.tasks.set(this.taskService.getTasks());
    }
    if (filter === 'open') {
      this.tasks.set(this.taskService.getTasks().filter(task => task.status === 'OPEN'));
    }
    if (filter === 'done') {
      this.tasks.set(this.taskService.getTasks().filter(task => task.status === 'DONE'));
    }
    if (filter === 'in-progress') {
      this.tasks.set(this.taskService.getTasks().filter(task => task.status === 'IN_PROGRESS'));
    }
  }
}
