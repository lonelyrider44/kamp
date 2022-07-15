import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarFormComponent } from './lekar-form.component';

describe('LekarFormComponent', () => {
  let component: LekarFormComponent;
  let fixture: ComponentFixture<LekarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LekarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
