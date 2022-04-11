import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBasicComponent } from './details-basic.component';

describe('DetailsBasicComponent', () => {
  let component: DetailsBasicComponent;
  let fixture: ComponentFixture<DetailsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
