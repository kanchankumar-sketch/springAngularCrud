import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycComponent } from './myc.component';

describe('MycComponent', () => {
  let component: MycComponent;
  let fixture: ComponentFixture<MycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
