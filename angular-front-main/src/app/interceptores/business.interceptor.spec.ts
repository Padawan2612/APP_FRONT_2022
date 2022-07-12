import { TestBed } from '@angular/core/testing';

import { BusinessInterceptor } from './business.interceptor';

describe('BusinessInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BusinessInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BusinessInterceptor = TestBed.inject(BusinessInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
