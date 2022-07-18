import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarskiPregledFormComponent } from './lekarski-pregled-form.component';

describe('LekarskiPregledFormComponent', () => {
  let component: LekarskiPregledFormComponent;
  let fixture: ComponentFixture<LekarskiPregledFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarskiPregledFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LekarskiPregledFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
