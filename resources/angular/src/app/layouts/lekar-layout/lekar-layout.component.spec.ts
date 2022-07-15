import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarLayoutComponent } from './lekar-layout.component';

describe('LekarLayoutComponent', () => {
  let component: LekarLayoutComponent;
  let fixture: ComponentFixture<LekarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LekarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
