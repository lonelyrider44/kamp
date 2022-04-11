import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcesnikDtComponent } from './ucesnik-dt.component';

describe('UcesnikDtComponent', () => {
  let component: UcesnikDtComponent;
  let fixture: ComponentFixture<UcesnikDtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcesnikDtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcesnikDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
