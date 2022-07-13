import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaIndexLayoutComponent } from './oprema-index-layout.component';

describe('OpremaIndexLayoutComponent', () => {
  let component: OpremaIndexLayoutComponent;
  let fixture: ComponentFixture<OpremaIndexLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaIndexLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaIndexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
