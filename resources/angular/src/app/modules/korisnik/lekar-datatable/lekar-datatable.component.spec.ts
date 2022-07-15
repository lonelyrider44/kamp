import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarDatatableComponent } from './lekar-datatable.component';

describe('LekarDatatableComponent', () => {
  let component: LekarDatatableComponent;
  let fixture: ComponentFixture<LekarDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LekarDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
