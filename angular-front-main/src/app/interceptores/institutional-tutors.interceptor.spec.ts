import { TestBed } from '@angular/core/testing';

import { InstitutionalTutorsInterceptor } from './institutional-tutors.interceptor';

describe('InstitutionalTutorsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InstitutionalTutorsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InstitutionalTutorsInterceptor = TestBed.inject(InstitutionalTutorsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
