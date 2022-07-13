import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaIndexTreneriDatatableComponent } from './oprema-index-treneri-datatable.component';

describe('OpremaIndexTreneriDatatableComponent', () => {
  let component: OpremaIndexTreneriDatatableComponent;
  let fixture: ComponentFixture<OpremaIndexTreneriDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaIndexTreneriDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaIndexTreneriDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
