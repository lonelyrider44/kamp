import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenerFormComponent } from './trener-form.component';

describe('TrenerFormComponent', () => {
  let component: TrenerFormComponent;
  let fixture: ComponentFixture<TrenerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
