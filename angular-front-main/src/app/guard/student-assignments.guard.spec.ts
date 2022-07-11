import { TestBed } from '@angular/core/testing';

import { StudentAssignmentsGuard } from './student-assignments.guard';

describe('StudentAssignmentsGuard', () => {
  let guard: StudentAssignmentsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentAssignmentsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
