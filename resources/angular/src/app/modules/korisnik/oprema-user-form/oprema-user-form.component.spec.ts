import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaUserFormComponent } from './oprema-user-form.component';

describe('OpremaUserFormComponent', () => {
  let component: OpremaUserFormComponent;
  let fixture: ComponentFixture<OpremaUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaUserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
