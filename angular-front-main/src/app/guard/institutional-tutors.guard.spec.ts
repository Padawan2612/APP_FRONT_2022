import { TestBed } from '@angular/core/testing';

import { InstitutionalTutorsGuard } from './institutional-tutors.guard';

describe('InstitutionalTutorsGuard', () => {
  let guard: InstitutionalTutorsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InstitutionalTutorsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
