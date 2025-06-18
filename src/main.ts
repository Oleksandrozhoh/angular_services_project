import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks.service';

// custom injection token example
import { InjectionToken } from '@angular/core';
export const TaskServiceToken = new InjectionToken<TasksService>('task-service-token');

// bootstrapApplication(AppComponent, {
//     providers: [TasksService]
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
    providers: [{ provide: TaskServiceToken, useClass: TasksService }]
}).catch((err) => console.error(err));

