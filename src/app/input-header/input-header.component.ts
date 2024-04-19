import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { Task } from '../models/task.model';
import { FormsModule } from '@angular/forms';
import { LocalTaskService } from '../services/local-task/local-task.service';
import { TaskIdGeneratorServiceService } from '../services/task-id-generator-service/task-id-generator-service.service';


@Component({
  selector: 'app-input-header',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './input-header.component.html',
  styleUrl: './input-header.component.scss'
})
export class InputHeaderComponent {
  constructor(private localTaskService: LocalTaskService, private taskIdGeneratorService: TaskIdGeneratorServiceService) {}
  
  onAdd($event: any): void {
    this.addNewTask({...this.model, id: this.taskIdGeneratorService.generateTaskId()});
    this.localTaskService.addTaskToStorage({...this.model, id: this.taskIdGeneratorService.generateTaskId()});
    this.resetForm();
    
  }

  onChange($event: any): void {
    //console.log(this.model)
  }

  onKeyPress($event: any): void {
    if($event.keyCode === 13) {
      this.onAdd($event);
    }
  }

  addNewTask(task: Task): void {
    this.newTaskEvent.emit(task);
  }

  resetForm(): void {
    this.model = {
      taskDescription: '',
      isCompleted: false,
      id: Math.trunc(Math.random() * 100)
    }
  }

  model = new Task('', false, this.taskIdGeneratorService.generateTaskId() );

  @Output() newTaskEvent = new EventEmitter<Task>();
}
