import { TestBed } from '@angular/core/testing';
import { Task } from '../../models/task.model';

import { LocalTaskService } from './local-task.service';

fdescribe('LocalTaskService', () => {
  let service: LocalTaskService;
  let modelData: Task = new Task('Create something', false, 1);
  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the same value passed', () => {
    expect(service.addTaskToStorage(modelData)).toEqual(modelData);
  });
});
