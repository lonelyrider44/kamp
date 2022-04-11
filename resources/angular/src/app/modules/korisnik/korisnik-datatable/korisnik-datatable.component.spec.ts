import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikDatatableComponent } from './korisnik-datatable.component';

describe('KorisnikDatatableComponent', () => {
  let component: KorisnikDatatableComponent;
  let fixture: ComponentFixture<KorisnikDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
