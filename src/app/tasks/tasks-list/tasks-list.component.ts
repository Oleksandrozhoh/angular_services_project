import { Component, inject, signal, computed, Signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
//import { TasksService } from '../../tasks.service';
import { Task, TASK_STATUS_OPTIONS, TaskStatusOptions } from '../task.model';
import { TaskServiceToken } from '../../../main';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [{provide: TASK_STATUS_OPTIONS, useValue: TaskStatusOptions}]
})
export class TasksListComponent {

  taskService = inject(TaskServiceToken);
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  selectedFilter = signal<string>('all');

  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'all':
        return this.taskService.allTasks();
      case 'open':
        return this.taskService.allTasks().filter(task => task.status === 'OPEN');
      case 'done':
        return this.taskService.allTasks().filter(task => task.status === 'DONE');
      case 'in-progress':
        return this.taskService.allTasks().filter(task => task.status === 'IN_PROGRESS');
      default:
        return this.taskService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
