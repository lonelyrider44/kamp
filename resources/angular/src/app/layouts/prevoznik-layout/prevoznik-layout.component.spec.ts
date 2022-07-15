import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevoznikLayoutComponent } from './prevoznik-layout.component';

describe('PrevoznikLayoutComponent', () => {
  let component: PrevoznikLayoutComponent;
  let fixture: ComponentFixture<PrevoznikLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevoznikLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevoznikLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
