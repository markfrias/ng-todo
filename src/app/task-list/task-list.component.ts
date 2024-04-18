import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskItemComponent } from '../task-item/task-item.component';
import { MatListModule } from '@angular/material/list';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TaskItemComponent, MatListModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  constructor( ) {}
  @Input() taskList: Task[] = [];
  @Output() removedTaskEvent = new EventEmitter<number>();

  onDeleteEvent(id: number) {
    this.removedTaskEvent.emit(id)
  }
}
