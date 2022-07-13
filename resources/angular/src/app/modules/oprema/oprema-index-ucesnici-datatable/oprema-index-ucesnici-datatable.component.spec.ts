import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaIndexUcesniciDatatableComponent } from './oprema-index-ucesnici-datatable.component';

describe('OpremaIndexUcesniciDatatableComponent', () => {
  let component: OpremaIndexUcesniciDatatableComponent;
  let fixture: ComponentFixture<OpremaIndexUcesniciDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaIndexUcesniciDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaIndexUcesniciDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
