import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodatniPodaciComponent } from './dodatni-podaci.component';

describe('DodatniPodaciComponent', () => {
  let component: DodatniPodaciComponent;
  let fixture: ComponentFixture<DodatniPodaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodatniPodaciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodatniPodaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
