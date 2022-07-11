import { TestBed } from '@angular/core/testing';

import { SchoolPeriodsInterceptor } from './school-periods.interceptor';

describe('SchoolPeriodsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SchoolPeriodsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SchoolPeriodsInterceptor = TestBed.inject(SchoolPeriodsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
