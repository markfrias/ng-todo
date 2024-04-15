import { Injectable } from '@angular/core';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class LocalTaskService {

  constructor() { }

  private localStorage = window.localStorage;

  addTaskToStorage(task: Task): void {
    
    //this.localStorage.setItem()
    //return new Task('New task', false, 1)

    // Add item to array
    let tasksArray = this.getTasksFromStorage();
    console.log(tasksArray)
    tasksArray.push(task);

    // Save to localStorage
    this.localStorage.setItem('tasks', JSON.stringify(tasksArray));
    console.log(this.localStorage.getItem('tasks'))
  }

  getTasksFromStorage() {
    let storedTasks = this.localStorage.getItem('tasks');
    if (storedTasks) {
      let convertedTasks = JSON.parse(storedTasks);
      console.log(convertedTasks)
      return convertedTasks;
    } else {
      const array = JSON.stringify([])
      return JSON.parse(array);
    }
    
  }


}
