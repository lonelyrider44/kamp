import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaPregledDatatableComponent } from './prijava-pregled-datatable.component';

describe('PrijavaPregledDatatableComponent', () => {
  let component: PrijavaPregledDatatableComponent;
  let fixture: ComponentFixture<PrijavaPregledDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavaPregledDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavaPregledDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
