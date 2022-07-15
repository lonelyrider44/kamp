import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevoznikDatatableComponent } from './prevoznik-datatable.component';

describe('PrevoznikDatatableComponent', () => {
  let component: PrevoznikDatatableComponent;
  let fixture: ComponentFixture<PrevoznikDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevoznikDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevoznikDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
