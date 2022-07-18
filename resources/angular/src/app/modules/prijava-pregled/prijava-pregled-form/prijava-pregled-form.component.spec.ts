import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaPregledFormComponent } from './prijava-pregled-form.component';

describe('PrijavaPregledFormComponent', () => {
  let component: PrijavaPregledFormComponent;
  let fixture: ComponentFixture<PrijavaPregledFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavaPregledFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavaPregledFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
