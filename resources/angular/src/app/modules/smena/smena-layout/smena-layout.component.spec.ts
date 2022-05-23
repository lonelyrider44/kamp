import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmenaLayoutComponent } from './smena-layout.component';

describe('SmenaLayoutComponent', () => {
  let component: SmenaLayoutComponent;
  let fixture: ComponentFixture<SmenaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmenaLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmenaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
