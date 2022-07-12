import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTutorComponent } from './business-tutor.component';

describe('BusinessTutorComponent', () => {
  let component: BusinessTutorComponent;
  let fixture: ComponentFixture<BusinessTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
