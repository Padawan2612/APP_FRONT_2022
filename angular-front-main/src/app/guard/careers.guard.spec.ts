import { TestBed } from '@angular/core/testing';

import { CareersGuard } from './careers.guard';

describe('CareersGuard', () => {
  let guard: CareersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CareersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
