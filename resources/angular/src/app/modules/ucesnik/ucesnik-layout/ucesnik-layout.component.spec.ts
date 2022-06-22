import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcesnikLayoutComponent } from './ucesnik-layout.component';

describe('UcesnikLayoutComponent', () => {
  let component: UcesnikLayoutComponent;
  let fixture: ComponentFixture<UcesnikLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcesnikLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcesnikLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
