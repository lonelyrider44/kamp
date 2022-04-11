import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLayoutComponentComponent } from './details-layout-component.component';

describe('DetailsLayoutComponentComponent', () => {
  let component: DetailsLayoutComponentComponent;
  let fixture: ComponentFixture<DetailsLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLayoutComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
