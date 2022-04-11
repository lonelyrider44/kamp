import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaDatatableComponent } from './oprema-datatable.component';

describe('OpremaDatatableComponent', () => {
  let component: OpremaDatatableComponent;
  let fixture: ComponentFixture<OpremaDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
