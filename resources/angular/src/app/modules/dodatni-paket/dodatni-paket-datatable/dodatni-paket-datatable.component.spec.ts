import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodatniPaketDatatableComponent } from './dodatni-paket-datatable.component';

describe('DodatniPaketDatatableComponent', () => {
  let component: DodatniPaketDatatableComponent;
  let fixture: ComponentFixture<DodatniPaketDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodatniPaketDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodatniPaketDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
