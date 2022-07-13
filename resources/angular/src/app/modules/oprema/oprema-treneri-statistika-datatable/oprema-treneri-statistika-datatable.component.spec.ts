import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaTreneriStatistikaDatatableComponent } from './oprema-treneri-statistika-datatable.component';

describe('OpremaTreneriStatistikaDatatableComponent', () => {
  let component: OpremaTreneriStatistikaDatatableComponent;
  let fixture: ComponentFixture<OpremaTreneriStatistikaDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaTreneriStatistikaDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaTreneriStatistikaDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
