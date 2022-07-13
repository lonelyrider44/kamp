import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaUcesniciDatatableComponent } from './oprema-ucesnici-datatable.component';

describe('OpremaUcesniciDatatableComponent', () => {
  let component: OpremaUcesniciDatatableComponent;
  let fixture: ComponentFixture<OpremaUcesniciDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaUcesniciDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaUcesniciDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
