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
    tasksArray.push(task);

    // Save to localStorage
    this.localStorage.setItem('tasks', JSON.stringify(tasksArray));
  }

  getTasksFromStorage(): Task[] {
    let storedTasks = this.localStorage.getItem('tasks');
    if (storedTasks) {
      let convertedTasks = JSON.parse(storedTasks);
      return convertedTasks;
    } else {
      const array = JSON.stringify([])
      return JSON.parse(array);
    }
  }

  removeTaskFromStorage(id: number) {
    let tasksArray: Task[] = this.getTasksFromStorage();
    let deletedTask = tasksArray.findIndex(task => this.findById(id, task))
    tasksArray.splice(deletedTask, 1);
    this.localStorage.setItem('tasks', JSON.stringify(tasksArray));
  }

  changeTaskStatusInStorage(id: number) : void {
    // Get tasks
    let tasksArray: Task[] = this.getTasksFromStorage();
    // Get task
    if (tasksArray.length > 0) {
      let task = tasksArray.find((selectedTask => selectedTask?.id === id));
      let taskIndex = tasksArray.findIndex((selectedTask => selectedTask?.id === id));

      if (task) {
        // Modify task
        const modifiedTask = {...task, isCompleted: !task?.isCompleted }
        // Insert task into array
        tasksArray[taskIndex] = modifiedTask;

        // Change task list in storage
        this.localStorage.setItem('tasks', JSON.stringify(tasksArray));
      }
      
    }
    
  }

  findById(number: number, task: Task) {
    if (number === task.id) {
      return true;
    }
    return false
  }


}
