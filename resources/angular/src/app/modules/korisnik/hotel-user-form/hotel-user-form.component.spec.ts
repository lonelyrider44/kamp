import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelUserFormComponent } from './hotel-user-form.component';

describe('HotelUserFormComponent', () => {
  let component: HotelUserFormComponent;
  let fixture: ComponentFixture<HotelUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelUserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
