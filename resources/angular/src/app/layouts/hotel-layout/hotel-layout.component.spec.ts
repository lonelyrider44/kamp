import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelLayoutComponent } from './hotel-layout.component';

describe('HotelLayoutComponent', () => {
  let component: HotelLayoutComponent;
  let fixture: ComponentFixture<HotelLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
