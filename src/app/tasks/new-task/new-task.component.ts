import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../tasks.service';
import { TaskServiceToken } from '../../../main';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  private taskService = inject(TaskServiceToken); // inject the service with signals

  // Alternative way to inject the service through the constructor
  // private taskService: TasksService;
  // constructor(tService: TasksService) {
  //   this.taskService = tService;
  // }

  onAddTask(title: string, description: string) {
    this.taskService.addTask({'title': title, 'description': description});
    this.formEl()?.nativeElement.reset();
  }
}
