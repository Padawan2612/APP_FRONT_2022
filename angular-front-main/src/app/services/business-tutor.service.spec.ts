import { TestBed } from '@angular/core/testing';

import { BusinessTutorService } from './business-tutor.service';

describe('BusinessTutorService', () => {
  let service: BusinessTutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessTutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
