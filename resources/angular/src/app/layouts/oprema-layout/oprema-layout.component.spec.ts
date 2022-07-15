import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpremaLayoutComponent } from './oprema-layout.component';

describe('OpremaLayoutComponent', () => {
  let component: OpremaLayoutComponent;
  let fixture: ComponentFixture<OpremaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpremaLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpremaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
