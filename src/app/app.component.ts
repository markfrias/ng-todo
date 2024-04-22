import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from './models/task.model';
import { LocalTaskService } from './services/local-task/local-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder, private localTaskService: LocalTaskService) {}

  ngOnInit(): void {
    this.taskList = this.localTaskService.getTasksFromStorage();
  }

  title = 'ng-todo';
  taskList = [
    new Task('Eat dinner', false, (Math.trunc(Math.random() * 100)))
  ];

  addNewTask(newTask: Task): void {
    this.taskList.push(newTask);
  }

  removeTask(id: number) {
    this.taskList = this.taskList.filter((task,idx) => task.id !== id)
  }

  changeCheckBoxValue(id: number) {
        // Get task
        if (this.taskList.length > 0) {
          let task = this.taskList.find((selectedTask => selectedTask?.id === id));

          // Find the task index
          let taskIndex = this.taskList.findIndex((selectedTask => selectedTask?.id === id));
    
          if (task) {
            // Modify task
            const modifiedTask = {...task, isCompleted: !task?.isCompleted }
            
            // Assign modified task to array index item
            this.taskList[taskIndex] = modifiedTask;
          }
          
        }
  }
}
