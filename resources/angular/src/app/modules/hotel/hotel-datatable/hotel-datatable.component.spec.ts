import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDatatableComponent } from './hotel-datatable.component';

describe('HotelDatatableComponent', () => {
  let component: HotelDatatableComponent;
  let fixture: ComponentFixture<HotelDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
