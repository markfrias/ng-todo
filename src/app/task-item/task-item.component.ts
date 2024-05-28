import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { LocalTaskService } from '../services/local-task/local-task.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatCheckboxModule, MatButtonModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {
  
  constructor(private localTaskService: LocalTaskService, private snackbarService: MatSnackBar) {}

  ngOnInit(): void {
    this.localTaskService.getTasksFromStorage();
  }
  
  @Input() task: Task = new Task('', false, 1);
  @Output() deletedTaskEvent = new EventEmitter<number>();
  @Output() checkBoxChangeEvent = new EventEmitter<number>();


  onChange(id: number) {
    this.checkBoxChangeEvent.emit(id);
    this.localTaskService.changeTaskStatusInStorage(id);
  }

  onDelete(id: number) {
    this.localTaskService.removeTaskFromStorage(id);
    this.deletedTaskEvent.emit(id)
    this.snackbarService.open('Task has been removed.', 'Okay', {duration: 1000});

    // Add undo?
  }
}
