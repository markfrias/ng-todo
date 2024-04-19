import { TestBed } from '@angular/core/testing';

import { TaskIdGeneratorServiceService } from './task-id-generator-service.service';

describe('TaskIdGeneratorServiceService', () => {
  let service: TaskIdGeneratorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskIdGeneratorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 when the array is empty', () => {

  });
});
