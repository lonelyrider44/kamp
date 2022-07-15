import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizioterapeutLayoutComponent } from './fizioterapeut-layout.component';

describe('FizioterapeutLayoutComponent', () => {
  let component: FizioterapeutLayoutComponent;
  let fixture: ComponentFixture<FizioterapeutLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizioterapeutLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizioterapeutLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
