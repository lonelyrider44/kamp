import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaTreneriDatatableComponent } from './oprema-treneri-datatable.component';

describe('OpremaTreneriDatatableComponent', () => {
  let component: OpremaTreneriDatatableComponent;
  let fixture: ComponentFixture<OpremaTreneriDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaTreneriDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaTreneriDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
