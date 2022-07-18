import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledIndexComponent } from './pregled-index.component';

describe('PregledIndexComponent', () => {
  let component: PregledIndexComponent;
  let fixture: ComponentFixture<PregledIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
