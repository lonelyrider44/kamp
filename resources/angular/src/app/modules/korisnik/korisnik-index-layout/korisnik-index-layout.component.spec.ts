import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikIndexLayoutComponent } from './korisnik-index-layout.component';

describe('KorisnikIndexLayoutComponent', () => {
  let component: KorisnikIndexLayoutComponent;
  let fixture: ComponentFixture<KorisnikIndexLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikIndexLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikIndexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
