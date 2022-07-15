import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenerLayoutComponent } from './trener-layout.component';

describe('TrenerLayoutComponent', () => {
  let component: TrenerLayoutComponent;
  let fixture: ComponentFixture<TrenerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenerLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
