import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarskiPregledDatatableComponent } from './lekarski-pregled-datatable.component';

describe('LekarskiPregledDatatableComponent', () => {
  let component: LekarskiPregledDatatableComponent;
  let fixture: ComponentFixture<LekarskiPregledDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarskiPregledDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LekarskiPregledDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
