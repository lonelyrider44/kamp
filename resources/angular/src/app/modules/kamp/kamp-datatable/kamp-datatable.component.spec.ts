import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KampDatatableComponent } from './kamp-datatable.component';

describe('KampDatatableComponent', () => {
  let component: KampDatatableComponent;
  let fixture: ComponentFixture<KampDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KampDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KampDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
