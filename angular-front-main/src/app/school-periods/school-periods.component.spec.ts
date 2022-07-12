import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPeriodsComponent } from './school-periods.component';

describe('SchoolPeriodsComponent', () => {
  let component: SchoolPeriodsComponent;
  let fixture: ComponentFixture<SchoolPeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolPeriodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
