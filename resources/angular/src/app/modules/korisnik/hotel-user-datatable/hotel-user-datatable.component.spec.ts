import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelUserDatatableComponent } from './hotel-user-datatable.component';

describe('HotelUserDatatableComponent', () => {
  let component: HotelUserDatatableComponent;
  let fixture: ComponentFixture<HotelUserDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelUserDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelUserDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
