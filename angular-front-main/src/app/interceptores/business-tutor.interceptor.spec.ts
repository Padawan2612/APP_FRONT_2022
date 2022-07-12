import { TestBed } from '@angular/core/testing';

import { BusinessTutorInterceptor } from './business-tutor.interceptor';

describe('BusinessTutorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BusinessTutorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BusinessTutorInterceptor = TestBed.inject(BusinessTutorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
