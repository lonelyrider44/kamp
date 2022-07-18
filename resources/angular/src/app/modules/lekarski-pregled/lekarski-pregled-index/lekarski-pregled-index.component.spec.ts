import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarskiPregledIndexComponent } from './lekarski-pregled-index.component';

describe('LekarskiPregledIndexComponent', () => {
  let component: LekarskiPregledIndexComponent;
  let fixture: ComponentFixture<LekarskiPregledIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarskiPregledIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LekarskiPregledIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
