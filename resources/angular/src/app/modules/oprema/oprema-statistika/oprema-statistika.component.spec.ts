import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaStatistikaComponent } from './oprema-statistika.component';

describe('OpremaStatistikaComponent', () => {
  let component: OpremaStatistikaComponent;
  let fixture: ComponentFixture<OpremaStatistikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaStatistikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaStatistikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
