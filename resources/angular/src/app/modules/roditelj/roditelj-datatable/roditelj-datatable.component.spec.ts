import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljDatatableComponent } from './roditelj-datatable.component';

describe('RoditeljDatatableComponent', () => {
  let component: RoditeljDatatableComponent;
  let fixture: ComponentFixture<RoditeljDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoditeljDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
