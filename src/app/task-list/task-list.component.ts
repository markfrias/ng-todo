import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskItemComponent } from '../task-item/task-item.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TaskItemComponent, MatListModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  constructor( ) {}
  @Input() taskList: any;
}
