import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevoznikFormComponent } from './prevoznik-form.component';

describe('PrevoznikFormComponent', () => {
  let component: PrevoznikFormComponent;
  let fixture: ComponentFixture<PrevoznikFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevoznikFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevoznikFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
