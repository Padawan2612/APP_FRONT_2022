import { TestBed } from '@angular/core/testing';

import { SchoolPeriodsGuard } from './school-periods.guard';

describe('SchoolPeriodsGuard', () => {
  let guard: SchoolPeriodsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SchoolPeriodsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
