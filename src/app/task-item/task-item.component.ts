import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { LocalTaskService } from '../services/local-task/local-task.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {
  
  constructor(private localTaskService: LocalTaskService) {}

  ngOnInit(): void {
    this.localTaskService.getTasksFromStorage();
  }
  
  @Input() task: Task = new Task('', false, 1);
  @Output() deletedTaskEvent = new EventEmitter<number>();


  onChange($event: any) {
    //console.log($event)
  }

  onDelete(id: number) {
    this.localTaskService.removeTaskFromStorage(id);
    this.deletedTaskEvent.emit(id)
  }
}
