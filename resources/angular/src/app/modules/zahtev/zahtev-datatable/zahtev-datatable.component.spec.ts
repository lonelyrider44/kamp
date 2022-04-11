import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahtevDatatableComponent } from './zahtev-datatable.component';

describe('ZahtevDatatableComponent', () => {
  let component: ZahtevDatatableComponent;
  let fixture: ComponentFixture<ZahtevDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahtevDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahtevDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
