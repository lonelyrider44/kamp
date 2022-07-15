import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaUserDatatableComponent } from './oprema-user-datatable.component';

describe('OpremaUserDatatableComponent', () => {
  let component: OpremaUserDatatableComponent;
  let fixture: ComponentFixture<OpremaUserDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaUserDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaUserDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
