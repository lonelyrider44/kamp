import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaUcesniciStatistikaDatatableComponent } from './oprema-ucesnici-statistika-datatable.component';

describe('OpremaUcesniciStatistikaDatatableComponent', () => {
  let component: OpremaUcesniciStatistikaDatatableComponent;
  let fixture: ComponentFixture<OpremaUcesniciStatistikaDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaUcesniciStatistikaDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaUcesniciStatistikaDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
