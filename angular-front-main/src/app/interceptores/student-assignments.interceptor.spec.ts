import { TestBed } from '@angular/core/testing';

import { StudentAssignmentsInterceptor } from './student-assignments.interceptor';

describe('StudentAssignmentsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StudentAssignmentsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StudentAssignmentsInterceptor = TestBed.inject(StudentAssignmentsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
