import { TestBed } from '@angular/core/testing';

import { BusinessTutorGuard } from './business-tutor.guard';

describe('BusinessTutorGuard', () => {
  let guard: BusinessTutorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BusinessTutorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
