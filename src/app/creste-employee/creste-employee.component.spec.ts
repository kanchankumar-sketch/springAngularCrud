import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CresteEmployeeComponent } from './creste-employee.component';

describe('CresteEmployeeComponent', () => {
  let component: CresteEmployeeComponent;
  let fixture: ComponentFixture<CresteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CresteEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CresteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
