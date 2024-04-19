import { Injectable } from '@angular/core';
import { LocalTaskService } from '../local-task/local-task.service';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskIdGeneratorServiceService {

  constructor(private localTaskService: LocalTaskService) { }

  generateTaskId(): number {
    let tasks: Task[] = this.localTaskService.getTasksFromStorage();

    if (tasks?.length > 0) {
      let lastTaskId = tasks[tasks.length - 1].id;
      return lastTaskId + 1;

    }
    return 0;


  }
	
}
