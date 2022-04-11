import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcesnikDatatableComponent } from './ucesnik-datatable.component';

describe('UcesnikDatatableComponent', () => {
  let component: UcesnikDatatableComponent;
  let fixture: ComponentFixture<UcesnikDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcesnikDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcesnikDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
